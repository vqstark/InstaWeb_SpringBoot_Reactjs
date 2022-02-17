import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";
import { getPosts } from "../../redux/action/dataAction";
import PostsSkeleton from "../../utils/PostsSkeleton";
import "./Posts.css"
import { config } from "../../config/constants";
import { Masonry } from "masonic";
import ImageCard from './ImageCard'

import { Modal } from "antd";
const Posts = (props) => {
  useEffect(() => {
    props.getPosts();
    // eslint-disable-next-line
  }, []);
  // console.log(props.user);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    if (props.data.posts) {
      let pts = [];
      props.data.posts.map((post) => {
        let photo = {
          src:post.imagePath ? (config.baseUrl + "/file/"  + post.imagePath.split(",")[0]) : "https://picsum.photos/200/200",
          id: post.id,
          post: post
          // name: post.title,
        }
        pts.push(photo);
      });
      setPhotos(pts);
    }
  }, [props.data.posts]);
  return (
    <div className="listPost2">
      {props.data.posts ? 
      (
        photos.length > 0 ? (
          // props.data.posts.map((post) => <Post key={post.postId} post={post} />)
          <Masonry
          items={photos}
          className={"post-grid"}
          columnGutter={18} // Set khoảng cách giữa các column
          columnWidth={300} // Set chiều rộng tối thiểu
          overscanBy={5} // Giá trị để render trước khi scroll tới
          render={ImageCard} // Grid item của component
        />
        ) : (
          <h5 className="text-center mt-1">Không có bài đăng</h5>
        )
      ) : (
        <PostsSkeleton />
      )}
      
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  };
};
const mapActionsToProps = { getPosts };

export default connect(mapStateToProps, mapActionsToProps)(Posts);
