package com.example.insta.service;

import com.example.insta.entity.post.Post;
import com.example.insta.entity.user.User;
import com.example.insta.payload.Post.request.CommentRequest;
import com.example.insta.payload.Post.request.PostRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PostService {
    ResponseEntity<?> addComment(User user, Long postID, CommentRequest commentRequest) throws Exception;

    ResponseEntity<?> likePost(Long postId, User currentUser);

    ResponseEntity<?> unlikePost(Long postId, User currentUser);

    ResponseEntity<?> createPost(PostRequest postRequest, MultipartFile[] image, User currentUser);

    ResponseEntity<?> getAllPosts();

    ResponseEntity<?> getAllPostsById(Long userId);

    ResponseEntity<?> getMyPosts(User user);
}
