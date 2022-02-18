import {
  SET_POSTS,
  CREATE_POST,
  LIKE_POST,
  UNLIKE_POST,
  SET_POST,
  SUBMIT_COMMENT,
  DELETE_POST,
  SET_POST_COMMENT,
} from "../type";

const initialState = {
  posts: null,
  post: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case LIKE_POST:
    case UNLIKE_POST:
      // let index = state.posts.findIndex(
      //   (post) => post.postId === action.payload.postId
      // );
      // state.posts[index] = action.payload;
      // state.post = { ...state.post, likeCount: action.payload.likeCount };
      // return { ...state };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case SET_POST_COMMENT:
      state.post = { ...state.post, comment: action.payload.comment };
      console.log("state", state);
      return {
        ...state
      };

    case SUBMIT_COMMENT:
      return {
        ...state,
      };
    case DELETE_POST:
      let deleted_index = state.posts.findIndex(
        (post) => post.postId === action.payload
      );
      state.posts.splice(deleted_index, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}
