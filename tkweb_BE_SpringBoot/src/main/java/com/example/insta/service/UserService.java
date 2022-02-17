package com.example.insta.service;

import com.example.insta.entity.user.User;
import com.example.insta.security.UserPrincipal;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    User createUser(User user);

    User findByUserName(String username);

    UserPrincipal findByUsername(String username);

    User findById(Long userId);

    List<User> getAllUsers();
}
