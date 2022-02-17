import React from "react";
import { Layout, Popconfirm, message } from "antd";
import { connect } from "react-redux";
import { logoutUser } from "../redux/action/userAction";
const { Header } = Layout;

const Title = ({ title, logoutUser }) => {
  function confirm() {
    logoutUser();
    message.success("Đăng xuất thành công");
  }
  return (
    <div className="d-flex align-items-center justify-content-between">
      <Header style={{width:"0px", padding: "0px"}}></Header>
      {/* <Popconfirm
      placement="leftTop"
        title="Đăng xuất?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <span style={{ cursor: "pointer" }} className="mr-4 text-danger">
          Logout
        </span>
      </Popconfirm> */}
    </div>
  );
};
const mapActionsToProps = {
  logoutUser,
};
export default connect(null, mapActionsToProps)(Title);
