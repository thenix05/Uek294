package ch.bbcag.chronicles;

import ch.bbcag.chronicles.chronicle.ChronicleService;
import ch.bbcag.chronicles.role.RoleService;
import ch.bbcag.chronicles.user.UserService;
import jakarta.transaction.Transactional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeed implements CommandLineRunner {
    private final RoleService roleService;
    private final UserService userService;
    private final ChronicleService postService;


    public DatabaseSeed(RoleService roleService, UserService userService, ChronicleService postService) {
        this.roleService = roleService;
        this.userService = userService;
        this.postService = postService;
    }

    @Transactional
    @Override
    public void run(String... args) throws Exception {

    }
}
