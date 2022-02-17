package com.example.insta.repository.Friend;

import com.example.insta.entity.user.Friend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Long> {

    List<Friend> findAllBySubjectId(Long subjectId);

    List<Friend> findAllByFriendId(Long friendId);

    Friend findFriendBySubjectIdAndFriendId(Long subjectId, Long friendId);
}
