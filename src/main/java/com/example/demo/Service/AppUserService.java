package com.example.demo.Service;

import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserService implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public AppUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println(userRepository.findByEmail(email));
        return userRepository.findByEmail(email).orElseThrow((() -> new UsernameNotFoundException("No se ha encontrado usuario con ese email.")));
    }

}
