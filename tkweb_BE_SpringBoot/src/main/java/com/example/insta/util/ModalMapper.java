package com.example.insta.util;

import com.example.insta.entity.post.Comment;
import com.example.insta.entity.post.Post;
import com.example.insta.entity.user.User;
import com.example.insta.payload.Friend.FriendListResponse;
import com.example.insta.payload.Post.response.CommentResponse;
import com.example.insta.payload.Post.response.PostResponse;
import com.example.insta.payload.User.UserSummary;

import java.util.ArrayList;
import java.util.List;

public class ModalMapper {
    public static CommentResponse mapCommentToCommentResponse(Comment comment, User author) {
        CommentResponse commentResponse = new CommentResponse();

        commentResponse.setId(comment.getId());
        commentResponse.setBody(comment.getBody());
        commentResponse.setCreatedAt(comment.getCreatedAt());
        commentResponse.setPost_id(comment.getPost().getId());
        commentResponse.setCreatedBy(comment.getCreatedBy());

        UserSummary userSummary = new UserSummary();
        userSummary.setId(author.getId());
        userSummary.setEmail(author.getEmail());
        userSummary.setUsername(author.getUsername());
        userSummary.setFullName(author.getFullName());
        userSummary.setPhoneNumber(author.getPhoneNumber());
        commentResponse.setUserSummary(userSummary);
        return commentResponse;
    }

    public static PostResponse mapCommentToPostResponse(Post post, User author) {
        PostResponse postResponse = new PostResponse();

        postResponse.setId(post.getId());
        postResponse.setContent(post.getContent());
        postResponse.setTitle(post.getTitle());
        postResponse.setImagePath(post.getImagePath());
        postResponse.setCreatedAt(post.getCreatedAt());
        UserSummary userSummary = new UserSummary();
        userSummary.setId(author.getId());
        userSummary.setEmail(author.getEmail());
        userSummary.setUsername(author.getUsername());
        userSummary.setFullName(author.getFullName());
        userSummary.setPhoneNumber(author.getPhoneNumber());
        postResponse.setCreateUser(userSummary);
        return postResponse;
    }
    public static UserSummary mapUsersToUserSummaries(User user) {
        UserSummary userSummary = new UserSummary();

        userSummary.setId(user.getId());
        userSummary.setFullName(user.getFullName());
        userSummary.setEmail(user.getEmail());
        userSummary.setUsername(user.getUsername());
        userSummary.setPhoneNumber(user.getPhoneNumber());

        return userSummary;
    }
    public static FriendListResponse mapUsersListToUserSummariesList(List<User> userList){
        FriendListResponse friendListResponse = new FriendListResponse();
        List<UserSummary> userSummaries = new ArrayList<>();

        for (User user : userList)
            userSummaries.add(mapUsersToUserSummaries(user));

        friendListResponse.setListUserSummary(userSummaries);

        return friendListResponse;
    }
}
