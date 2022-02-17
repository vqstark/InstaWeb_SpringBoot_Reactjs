import React, { useState, useEffect } from "react";
import { Card, Button, Tabs, Form, Input, Modal, Avatar, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
// import Posts from "../Posts/Posts";
import { connect } from "react-redux";
import { editUserDetails, getUserData } from "../../redux/action/userAction";
import { getPosts } from "../../redux/action/dataAction";
import PostsSkeleton from "../../utils/PostsSkeleton";
import axios from "axios";
import Post from "../Post/Post";
import "./Profile.css"
const { TabPane } = Tabs;
const { Meta } = Card;
const Profile = ({ user }) => {
  const [posts, setPosts] = useState()
  useEffect(() => {
    axios.get("/post/myPost").then(res => {
      setPosts(res.data)
      console.log("=>>all my post", res);
    })
  }, [])

  const renderProfile = user.credentials && user.credentials.fullName ? (
    <>
      <div className="d-flex justify-content-center">
        <Avatar size={100} style={{ backgroundColor: "#000" }}>{user.credentials.fullName.charAt(0).toUpperCase()}</Avatar>
        <div className="ml-3">
          <Typography.Text strong style={{ textTransform: "uppercase" }}>{user.credentials.fullName}</Typography.Text>
          <div>
            <Typography.Text style={{marginLeft:"10px"}} >Username: </Typography.Text>
            <Typography.Text strong>{user.credentials.username}</Typography.Text>
          </div>
          <div className="d-flex">
            <MailOutlined className="mr-2" style={{ alignSelf: "center", margin: "0px 10px"}} />
            {user.credentials.email}
          </div>
          <div className="d-flex">
            <PhoneOutlined className="mr-2" style={{ alignSelf: "center", margin: "0px 10px"}} />
            {user.credentials.phoneNumber}
          </div>
        </div>
      </div>
      <Typography.Text  strong  className="mt-3 d-flex justify-content-center" style={{fontSize:"1.5rem"}} >Danh sách bài đăng</Typography.Text>

      <div className="listPost mt-2">
        {posts ? (
          posts.length !== 0 ? (
            posts.map((post) => <Post key={post.postId} post={post} />)
          ) : (
            <h5 className="text-center mt-1">Không có bài đăng</h5>
          )
        ) : (
          <PostsSkeleton />
        )}
      </div>
    </>
  ) : (
    <PostsSkeleton />

  );


  return renderProfile;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    UI: state.UI,
    data: state.data,
  };
};

const mapActionsToProps = {
  editUserDetails,
  getPosts,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
