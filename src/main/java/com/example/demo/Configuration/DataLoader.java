package com.example.demo.Configuration;

import com.example.demo.Model.AppUser;
import com.example.demo.Model.AppUserRoles;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    private UserRepository userRepository;

    @Autowired
    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode("a");

        userRepository.save(new AppUser("Melina", "melina27", "meli@gmail.com", password, AppUserRoles.ADMIN));
        userRepository.save(new AppUser("Celi", "celi123", "celi@gmail.com", password, AppUserRoles.ADMIN));
        userRepository.save(new AppUser("Santi", "santi123", "santi@gmail.com", password, AppUserRoles.ADMIN));
        userRepository.save(new AppUser("Eze", "eze123", "eze@gmail.com", password, AppUserRoles.ADMIN));
        userRepository.save(new AppUser("Flor", "flor123", "flor@gmail.com", password, AppUserRoles.ADMIN));
    }
}
