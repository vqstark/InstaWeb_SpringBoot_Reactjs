import React, { useState } from "react";

import {
  SaveOutlined,
  NotificationOutlined,
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import { Menu, Layout, Button } from "antd";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { logoutUser } from "../../redux/action/userAction";
const { Sider } = Layout;

const LeftSider = ({logoutUser}) => {
  
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      className="site-layout-background"
      // collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      breakpoint="md"
    >
      <div className="logo">
        <span className="font-italic">Grap Phích</span>
      </div>

      <Menu theme="" mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Trang chủ</Link>
        </Menu.Item>
        {/* <Menu.Item key="2" icon={<AreaChartOutlined />}>
          <Link to="/explore">Dành cho bạn</Link>
        </Menu.Item> */}

        <Menu.Item key="3" icon={<NotificationOutlined />}>
          <Link to="/notifications"> Thông báo</Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/profile"> Cá nhân</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<SaveOutlined />}>
          <Link to="/Congviec"> Công việc</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<SaveOutlined />}>
          <Link to="/createPost"> Tạo bài đăng</Link>
        </Menu.Item>
      </Menu>
      <Button onClick={() => logoutUser()} style={{position:'absolute', bottom:'30px'}} type="link" danger>Đăng xuất</Button>
    </Sider>
  );
};
const mapActionsToProps = {
  logoutUser,
};
export default connect(null, mapActionsToProps)(LeftSider);
