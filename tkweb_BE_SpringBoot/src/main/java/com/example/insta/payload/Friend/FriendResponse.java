package com.example.insta.payload.Friend;

public class FriendResponse {
    private boolean isFriend;

    public FriendResponse() {
    }

    public FriendResponse(boolean isFriend) {
        this.isFriend = isFriend;
    }

    public boolean isFriend1() {
        return isFriend;
    }

    public void setFriend(boolean isFriend) {
        this.isFriend = isFriend;
    }
}
