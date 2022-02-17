package com.example.insta.payload.Post.response;


import com.example.insta.payload.User.UserSummary;
import lombok.Data;

import java.util.Date;

@Data
public class PostResponse {
    private Long id;
    private String title;
    private String content;
    private String imagePath;
    private Date createdAt;
    private UserSummary createUser;
}
