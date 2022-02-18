import {
  SET_LOADING,
  SET_POSTS,
  CREATE_POST,
  SET_ERRORS,
  CLEAR_LOADING,
  LIKE_POST,
  UNLIKE_POST,
  SUBMIT_COMMENT,
  SET_POST,
  DELETE_POST,
  SET_POST_COMMENT,
} from "../type";
import axios from "axios";
import { message } from "antd";

export const getPosts = () => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get("/post")
    .then((res) => {
      console.log("=>>>post", res);
      let dat = res.data.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : ((a.createdAt > b.createdAt) ? -1 : 0))
      // let dat = res.data
      dispatch({ type: SET_POSTS, payload: dat });
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createPost = (newPost, history) => (dispatch) => {

  dispatch({ type: SET_LOADING });
  axios
    .post("/post/create", newPost)
    .then((res) => {
      console.log("createPost", res);
      dispatch({ type: CLEAR_LOADING });
      message.success("Posted successfully");
      window.location.href = '/';
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SET_ERRORS, payload: err.response });
    });
};

export const likePost = (postId) => (dispatch) => {
  axios
    .post(`/post/${postId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const unlikePost = (postId) => (dispatch) => {
  axios
    .post(`/post/${postId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getPost = (postId) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get(`/posts/${postId}`)
    .then((res) => {
      dispatch({ type: SET_POST, payload: res.data });
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({ type: CLEAR_LOADING });
    });
};

export const getComment = (postId) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get(`/post/${postId}/comments`)
    .then((res) => {
      let dat = res.data.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : ((a.createdAt > b.createdAt) ? -1 : 0))
      console.log("=>>>res comment", dat);
      dispatch({ type: SET_POST_COMMENT, payload: {
        postId: postId,
        comment:dat
      } });
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({ type: CLEAR_LOADING });
    });
};

export const submitComment = (postId, commentData) => (dispatch) => {
  axios
    .post(`/post/${postId}/addComment`, commentData)
    .then((res) => {
      dispatch({ type: SUBMIT_COMMENT, payload: res.data });
      dispatch(getComment(postId));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deletePost = (postId) => (dispatch) => {
  axios
    .delete(`/post/${postId}`)
    .then(() => {
      dispatch({ type: DELETE_POST, payload: postId });
      message.success("Post Deleted successfully");
    })
    .catch((err) => console.log(err));
};
