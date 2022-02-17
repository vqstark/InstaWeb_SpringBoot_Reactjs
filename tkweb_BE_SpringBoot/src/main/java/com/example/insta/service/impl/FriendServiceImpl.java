package com.example.insta.service.impl;

import com.example.insta.entity.user.Friend;
import com.example.insta.entity.user.FriendRequest;
import com.example.insta.entity.user.User;
import com.example.insta.payload.Friend.FriendListResponse;
import com.example.insta.payload.Friend.FriendResponse;
import com.example.insta.repository.Friend.FriendRepository;
import com.example.insta.repository.Friend.FriendRequestRepository;
import com.example.insta.repository.UserRepository;
import com.example.insta.service.FriendService;
import com.example.insta.util.ModalMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FriendServiceImpl implements FriendService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FriendRepository friendRepository;

    @Autowired
    private FriendRequestRepository friendRequestRepository;

    @Override
    public ResponseEntity<?> addFriend(Long friendId, User currentUser) {
        // S1 send friend request to S2
        User S1 = userRepository.findById1(currentUser.getId());
        User S2 = userRepository.findById1(friendId);

        FriendRequest f1 = new FriendRequest();
        f1.setSubject(S1);
        f1.setFriend(S2);
        friendRequestRepository.save(f1);
        return ResponseEntity.ok("Ok");
    }

    @Override
    public ResponseEntity<?> removeFriend(Long friendId, User currentUser) {
        Friend friend = friendRepository.findFriendBySubjectIdAndFriendId(currentUser.getId(), friendId);
        friendRepository.delete(friend);
        return ResponseEntity.ok("Ok");
    }


    @Override
    public FriendListResponse getFriends(Long currentUserId) {
        List<Friend> listSubject = friendRepository.findAllBySubjectId(currentUserId);
        List<Friend> listFriend = friendRepository.findAllByFriendId(currentUserId);
        List<User> listU = new ArrayList<>();
        for(Friend i: listSubject){
            listU.add(userRepository.findById1(i.getFriend().getId()));
        }

        for(Friend i: listFriend){
            listU.add(userRepository.findById1(i.getFriend().getId()));
        }
        return ModalMapper.mapUsersListToUserSummariesList(listU);
    }

    @Override
    public FriendListResponse getFriendRequests(Long currentUserId) {
        List<FriendRequest> list = friendRequestRepository.findAllByFriendId(currentUserId);
        List<User> listU = new ArrayList<>();
        for(FriendRequest i: list){
            listU.add(userRepository.findById1(i.getSubject().getId()));
        }
        return ModalMapper.mapUsersListToUserSummariesList(listU);
    }

    @Override
    public FriendResponse acceptFriendRequest(Long friendId, Long subjectId) {
//        FriendRequest fr = friendRequestRepository.getOne(friendRequestId);

        FriendRequest fr = friendRequestRepository.findByFriendIdAndSubjectId(friendId, subjectId);

        if (fr!=null){
            Friend friend = new Friend();
            friend.setSubject(fr.getFriend());
            friend.setFriend(fr.getSubject());
            friendRepository.save(friend);
            friendRequestRepository.delete(fr);

            return new FriendResponse(true);
        }
        return new FriendResponse(false);
    }

    @Override
    public FriendResponse declineFriendRequest(Long friendRequestId) {
        FriendRequest fr = friendRequestRepository.getOne(friendRequestId);
        if (fr!=null){
            friendRequestRepository.delete(fr);
        }
        return new FriendResponse(false);
    }
}
