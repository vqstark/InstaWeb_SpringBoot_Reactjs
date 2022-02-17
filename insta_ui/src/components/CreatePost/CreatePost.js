import React, { useState, useMemo } from "react";
import { Card, Button, Avatar, Upload, Modal, Tooltip, Form, Icon, Input, message } from "antd";
import { connect } from "react-redux";

import { createPost } from "../../redux/action/dataAction";
import { AndroidOutlined, InboxOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


const CreatePost = (props) => {
  let history = useNavigate();
  let list = useSelector((state) => state.user.users);
  const [isModalVisibleTacGia, setIsModalVisibleTacGia] = useState(false);
  // const [tacgia, setTacgia] = useState([]);
  const [userList, setUserList] = useState(list);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState([]);
  // const genTacGia = tacgia.map(person => (
  //   <Avatar src="https://joeschmoe.io/api/v1/random" />
  // ));
  const showModalTacGia = () => {
    setIsModalVisibleTacGia(true);
  };

  const handleOkTacGia = () => {
    setIsModalVisibleTacGia(false);
  };

  const handleCancelTacGia = () => {
    setIsModalVisibleTacGia(false);
  };

  const onFinish = () => {
    console.log(selectedImage);
    if(selectedImage.length == 0)
    {
      message.error("Thêm ít nhất 1 ảnh")
      return;
    }
    if(title == "")
    {
      message.error("Thêm tiêu đề")
      return;
    }
    let formData = new FormData();
    // formData.append("title", "testTitle")
    for (let i = 0; i < selectedImage.length; i++) {
      formData.append("image", selectedImage[i])
    }
    formData.append("title", title);
    formData.append("content", content);
    props.createPost(formData, history);
  }

  const onFileChangeHandler = (file) => {
    setSelectedImage([...selectedImage, file.originFileObj])

  };
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const onChange = info => {
    switch (info.file.status) {
      case "uploading":
        break;
      case "done":
        onFileChangeHandler(info.file)
        break;

      default:
        // error or removed
        setSelectedImage([])
    }
  };
  return (
    <section className="container">


      {/* <div className="row">
        <div className="col-md-6">
          <div className="form-group files color">
            <label>Upload Your File </label>
            <input type="file" className="form-control" name="file" onChange={onFileChangeHandler} />
          </div>
        </div>
      </div> */}
      <Upload.Dragger name="files" customRequest={dummyRequest} onChange={onChange}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Kéo thả file vào để tải lên</p>
        <p className="ant-upload-hint">Chỉ hỗ trợ tải một file 1 lần</p>
      </Upload.Dragger>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <Button
          type="dashed"
          onClick={showModalTacGia}
          style={{ width: '20%', marginTop: '20px' }}
          icon={<PlusOutlined />}
        >
          Thêm tác giả
        </Button> 
        <Avatar.Group
          maxCount={2}
          size="large"
          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          {genTacGia}
        </Avatar.Group>
        <Button
          type="dashed"
          onClick={() => {

          }}
          style={{ width: '20%', marginTop: '20px' }}
          icon={<PlusOutlined />}
        >
          Nội dung bài viết
        </Button>
        */}
        <div>
          <div>Tiêu đề</div>
          <Input onChange={(e) => {
                  setTitle(e.target.value);
                }} />
        </div>
        <div>
          <div>Nội dung</div>
          <Input.TextArea showCount maxLength={500} onChange={(e) => {
                  setContent(e.target.value);
                }} />
        </div>
      </div>

      <div className="footer">
        <Button type="primary" onClick={onFinish} style={{ width: '100%', marginTop: '20px' }}>
          Đăng bài
        </Button>
      </div>

      <Modal title="Thêm tác giả" visible={isModalVisibleTacGia} onOk={handleOkTacGia} onCancel={handleCancelTacGia}>
        <div>helo</div>
        {userList && userList.map(user => {
          return (
            <div style={{ marginBottom: "15px" }}>
              <div style={{display:"flex"}}>
                <Avatar style={{ backgroundColor: "#000", marginRight: "15px" }}>{user.fullName.charAt(0)}</Avatar>
                <div>{user.fullName}</div>
              </div>
            </div>
          )
        })}
      </Modal>

    </section >
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
    user: state.user,
    UI: state.UI,
  };
};

const mapActionsToProps = {
  createPost,
};

export default connect(mapStateToProps, mapActionsToProps)(CreatePost);
