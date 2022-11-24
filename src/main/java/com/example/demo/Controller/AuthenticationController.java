package com.example.demo.Controller;

import com.example.demo.Configuration.*;
import com.example.demo.Model.AppUser;
import com.example.demo.Model.Role;
import com.example.demo.Model.User;
import com.example.demo.Model.UserRoles;
import com.example.demo.Service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private static final Logger logger = Logger.getLogger(AuthenticationController.class);

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest registerRequest, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            logger.error("Datos inválidos");
            return new ResponseEntity("Datos invalidos", HttpStatus.BAD_REQUEST);
        }
        if (userService.loadUserByEmail(registerRequest.getEmail()) != null) {
            logger.error("El correo ya está registrado");
            return new ResponseEntity("El correo ya está registrado", HttpStatus.BAD_REQUEST);
        }
        User user = new User(registerRequest.getName(),
                registerRequest.getSurname(),
                registerRequest.getEmail(),
                passwordEncoder.encode(registerRequest.getPassword()),
                registerRequest.getCity());
        // Seteo el rol por defecto: USER
        Role role = new Role();
        role.setId(2);
        user.setRole(role);
        userService.newUser(user);


        logger.info("Usuario creado exitosamente");
        return new ResponseEntity("Usuario creado exitosamente", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest, BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                        loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtil.generateToken(authentication);
        LoginResponse token = new LoginResponse(jwt);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }


}
