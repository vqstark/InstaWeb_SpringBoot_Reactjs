package com.example.insta.controller.admin;


import com.example.insta.entity.user.Role;
import com.example.insta.entity.user.User;
import com.example.insta.repository.RoleRepository;
import com.example.insta.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;

@Controller
@RequestMapping("/admin")
@PreAuthorize("hasAnyAuthority('ADMIN')")
public class AdminController {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllUsers(){
        List<User> list = userService.getAllUsers();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/hello")
    public ResponseEntity testAdmin() {
        return ResponseEntity.ok("ADMIN");
    }

    @PostMapping("/add")
    public ResponseEntity<?> register(@RequestBody User user){
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        Role role = roleRepository.findByRoleName("ADMIN");
        HashSet role_ = new HashSet();
        role_.add(role);
        user.setRoles(role_);
        User user1 = userService.findByUserName(user.getUsername());
        if(user1!=null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This admin already exists");
        }
        userService.createUser(user);
        return ResponseEntity.ok("Success");
    }
}
