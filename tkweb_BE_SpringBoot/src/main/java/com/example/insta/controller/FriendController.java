package com.example.insta.controller;

import com.example.insta.entity.user.User;
import com.example.insta.payload.Friend.FriendListResponse;
import com.example.insta.payload.Friend.FriendResponse;
import com.example.insta.service.FriendService;
import com.example.insta.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/friends")
public class FriendController {

    @Autowired
    private FriendService friendService;

    @Autowired
    private UserService userService;

    @GetMapping()
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public FriendListResponse getFriends(){
        return friendService.getFriends(getCurrentUser().getId());
    }

    @GetMapping("/requests")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public FriendListResponse getFriendRequests(){
        return friendService.getFriendRequests(getCurrentUser().getId());
    }

    @PostMapping("/{friendId}/add")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<?> add(@PathVariable Long friendId){
        return friendService.addFriend(friendId, getCurrentUser());
    }

    @PostMapping("/{friendId}/remove")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<?> remove(@PathVariable Long friendId){
        return friendService.removeFriend(friendId, getCurrentUser());
    }

    @PostMapping("/{friendRequestId}/accept")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public FriendResponse accept(@PathVariable Long friendRequestId){
        return friendService.acceptFriendRequest(getCurrentUser().getId(),friendRequestId);
    }

    @PostMapping("/{friendRequestId}/decline")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public FriendResponse decline(@PathVariable Long friendRequestId){
        return friendService.declineFriendRequest(friendRequestId);
    }

    private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        return userService.findByUserName(username);
    }
}
