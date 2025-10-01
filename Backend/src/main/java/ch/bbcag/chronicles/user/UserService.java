package ch.bbcag.chronicles.user;

import ch.bbcag.chronicles.role.Role;
import ch.bbcag.chronicles.role.RoleRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    private static final String DEFAULT_ROLE = "USER";
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User save(User user) {
        userRepository.save(user);
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + username);
        }
        return user;
    }

    @Transactional
    public User signUp(String username, String email, String password) {
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setUsername(username);
        newUser.setPassword(passwordEncoder.encode(password));
        Role userRole = roleRepository.findByName(DEFAULT_ROLE);
        newUser.getRoles().add(userRole);
        userRepository.save(newUser);
        return newUser;
    }

    public boolean existsByUsernameOrEmail(String email, String username) {
        return userRepository.existsByUsernameOrEmail(email, username);
    }
}
