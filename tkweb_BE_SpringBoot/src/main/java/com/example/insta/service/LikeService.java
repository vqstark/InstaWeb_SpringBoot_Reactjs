package com.example.insta.service;

import com.example.insta.entity.post.Comment;
import com.example.insta.entity.post.Likee;
import com.example.insta.entity.user.User;
import com.example.insta.payload.Post.response.CommentResponse;
import com.example.insta.payload.Post.response.LikeResponse;
import com.example.insta.repository.Post.CommentRepository;
import com.example.insta.repository.Post.LikeRepository;
import com.example.insta.util.ModalMapper;
import org.aspectj.lang.annotation.AdviceName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private UserService userService;

    public Likee likePost(Long postId, User currentUser){
        return null;
    }

    public List<LikeResponse> loadLikes(Long postID){
        List<Likee> likes = likeRepository.findAllByPostId(postID);
        List<LikeResponse> likeResponses = likes.stream()
                .map(like -> {return ModalMapper.mapLikeToLikeResponse(like, getUserLike(like.getUser().getId()));
                }).collect(Collectors.toList());
        return likeResponses;
    }

    private User getUserLike(Long userId){
        return userService.findById(userId);
    }
}
