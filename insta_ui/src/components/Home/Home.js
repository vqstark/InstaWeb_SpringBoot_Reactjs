import React, { useState } from "react";
import { connect } from 'react-redux'
import { Breadcrumb, Button, Input, Layout, Menu, Popover, Tooltip, BackTop  } from "antd";
import LeftSider from "../LeftSider/LeftSider";
import RightSider from "../RightSider/RightSider";
import Posts from "../Posts/Posts";
import CreatePost from "../CreatePost/CreatePost";
import Title from "../Title";
import { BrowserRouter, HashRouter, Link, Route, Routes, Router } from "react-router-dom";
import Explore from "../Explore/Explore";
import Notifications from "../Notifications/Notifications";
import Profile from "../Profile/Profile";
import Congviec from "../CongViec/Congviec";
import "./Home.css"
import { AppstoreOutlined, HomeOutlined, MailOutlined, NotificationFilled,SearchOutlined, NotificationOutlined, PlusCircleOutlined, ShoppingCartOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import { logoutUser } from "../../redux/action/userAction";
import useViewport from '../../shared/hooks/useViewport'
const { Header, Content, Sider } = Layout;

const Home = ({ logoutUser }) => {
  const viewPort = useViewport();
  const isMobileAndTablet = viewPort.width <= 1108;
  console.log("=>>>", viewPort.width);
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = visible => {
    setVisible(visible);
  };
  const logout = () => {
    logoutUser();
  }
  const backtopStyle = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  return (
    <>
    {/* <BrowserRouter> */}
      <Layout>
      <BackTop>
      <div style={backtopStyle}>Top</div>
      </BackTop>
        {!isMobileAndTablet &&
          <div id="web-display">
            <Header id="header" className="header p-0" style={{ height: '72px', borderBottom:'1px solid #323232'}}>
              <div className="d-flex h-100" style={{ justifyContent: 'space-between', backgroundColor: '#fff', margin:'0px 20px' }}>
                <div className="logo" style={{ alignSelf: 'center', paddingLeft:"20px" }}>
                  <Link to="/">
                    <span className="font-italic pl-3" style={{fontSize:"22px", color: "#000", fontStyle: "italic", fontWeight: "bold" }}>
                      Insta
                    </span>
                  </Link>
                </div>
                {/* <Input.Search placeholder="input search" style={{ width: '40%', top: "5px", left: "40px", borderRadius: "50px", alignSelf: 'center' }} /> */}
                
                
                <div style={{width:"60%", marginLeft:"20px"}}>
                  <div class="wrapper c-height">
                    <div class="search-area c-height">
                      <div class="single-search">
                        <input class="custom-input" name="" placeholder="Tìm kiếm" type="text" />
                        <a class="icon-area" href="#">
                          <SearchOutlined />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


                <Menu mode="vertical" style={{display: "flex", alignSelf: 'center', justifyContent: 'space-between', borderBottom: '1px solid #fff' }} >

                  {/* <Menu.Item key="home">
                    <Tooltip placement="left" title={"Trang chủ"}>

                      <Link to="/">
                        <HomeOutlined style={{ fontSize: '150%' }} />
                      </Link>
                    </Tooltip>

                  </Menu.Item> */}
                  <Menu.Item key="notification" >
                    <Tooltip placement="left" title={"Thông báo"}>
                      <Link to="/notifications">
                        <NotificationOutlined style={{ fontSize: '150%' }} />
                      </Link>
                    </Tooltip>
                  </Menu.Item>
                  <Menu.Item key="work">
                    <Tooltip placement="left" title={"Công việc"}>
                      <Link to="/congviec">
                        <SolutionOutlined style={{ fontSize: '150%' }} />
                      </Link>
                    </Tooltip>
                  </Menu.Item>
                  <Menu.Item key="mail" >
                    <Tooltip placement="left" title={"Tạo bài viết"}>
                      <Link to="/createPost">
                        <PlusCircleOutlined style={{ fontSize: '150%' }} />
                      </Link>
                    </Tooltip>
                  </Menu.Item>
                  <Menu.Item>
                    <Popover
                      content={
                        <div onClick={() => setVisible(false)}>
                          <Button type="link">
                            <Link to="/profile"> Cá nhân</Link>
                          </Button>
                          <br />
                          <Button type="link" danger onClick={logout}>Đăng xuất</Button>
                        </div>
                      }
                      placement="topLeft"
                      trigger="click"
                      visible={visible}
                      onVisibleChange={handleVisibleChange}
                    >
                      <UserOutlined style={{ fontSize: '150%' }} />
                    </Popover>
                  </Menu.Item>

                </Menu>
              </div>
            </Header>
          </div>
        }
        {isMobileAndTablet &&
          <div id="mobile-display">
            <LeftSider />
          </div>
        }
        <div className="row" style={{ width: '100%' }}>
          <div className="col-md-12" style={{ minHeight: "100vh" }}>
            <Routes>
              <Route 
                path="/"
                element={
                  <>
                    <Title title="Home" />
                      <div className="row">
                        <div className="col-md-12" id="mainPost">
                          <Posts />
                        </div>
                      </div>
                  </>
                }>
              </Route>
              {/* <Route path="/explore" element={<Explore/>} />
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
              <Route path="/createPost" element={<CreatePost/>} /> */}
            </Routes>
          </div>
        </div>
      </Layout>
    {/* </BrowserRouter> */}
    </>
  );
}

const mapActionsToProps = {
  logoutUser,
};
export default connect(null, mapActionsToProps)(Home);