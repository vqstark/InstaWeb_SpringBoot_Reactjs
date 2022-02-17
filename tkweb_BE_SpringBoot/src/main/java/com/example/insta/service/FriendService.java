package com.example.insta.service;

import com.example.insta.entity.user.User;
import com.example.insta.payload.Friend.FriendListResponse;
import com.example.insta.payload.Friend.FriendResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface FriendService {
    ResponseEntity<?> addFriend(Long friendId, User currentUser);

    ResponseEntity<?> removeFriend(Long friendId, User currentUser);

    FriendListResponse getFriends(Long currentUserId);

    FriendListResponse getFriendRequests(Long currentUserId);

    FriendResponse acceptFriendRequest(Long friendId, Long subjectId);

    FriendResponse declineFriendRequest(Long friendId);
}
