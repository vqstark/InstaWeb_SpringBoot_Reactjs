package com.example.insta.payload.Post.response;

import com.example.insta.payload.User.UserSummary;
import lombok.Data;

import java.util.Date;

@Data
public class CommentResponse {
    private Long id;
    private String body;
    private Long post_id;
    private Long createdBy;
    private Date createdAt;
    private UserSummary userSummary;
}
