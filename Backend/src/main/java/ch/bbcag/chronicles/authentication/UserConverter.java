package ch.bbcag.chronicles.authentication;

import ch.bbcag.chronicles.role.Role;
import ch.bbcag.chronicles.user.User;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Set;
import java.util.stream.Collectors;

public class UserConverter implements Converter<Jwt, UserAuthenticationToken> {
    @Override
    public UserAuthenticationToken convert(Jwt jwt) {
        int id = Integer.parseInt(jwt.getSubject());
        String username = jwt.getClaimAsString("username");
        Set<Role> roles = jwt.getClaimAsStringList("roles").stream().map(Role::new).collect(Collectors.toSet());
        User user = new User();
        user.setId(id);
        user.setUsername(username);
        user.setRoles(roles);
        return new UserAuthenticationToken(jwt, user);
    }
}

