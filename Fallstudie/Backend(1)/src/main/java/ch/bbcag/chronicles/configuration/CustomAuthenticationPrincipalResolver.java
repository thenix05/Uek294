package ch.bbcag.chronicles.configuration;

import ch.bbcag.chronicles.user.User;
import org.springframework.core.MethodParameter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import java.util.Set;

public class CustomAuthenticationPrincipalResolver implements HandlerMethodArgumentResolver {

    private final boolean authenticationEnabled;

    public CustomAuthenticationPrincipalResolver(boolean authenticationEnabled) {
        this.authenticationEnabled = authenticationEnabled;
    }

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameterAnnotation(AuthenticationPrincipal.class) != null;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
                                  NativeWebRequest webRequest, WebDataBinderFactory binderFactory) {

        if (!authenticationEnabled) {
            User user = new User();
            user.setId(2);
            user.setUsername("admin");
            user.setRoles(Set.of());
            return user;
        }

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            return authentication.getPrincipal();
        }

        return null;
    }
}
