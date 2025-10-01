package ch.bbcag.chronicles.authentication;

import ch.bbcag.chronicles.FailedValidationException;
import ch.bbcag.chronicles.authentication.dto.SignInRequestDTO;
import ch.bbcag.chronicles.authentication.dto.SignInResponseDTO;
import ch.bbcag.chronicles.authentication.dto.SignUpRequestDTO;
import ch.bbcag.chronicles.authentication.dto.SignUpResponseDTO;
import ch.bbcag.chronicles.user.User;
import ch.bbcag.chronicles.user.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(AuthenticationController.PATH)
public class AuthenticationController {
    public static final String PATH = "/auth";

    private final UserService userService;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationController(UserService userService, JWTService jwtService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/signup")
    @SecurityRequirements
    public SignUpResponseDTO signUp(@Valid @RequestBody SignUpRequestDTO signUpRequestDTO) {
        if (userService.existsByUsernameOrEmail(signUpRequestDTO.getUsername(), signUpRequestDTO.getEmail())) {
            throw new FailedValidationException(
                    Map.of("email/username", List.of("email or username already exists"))
            );
        }
        User newUser = userService.signUp(signUpRequestDTO.getUsername(), signUpRequestDTO.getEmail(), signUpRequestDTO.getPassword());
        return new SignUpResponseDTO(newUser);
    }

    @PostMapping("/signin")
    @SecurityRequirements
    public SignInResponseDTO signIn(@Valid @RequestBody SignInRequestDTO signInRequestDTO) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequestDTO.getEmail(), signInRequestDTO.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = (User) authentication.getPrincipal();
        String token = jwtService.generateToken(user);
        return new SignInResponseDTO(user, token);
    }
}
