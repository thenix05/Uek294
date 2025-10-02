package ch.bbcag.chronicles.configuration;

import ch.bbcag.chronicles.GlobalControllerExceptionHandler;
import ch.bbcag.chronicles.authentication.UserConverter;
import ch.bbcag.chronicles.chronicle.ChronicleController;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class ApplicationConfiguration {
    @Value("${app.allowed-urls}")
    private String[] allowedUrls;

    @Value("${app.auth-urls}")
    private String[] authUrls;

    @Value("${app.allowed-origins}")
    private String[] allowedOrigins;

    @Value("${authentication.enabled:true}")
    private boolean authenticationEnabled;

    private final JWTConfiguration jwtConfiguration;

    private final ObjectMapper objectMapper;

    @Autowired
    public ApplicationConfiguration(JWTConfiguration jwtConfiguration,  ObjectMapper objectMapper) {
        this.jwtConfiguration = jwtConfiguration;
        this.objectMapper = objectMapper;
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(CsrfConfigurer::disable)
                .cors(corsConf -> corsConf.configurationSource(corsConfigurationSource()))
                .exceptionHandling(c -> {
                    c.accessDeniedHandler((request, response, accessDeniedException) -> {response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                        var message = new GlobalControllerExceptionHandler.JsonMessage("Authorization Failed: Make sure the Authorization header is correct and that you have access rights.");
                        objectMapper.writeValue(response.getOutputStream(), message);
                    });
                    c.authenticationEntryPoint((request, response, authException) -> {
                        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                        var message = new GlobalControllerExceptionHandler.JsonMessage("Authentication Failed: Make sure the Authorization header is correct and that you have access rights.");
                        objectMapper.writeValue(response.getOutputStream(), message);
                    });
                })
                .headers(headerConf -> headerConf.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable))
                .authorizeHttpRequests(this::configureAuthorization)
                .oauth2ResourceServer(oauthConf -> oauthConf.jwt(jwtConf -> jwtConf.jwtAuthenticationConverter(new UserConverter())))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    private void configureAuthorization(AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizationManagerRequestMatcherRegistry auth) {
        if (authenticationEnabled) {
            auth.requestMatchers(HttpMethod.GET, allowedUrls).permitAll()
                    .requestMatchers(HttpMethod.POST, authUrls).permitAll()
                    .requestMatchers(HttpMethod.GET, ChronicleController.PATH + "/**").permitAll()
                    .anyRequest().authenticated();
        } else {
            auth.anyRequest().permitAll();
        }
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of(allowedOrigins));
        configuration.setAllowedMethods(List.of("*"));
        configuration.setAllowedHeaders(List.of("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public JwtDecoder customDecoder() {
        return NimbusJwtDecoder
                .withSecretKey(new SecretKeySpec(jwtConfiguration.getSecret().getBytes(StandardCharsets.UTF_8), jwtConfiguration.getAlgorithm()))
                .build();
    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
