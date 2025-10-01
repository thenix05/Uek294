package ch.bbcag.chronicles.authentication.dto;

import ch.bbcag.chronicles.role.Role;
import ch.bbcag.chronicles.user.User;

import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public class SignInResponseDTO {
    public record UserDTO(String username, Set<String> roles) {
    }

    private UserDTO user;
    private String token;

    public SignInResponseDTO(User user, String token) {
        this.user = new UserDTO(user.getUsername(), user.getRoles().stream().map(Role::getName).collect(Collectors.toSet()));
        this.token = token;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SignInResponseDTO that = (SignInResponseDTO) o;
        return Objects.equals(user.username(), that.user.username()) && Objects.equals(token, that.token);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user.username(), token);
    }

    @Override
    public String toString() {
        return "SignInResponseDTO{" +
                "username='" + user.username() + '\'' +
                ", token='" + token + '\'' +
                ", roles=" + user.roles() +
                '}';
    }
}
