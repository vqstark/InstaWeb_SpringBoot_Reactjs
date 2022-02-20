package com.example.insta.payload.Post.response;


import com.example.insta.entity.post.Comment;
import com.example.insta.entity.post.Likee;
import com.example.insta.payload.Friend.FriendListResponse;
import com.example.insta.payload.User.UserSummary;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class PostResponse {
    private Long id;
    private String title;
    private String content;
    private String imagePath;
    private Date createdAt;
    private UserSummary createUser;
}

