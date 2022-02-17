package com.example.insta.payload.User;

import lombok.Data;

@Data
public class UserSummary {
    private Long id;
    private String username;
    private String fullName;
    private String email;
    private String phoneNumber;
}
