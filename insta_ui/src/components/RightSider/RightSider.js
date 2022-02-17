import React from "react";
import { Card, Skeleton, Button, Tabs } from "antd";
import Search from "../Search/Search";
import { connect } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
import { useEffect } from "react";
import { allUsers, getOtherUser, removeFriend, getFriends, getFriendRequests, acceptFriendRequest, declineFriendRequest } from "../../redux/action/userAction";
import { useState } from "react";
import store from "../../redux/store";
import { CLEAR_USER } from "../../redux/type";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { BrowserRouter, HashRouter, Link, Route, Routes, Router } from "react-router-dom";

const RightSider = (props) => {
  const { id, user_follow } = props.credentials;

  const [visible, setVisible] = useState(false);
  // useEffect(() => {
  //   updateState();
  // }, [id]);
  const getUserDetails = (id) => {
    // props.getOtherUser(id);
  };

  const clearUser = () => {
    setVisible(false);
    store.dispatch({ type: CLEAR_USER });
  };
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const listFriends = props.user.friends ? (
    props.user.friends.map((user) => (
      <div
        key={user.id}
        style={{ cursor: "pointer" }}
        className="user mx-4 mb-2 d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center">\
            {/* <Button type="link"> */}
              <Avatar id="avatar" style={{ backgroundColor: getRandomColor() }}>{user.fullName.charAt(0)}</Avatar>
              <span
                onClick={() => {
                  getUserDetails(user.id);
                  setVisible(true);
                  // <Link to={`/user/${user.id}`} />
                }}
                className="user__name ml-1"
              >
                {/* <Link to='/user'>{user.fullName}</Link> */}
                {user.fullName}
              </span>
            {/* </Button> */}
            
        </div>
        <div className="user__follow">
          <Button type="secondary" size="small" onClick={()=> {props.removeFriend(user.id)}}>Hủy kết bạn</Button>
        </div>
      </div>
    ))
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
  const listFriendRequests =  props.user.friendRequests ? (
    props.user.friendRequests.map((user) => (
      <div
        key={user.id}
        style={{ cursor: "pointer" }}
        className="user mx-4 mb-2 d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center">
          <Avatar id="avatar" style={{ backgroundColor: getRandomColor() }}>{user.fullName.charAt(0)}</Avatar>
          <span
            onClick={() => {
              getUserDetails(user.id);
              setVisible(true);
            }}
            className="user__name ml-1"
          >
            {user.fullName}
          </span>
        </div>
        <div className="user__follow">
          <Button type="primary" size="small" onClick={()=> {props.acceptFriendRequest(user.id)}}>Chấp nhận</Button>
          <Button type="primary" size="small" onClick={()=> {props.declineFriendRequest(user.id)}}>Xóa</Button>
        </div>
      </div>
    ))
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
  return (
    <div>
      <Card
        bordered={false}
        className="py-3 "
        style={{ minHeight: "200vh" }}
      >

        <div className="users">
          <h6 className="mt-2 mb-3 font-weight-light text-center mt-3">
            Một vài người bạn
          </h6>
          <div style={{ display: "flex" }}>
            
          </div>
          <Tabs centered>
            <Tabs.TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Bạn bè
                </span>
              }
              key="1"
            >
              <div>{listFriends}</div>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Lời mời kết bạn
                </span>
              }
              key="2"
            >
               <div>{listFriendRequests}</div>
            </Tabs.TabPane>
          </Tabs>

        </div>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    credentials: state.user.credentials, 
    user: state.user  
  };
};

const mapActionsToProps = {
  allUsers,
  getFriends,
  getFriendRequests,
  removeFriend,
  acceptFriendRequest,
  declineFriendRequest,
  getOtherUser,
};

export default connect(mapStateToProps, mapActionsToProps)(RightSider);
