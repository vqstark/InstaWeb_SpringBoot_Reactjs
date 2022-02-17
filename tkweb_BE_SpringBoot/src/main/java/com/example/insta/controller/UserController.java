package com.example.insta.controller;

import com.example.insta.entity.user.User;
import com.example.insta.payload.User.UserSummary;
import com.example.insta.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.modelmapper.ModelMapper;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    ModelMapper modelMapper = new ModelMapper();

    @GetMapping("/getInfo")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<?> getInfo(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        User user = userService.findByUserName(auth.getName());

        UserSummary userSummary = modelMapper.map(user, UserSummary.class);
        return ResponseEntity.ok(userSummary);
    }

    @GetMapping("/{userId}/getInfo")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<?> getUser(@PathVariable Long userId){
        User user = userService.findById(userId);

        UserSummary userSummary = modelMapper.map(user, UserSummary.class);
        return ResponseEntity.ok(userSummary);
    }

    @GetMapping("/getAllUsers")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<?> getAllUsers(){
        List<User> list = userService.getAllUsers();
        return ResponseEntity.ok(list);
    }
}
