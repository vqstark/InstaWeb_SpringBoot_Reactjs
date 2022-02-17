package com.example.insta.payload.Friend;

import com.example.insta.payload.User.UserSummary;

import java.util.List;

public class FriendListResponse {
    private List<UserSummary> listUserSummary;

    public List<UserSummary> getListUserSummary() {
        return listUserSummary;
    }

    public void setListUserSummary(List<UserSummary> listUserSummary) {
        this.listUserSummary = listUserSummary;
    }
}
