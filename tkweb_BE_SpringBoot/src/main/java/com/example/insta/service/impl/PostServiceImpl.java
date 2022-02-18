package com.example.insta.service.impl;

import com.example.insta.entity.post.Comment;
import com.example.insta.entity.post.Likee;
import com.example.insta.entity.post.Post;
import com.example.insta.entity.user.User;
import com.example.insta.payload.ApiResponse;
import com.example.insta.payload.Post.request.CommentRequest;
import com.example.insta.payload.Post.request.PostRequest;
import com.example.insta.payload.Post.response.PostResponse;
import com.example.insta.repository.Post.CommentRepository;
import com.example.insta.repository.Post.LikeRepository;
import com.example.insta.repository.Post.PostRepository;
import com.example.insta.repository.UserRepository;
import com.example.insta.service.CommentService;
import com.example.insta.service.FilesStorageService;
import com.example.insta.service.PostService;
import com.example.insta.util.ModalMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentService commentService;

    @Autowired
    private FilesStorageService filesStorageService;


    @Override
    public ResponseEntity<?> addComment(User currentUser, Long postID, CommentRequest commentRequest) throws Exception {
        Comment comment = commentService.commentPost(postID, commentRequest, currentUser);
        return ResponseEntity.ok(comment);
    }

    @Override
    public ResponseEntity<?> likePost(Long postID, User currentUser) {
        Likee like = new Likee();
        like.setPost(postRepository.findById1(postID));
        like.setUser(currentUser);
        likeRepository.save(like);
        return ResponseEntity.ok(like);
    }

    @Override
    public ResponseEntity<?> unlikePost(Long postID, User currentUser) {
        Likee like = new Likee();
        like.setPost(postRepository.findById1(postID));
        like.setUser(currentUser);
        likeRepository.delete(like);
        return ResponseEntity.ok(like);
    }

    @Override
    public ResponseEntity<?> createPost(PostRequest postRequest, MultipartFile[] image, User currentUser) {
        List<String> fileNames = new ArrayList<>();

        if(image != null) {
            Arrays.asList(image).stream().forEach(file -> {
                String randomkey = UUID.randomUUID().toString();
                filesStorageService.save(file, randomkey);
                fileNames.add(randomkey + file.getOriginalFilename());
            });
        }
//        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
//                .path("/file/")
//                .path(fileName)
//                .toUriString();

        Post post = new Post();
        post.setTitle(postRequest.getTitle());
        post.setContent(postRequest.getContent());
        post.setCreatedBy(currentUser.getId());
        post.setImagePath(fileNames.stream()
                .map(n -> String.valueOf(n))
                .collect(Collectors.joining(",", "", "")));
        postRepository.save(post);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{postId}")
                .buildAndExpand(post.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Post created successfully."));
    }

    @Override
    public ResponseEntity<?> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        List<PostResponse> postResponses = posts.stream().map(post -> { return ModalMapper.mapPostToPostResponse(post,
                userRepository.findById1(post.getCreatedBy()),
                likeRepository.findAllByPostId(post.getId()));}).collect(Collectors.toList());
        return ResponseEntity.ok(postResponses);
    }

    @Override
    public ResponseEntity<?> getAllPostsById(Long userId) {
        List<Post> posts = postRepository.findAllPostByCreate(userId);
        List<PostResponse> postResponses = posts.stream().map(post -> { return ModalMapper.mapPostToPostResponse(post,
                userRepository.findById1(post.getCreatedBy()),
                likeRepository.findAllByPostId(post.getId()));}).collect(Collectors.toList());
        return ResponseEntity.ok(postResponses);
    }


    @Override
    public ResponseEntity<?> getMyPosts(User user) {
        List<Post> posts = postRepository.findAllPostByCreate(user.getId());
        List<PostResponse> postResponses = posts.stream().map(post -> { return ModalMapper.mapPostToPostResponse(post,
                userRepository.findById1(post.getCreatedBy()),
                likeRepository.findAllByPostId(post.getId()));}).collect(Collectors.toList());
        return ResponseEntity.ok(postResponses);
    }


}
