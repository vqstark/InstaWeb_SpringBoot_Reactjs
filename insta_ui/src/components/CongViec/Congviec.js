import React, { useState } from "react";
import { Avatar, Button, Card, Image, Modal, Typography, Row, Col, Input } from "antd";
import imgeBg from '../../assets/images/unsplash_m_7p45JfXQo.svg'
import { DownloadOutlined } from "@ant-design/icons";
import "./Congviec.css"
const Congviec = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };
  const showModal1disable = () => {
    setIsModalVisible1(false);
  };
  const showModaldisable = () => {
    setIsModalVisible(false);
  };
  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  return (
    <div>
      <div className="d-flex justify-content-center" style={{
        backgroundImage: `url(${imgeBg})`,
        height: "200px"

      }}>
        <div style={{ textAlign: 'center' }} className="mt-3">
          <Typography.Text strong style={{ color: "#fff", fontSize: "2.5rem" }}>CÔNG VIỆC</Typography.Text>
          <br />
          <Typography.Text style={{ color: "#fff", textTransform: "uppercase" }}>Tìm kiếm công việc, hướng đi mới cho bản thân</Typography.Text>
          <br />
          <Button onClick={showModal1} type="dashed" ghost shape="round" icon={<DownloadOutlined />} size={52} className="mt-3">
            Đăng tuyển
          </Button>
        </div>
      </div>
      <div class="listPost mt-3">
        <Card onClick={showModal} className="mb-2 ml-4 mr-4 mr-md-0"
        >
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Nguyen hai nam"
            description="Tuyển dụng thiết kế UI, UX"
          />
          <div className="mt-2">
            <Typography.Text strong>Full time/ Partime -- </Typography.Text>
            <Typography.Text>2 day ago</Typography.Text>
          </div>
        </Card>
        <Card onClick={showModal} className="mb-2 ml-4 mr-4 mr-md-0"

        >
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Nguyen hai nam"
            description="Tuyển dụng design"
          />
          <div className="mt-2">
            <Typography.Text strong>Full time/ Partime -- </Typography.Text>
            <Typography.Text>2 day ago</Typography.Text>
          </div>
        </Card>
        <Card onClick={showModal} className="mb-2 ml-4 mr-4 mr-md-0"

        >
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Nguyen hai nam"
            description="Tuyển dụng coder"
          />
          <div className="mt-2">
            <Typography.Text strong>Full time/ Partime -- </Typography.Text>
            <Typography.Text>2 day ago</Typography.Text>
          </div>
        </Card>
        <Card onClick={showModal} className="mb-2 ml-4 mr-4 mr-md-0"

        >
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Nguyen hai nam"
            description="Tuyển dụng thiết kế UI, UX"
          />
          <div className="mt-2">
            <Typography.Text strong>Full time/ Partime -- </Typography.Text>
            <Typography.Text>2 day ago</Typography.Text>
          </div>
        </Card>
        <Card onClick={showModal} className="mb-2 ml-4 mr-4 mr-md-0"

        >
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Nguyen hai nam"
            description="Tuyển dụng design"
          />
          <div className="mt-2">
            <Typography.Text strong>Full time/ Partime -- </Typography.Text>
            <Typography.Text>2 day ago</Typography.Text>
          </div>
        </Card>

      </div>
      <Modal title="Chi tiết bài đăng" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]} width={"90%"} centered bodyStyle={{ backgroundColor: "#fff" }} >
        <div style={{ textAlign: 'center' }} className="mt-3">
          <Typography.Text strong style={{ color: "#000", fontSize: "2.5rem" }}>Thiết Kế đồ họa 2d - 3d</Typography.Text>
          <br />
          <Typography.Text style={{ color: "#000", textTransform: "uppercase" }}>Full time - Part time</Typography.Text>
          <br />
          <Button onClick={showModaldisable} type="primary" ghost shape="round" icon={<DownloadOutlined />} size={52} className="mt-3">
            Ứng tuyển
          </Button>
        </div>
        <hr />
        <div>
          <Typography.Text strong style={{ color: "#000", fontSize: "1.5rem" }}>Yêu cầu</Typography.Text>
          <ul>
            <li>
              <Typography.Text style={{ color: "#000" }}>Có kinh nghiệm trên 2 năm</Typography.Text>
            </li>
            <li>
              <Typography.Text style={{ color: "#000" }}>Thành thạo một trong các phần mềm maya, zbrush, ...</Typography.Text>
            </li>
            <li>
              <Typography.Text style={{ color: "#000" }}>Có khả năng trải uv, textture, ringning,....</Typography.Text>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <Typography.Text strong style={{ color: "#000", fontSize: "1.5rem" }}>Phúc lợi</Typography.Text>
          <ul>
            <li>
              <Typography.Text style={{ color: "#000" }}>Lương: từ 10 triệu đến 20 triệu</Typography.Text>
            </li>
            <li>
              <Typography.Text style={{ color: "#000" }}>ancdasd, ...</Typography.Text>
            </li>
            <li>
              <Typography.Text style={{ color: "#000" }}>anbcds,....</Typography.Text>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <Typography.Text strong style={{ color: "#000", fontSize: "1.5rem" }}>gửi cv và portfolio về:</Typography.Text>
          <ul>
            <li>
              <Typography.Text style={{ color: "#000" }}>Email: abcdef@gmail.com</Typography.Text>
            </li>
            <li>
              <Typography.Text style={{ color: "#000" }}>Phone: 0123456</Typography.Text>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal title="Đăng tuyển" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1} footer={[]} width={"90%"} centered bodyStyle={{ backgroundColor: "#fff" }} >
        <div className="d-flex justify-content-center">
          <div style={{ display: "flex", flexDirection: 'column' }}>
            <Typography.Text strong style={{ textAlign: 'center', fontSize: '1.6rem' }}>ĐĂNG TUYỂN CÔNG VIỆC</Typography.Text>
            <Typography.Text style={{ textAlign: 'center', fontSize: '1.2rem' }}>Bắt đầu tuyển dụng nhân tài trên đất nước</Typography.Text>
          </div>
        </div>
        <Row>
          <Col span={24} className="mt-3">
            <Typography.Text strong style={{ textAlign: 'center', fontSize: '1.4rem' }}>Nhập chi tiết công việc</Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text strong className="mt-3">Tên công ty</Typography.Text>
            <Input placeholder="Tên công ty" />
          </Col>
          <Col span={24} className="mt-3">
            <Typography.Text strong >Chức vụ</Typography.Text>
            <Input placeholder="Chức vụ" />
          </Col>

        </Row>
        <hr />
        <Row className="mt-2">
          <Col span={24} className="mt-3">
            <Typography.Text strong style={{ textAlign: 'center', fontSize: '1.4rem' }}>Bài đăng công khai</Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text strong className="mt-3">Hình thức ứng tuyển</Typography.Text>
            <Input placeholder="Tên công ty" />
          </Col>
        </Row>
        <Row  gutter={16}>
          <Col span={12} className="mt-3">
            <Typography.Text strong >Địa điểm</Typography.Text>
            <Input placeholder="Chức vụ" />
          </Col>
          <Col span={12} className="mt-3">
            <Typography.Text strong >Lĩnh vực</Typography.Text>
            <Input placeholder="Chức vụ" />
          </Col>
        </Row>
        <Row>
          <Col span={24} className="mt-3">
            <Typography.Text strong >Hạn ứng tuyển</Typography.Text>
            <Input placeholder="Chức vụ" />
          </Col>
          <Col span={24} className="mt-3">
            <Typography.Text strong >Mô tả công việc</Typography.Text>
            <Input placeholder="Chức vụ" />
          </Col>
          <hr />
        </Row>
        <Button className="d-flex" style={{margin:'20px auto'}} onClick={showModal1disable} type="primary" shape="round" icon={<DownloadOutlined />} size={32}>
          Đăng tuyển
        </Button>
      </Modal>
    </div>
  );
};

export default Congviec;
