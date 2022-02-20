package com.example.insta.repository.Post;

import com.example.insta.entity.post.Likee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Likee, Long> {
    @Query("SELECT l FROM Likee l where l.post.id = :postId and l.user.id = :userId")
    Likee findLikeByPostIdByUserId(@Param("userId") Long userId, @Param("postId") Long postId);

    List<Likee> findAllByPostId(Long postId);

    Likee findByUserIdAndPostId(Long userId, Long postId);

    Page<Likee> findByPostId(Long postId, Pageable pageable);

    @Query("SELECT COUNT(l.id) from Likee l where l.post.id = :postId")
    long countByPostId(@Param("postId") Long postId);
}
