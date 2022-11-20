package com.example.demo.Service;

import com.example.demo.Model.AppUser;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public AppUser newUser(AppUser user) {
        return userRepository.save(user);
    }

    public List<AppUser> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<AppUser> userByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Boolean loadUserByEmail(String email) {
        return (userRepository.findByEmail(email) != null);
    }

}
