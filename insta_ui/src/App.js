import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Explore from "./components/Explore/Explore";
import Notifications from "./components/Notifications/Notifications";
import Profile from "./components/Profile/Profile";
import ProfileGuest from "./components/Profile/ProfileGuest";
import Congviec from "./components/CongViec/Congviec";
import LeftSider from "./components/LeftSider/LeftSider";
import RightSider from "./components/RightSider/RightSider";
import Posts from "./components/Posts/Posts";
import OtherUser from "./components/OtherUser/OtherUser";
import CreatePost from "./components/CreatePost/CreatePost";
import Title from "./components/Title";


import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from './utils/PrivateRoute';
import { getUserData, logoutUser, getFriends, getFriendRequests } from './redux/action/userAction';
import store from './redux/store';
import { SET_AUTHENTICATED } from "./redux/type";

import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import JwtDecode from 'jwt-decode';
import moment from 'moment';
import { message } from 'antd';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080/";

function App() {
  const token = localStorage.getItem("tkwjwtToken");

  if (token) {
    const decodedToken = JwtDecode(token);
    console.log("decode token", decodedToken);
    console.log("decode token1", moment().unix());

    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
      message.error("Phien đang nhập đã hết hạn")
      window.location.href = "/login";
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = token;
      store.dispatch(getUserData());
      store.dispatch(getFriends());
      store.dispatch(getFriendRequests());
    }
  }
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <div>

          <div className="content">
            <Routes>
              {/* <Route path="/login" element={<Login/>} /> */}
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path='/' element={<PrivateRoute/>}>
                <Route path='/' element={
                  <Home/>
                }/>
              </Route>
              <Route path="/explore" element={<Explore/>} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/profile" element={
                <>
                  <Title title="Cá nhân" />
                  <div className="row" >
                    <div className="col-md-9">
                      <Profile />
                    </div>
                    <div className="col-md-3">
                      <RightSider />
                    </div>
                  </div>
                </>
              }/>
              <Route path="/congviec" element={<Congviec/>} />
              <Route path="/createPost" element={<CreatePost/>} />
              <Route path="/user" element={<OtherUser/>} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
