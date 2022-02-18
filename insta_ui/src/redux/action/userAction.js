import axios from "axios";
import { message } from "antd";
import {
  SET_LOADING,
  SET_USER,
  CLEAR_LOADING,
  SET_UNAUTHENTICATED,
  SET_ERRORS,
  SET_AUTHENTICATED,
  SET_USERS,
  MARK_NOTIFICATIONS_READ,
  SET_OTHER_USER,
  GET_FRIENDS,
  GET_FRIEND_REQUESTS,
} from "../type";
import { useNavigate } from "react-router-dom";

export const loginAction = (userData, history)  => (dispatch) => {
    axios.post("http://localhost:8080/login", userData)
    .then(res => {
        console.log(res.data);
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: SET_AUTHENTICATED });
        // console.log(history);

        // history.push("/");
        // useNavigate("/");
        window.location.href = '/';
    })
    .catch(err => {
        console.log(err);
    })
}

export const signupUser = (newUserData, history) => (dispatch) => {
  console.log("newUserData", newUserData);
  dispatch({ type: SET_LOADING });
  axios
    .post("/register", newUserData)
    .then((res) => {
      // setAuthorizationHeader(res.data.token);
      // dispatch(getUserData());
      // history.push("/login");
      window.location.href = '/login';
      message.success("Đăng ký thành công");
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => {
      if(err.response.status == 400) {
        message.error(err.response.data)
      }
      console.log(err.response);
      // dispatch({
      //   type: SET_ERRORS,
      //   payload: err.response.data,
      // });
    });
};

export const getUserData = () => (dispatch) => {
    axios
      .get("http://localhost:8080/user/getInfo")
      .then((res) => {
        console.log("userInfo", res);
        dispatch({ type: SET_USER, payload: res.data });
        dispatch({ type: CLEAR_LOADING });
      })
      .catch((err) =>{
        console.log(err);
          if(err.response.status == 403) {
            message.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
            dispatch(logoutUser());
          }
      });
  };

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("tkwjwtToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

  // edit user details
export const editUserDetails = (userDetails) => (dispatch) => {
  // dispatch({ type: SET_LOADING });
  axios
    .post("/user", userDetails)
    .then(() => {
      dispatch(getUserData());
      message.success("User details updated successfully");
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
  const tkwjwtToken = `Bearer ${token}`;
  localStorage.setItem("tkwjwtToken", tkwjwtToken);
  axios.defaults.headers.common["Authorization"] = tkwjwtToken;
};

export const allUsers = () => (dispatch) => {
  axios.get("http://localhost:8080/user/getAllUsers").then(res => {
    console.log("=>>>>alluser",res);
    dispatch({ type: SET_USERS, payload: res.data });
  })
  .catch(e => console.log("=>>", e))
};


export const getFriends = () => (dispatch) => {
  axios.get("http://localhost:8080/friends").then(res => {
      console.log("=>>>>getFriends",res.data);
      dispatch({ type: GET_FRIENDS, payload: res.data.listUserSummary });
    })
    .catch(e => console.log("=>>", e))
  };

export const getFriendRequests = () => (dispatch) => {
  axios.get("http://localhost:8080/friends/requests").then(res => {
      console.log("=>>>>getFriendRequests",res.data);
      dispatch({ type: GET_FRIEND_REQUESTS, payload: res.data.listUserSummary });
    })
    .catch(e => console.log("=>>", e))
  };

export const sendFriendRequest = (id) => {
  axios.post(`http://localhost:8080/friends/${id}/add`).then(res => {
      console.log("=>>>>sendFriendRequest",res);
      message.success("Gửi thành công");
      // dispatch({ type: GET_FRIEND_REQUESTS, payload: res.data.listUserSummary });
    })
    .catch(e => console.log("=>>", e))
};

export const removeFriend = (id) => (dispatch) => {
  axios.post(`http://localhost:8080/friends/${id}/remove`).then(res => {
    console.log("=>>>>removeFriend",res.data);
    // dispatch({ type: GET_FRIENDS, payload: res.data.listUserSummary });
    dispatch(getFriends());
  })
}

export const acceptFriendRequest = (id) => (dispatch) => {
  axios.post(`http://localhost:8080/friends/${id}/accept`).then(res => {
    dispatch(getFriendRequests());
    dispatch(getFriends());
    // console.log("=>>>>acceptFriendRequest",res.data);
  })
}

export const declineFriendRequest = (id) => (dispatch) => {
  axios.post(`http://localhost:8080/friends/${id}/decline`).then(res => {
    dispatch(getFriendRequests());
    dispatch(getFriends());
    // console.log("=>>>>declineFriendRequest",res.data);
  })
}

// get other user details
export const getOtherUser = (id) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get(`http://localhost:8080/user/${id}/getInfo`)
    .then((res) => {
      console.log("=>>>>>other user", res.data);
      dispatch({ type: SET_OTHER_USER, payload: res.data });
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => console.log(err));
};