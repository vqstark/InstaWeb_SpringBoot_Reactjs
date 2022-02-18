package com.example.insta.service;

import com.example.insta.entity.post.Comment;
import com.example.insta.entity.post.Post;
import com.example.insta.entity.user.User;
import com.example.insta.payload.Post.request.CommentRequest;
import com.example.insta.payload.Post.response.CommentResponse;
import com.example.insta.repository.Post.CommentRepository;
import com.example.insta.repository.Post.LikeRepository;
import com.example.insta.repository.Post.PostRepository;
import com.example.insta.util.ModalMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserService userService;

    public Comment commentPost(Long postID, CommentRequest commentRequest, User currentUser) throws Exception {
        Post post = postRepository.findById(postID)
                .orElseThrow(() -> new Exception("Can't find this post"));

        Comment comment = new Comment();
        comment.setBody(commentRequest.getBody());
        comment.setPost(post);
        comment.setUser(currentUser);
        comment.setCreatedBy(currentUser.getId());

        return commentRepository.save(comment);
    }

    public List<CommentResponse> loadComments(Long postID){
        List<Comment> comments = commentRepository.findCommentsByPostId(postID);
        List<CommentResponse> commentResponses = comments.stream()
                .map(comment -> {return ModalMapper.mapCommentToCommentResponse(comment, getUserComment(comment.getCreatedBy()));
                }).collect(Collectors.toList());
        return commentResponses;
    }

    private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        return userService.findByUserName(username);
    }

    private User getUserComment(Long userId){
        return userService.findById(userId);
    }
}
