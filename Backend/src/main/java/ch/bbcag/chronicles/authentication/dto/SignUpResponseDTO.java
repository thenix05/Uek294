package ch.bbcag.chronicles.authentication.dto;

import ch.bbcag.chronicles.role.Role;
import ch.bbcag.chronicles.user.User;

import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public class SignUpResponseDTO {
    private int id;
    private String username;
    private Set<String> roles;

    public SignUpResponseDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toSet());
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SignUpResponseDTO that = (SignUpResponseDTO) o;
        return id == that.id && Objects.equals(username, that.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username);
    }

    @Override
    public String toString() {
        return "SignUpResponseDTO{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", roles=" + roles +
                '}';
    }
}
