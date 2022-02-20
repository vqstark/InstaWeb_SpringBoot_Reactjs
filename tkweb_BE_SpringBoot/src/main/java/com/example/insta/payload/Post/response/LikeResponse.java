package com.example.insta.payload.Post.response;

import com.example.insta.payload.User.UserSummary;
import lombok.Data;

import java.util.Date;

@Data
public class LikeResponse {
    private Long id;
    private Long createdBy;
    private Date createdAt;
    private Long userId;
    private UserSummary userSummary;
}
