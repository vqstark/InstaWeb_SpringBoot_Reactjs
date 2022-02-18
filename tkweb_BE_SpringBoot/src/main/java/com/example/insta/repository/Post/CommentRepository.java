package com.example.insta.repository.Post;

import com.example.insta.entity.post.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT COUNT(v.id) from Comment v where v.post.id = :postId")
    long countByPostId(@Param("postId") Long postId);

    Page<Comment> findCommentsByPostId(@Param("postId") Long postId, Pageable pageable);

    List<Comment> findCommentsByPostId(@Param("postId") Long postId);

    List<Comment> findAllByPostId(Long postId);

    @Query("SELECT c FROM Comment c where c.id = :commentId and c.post.id = :postId")
    Optional<Comment> findCommentByPostIdAndCommentId(@Param("postId") Long postId, @Param("commentId") Long commentId);
}
