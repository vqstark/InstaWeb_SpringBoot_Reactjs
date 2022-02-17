package com.example.insta.controller;

import com.example.insta.dto.LoginDTO;
import com.example.insta.entity.user.Role;
import com.example.insta.entity.user.User;
import com.example.insta.payload.User.JwtResponse;
import com.example.insta.repository.RoleRepository;
import com.example.insta.security.JwtUtil;
import com.example.insta.security.UserPrincipal;
import com.example.insta.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;

@RestController
public class AuthController {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        Role role = roleRepository.findByRoleName("USER");
        HashSet role_ = new HashSet();
        role_.add(role);
        user.setRoles(role_);
        User user1 = userService.findByUserName(user.getUsername());
        if(user1!=null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }
        userService.createUser(user);
        return ResponseEntity.ok("Success");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO){
        User user = new User();
        user.setUsername(loginDTO.getUsername());
        user.setPassword(loginDTO.getPassword());

        UserPrincipal userPrincipal = userService.findByUsername(user.getUsername());
        if(user==null || !new BCryptPasswordEncoder().matches(user.getPassword(), userPrincipal.getPassword())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username or password is incorrect");
        }

        final String token = jwtUtil.generateToken(userPrincipal);

        return ResponseEntity.ok(new JwtResponse(token));
    }
}
