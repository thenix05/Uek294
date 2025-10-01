package ch.bbcag.chronicles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ChroniclesBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(ChroniclesBackendApplication.class, args);
    }
}
