package com.example.insta.repository.Friend;

import com.example.insta.entity.user.FriendRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendRequestRepository extends JpaRepository<FriendRequest, Long> {
    List<FriendRequest> findAllByFriendId(Long friendId);

    FriendRequest findByFriendIdAndSubjectId(Long friendId, Long subjectId);

    List<FriendRequest> findAllBySubjectId(Long subjectId);
}
