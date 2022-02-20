package com.example.insta.controller;

import com.example.insta.entity.post.Post;
import com.example.insta.entity.user.User;
import com.example.insta.payload.Post.request.CommentRequest;
import com.example.insta.payload.Post.request.PostRequest;
import com.example.insta.payload.Post.response.CommentResponse;
import com.example.insta.payload.Post.response.LikeResponse;
import com.example.insta.service.CommentService;
import com.example.insta.service.LikeService;
import com.example.insta.service.PostService;
import com.example.insta.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private CommentService commentService;

    @Autowired
    private LikeService likeService;

    @Autowired
    private UserService userService;

    @GetMapping()
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity<?> getPosts(){
        return postService.getAllPosts();
    }

    @GetMapping("/myPost")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity<?> getMyPosts() {
        return postService.getMyPosts(getCurrentUser());
    }

    @GetMapping("/{userId}/allPosts")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity<?> getAllPostsById(@PathVariable Long userId) {
        return postService.getAllPostsById(userId);
    }

    @PostMapping("/create")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity<?> create(@RequestParam(value = "image",required = false) MultipartFile[] image,
                                    @RequestParam(value = "title", required = true) String title,
                                    @RequestParam(value = "content", required = false) String content){
        PostRequest postRequest = new PostRequest();
        postRequest.setTitle(title);
        postRequest.setContent(content);
        return postService.createPost(postRequest, image, getCurrentUser());
    }

    @PostMapping("/{postID}/addComment")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity<?> addComment(@PathVariable long postID,
                                        @RequestBody CommentRequest commentRequest) throws Exception {
        return postService.addComment(getCurrentUser(), postID, commentRequest);
    }

    @GetMapping("/{postID}/comments")
    @PreAuthorize("hasAnyAuthority('USER')")
    public List<CommentResponse> loadComments(@PathVariable long postID){
        return commentService.loadComments(postID);
    }

    @GetMapping("/{postID}/likes")
    @PreAuthorize("hasAnyAuthority('USER')")
    public List<LikeResponse> loadLikes(@PathVariable long postID){
        return likeService.loadLikes(postID);
    }

    @PostMapping("/{postID}/like")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity<?> likePost(@PathVariable long postID){
        return postService.likePost(postID, getCurrentUser());
    }

    @PostMapping("/{postID}/unlike")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity<?> unlikePost(@PathVariable long postID){
        return postService.unlikePost(postID, getCurrentUser());
    }

    private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        return userService.findByUserName(username);
    }

}
