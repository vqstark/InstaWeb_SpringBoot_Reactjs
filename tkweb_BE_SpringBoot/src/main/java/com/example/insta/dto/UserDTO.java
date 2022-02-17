package com.example.insta.dto;

import com.example.insta.entity.user.Role;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class UserDTO {
    private String username;

    private String fullName;

    private String email;

    private String phoneNumber;

    private Set<Role> roles = new HashSet<>();
}
