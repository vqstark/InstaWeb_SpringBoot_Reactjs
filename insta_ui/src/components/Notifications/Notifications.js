import React, { useState } from "react";
import "./notifiStyle.css";
import {
  Card,
  Modal,
  Divider,
  Button,
  Avatar,
  Input,
  Badge,
  Popconfirm,
  Image,
  Carousel,
  Typography
} from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
  MoreOutlined,
  HeartFilled,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
const Notifications = (props) => {
  const Meta = Card.Meta;
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='wrapper'>
        <div className="Notifications" style={{fontSize:"28px", color: "black"}}>Thông Báo</div>
        <p className="outline"><i className="ion-ios-plus-outline"></i></p>

        <div className='notificationLight' onClick={showModal}>
          <div className="circle"></div>
          <div className='message'>
            <p><strong>Lê Quang Nam</strong> đã nhắc bạn trong một bình luận</p>
            <p className="clock"><i className="fas fa-clock"></i> Khoảng 5 giờ trước</p>
          </div>
        </div>

        <div className='notificationLight' onClick={showModal}>
          <div className="circle"></div>
          <div className='message'>
            <p><strong>Lê Quang Nam</strong> đã nhắc bạn trong một bình luận</p>
            <p className="clock"><i className="fas fa-clock"></i> Khoảng 5 giờ trước</p>
          </div>
        </div>

        <div className='notificationLight' onClick={showModal}>
          <div className="circle"></div>
          <div className='message'>
            <p><strong>Lê Quang Nam</strong> đã nhắc bạn trong một bình luận</p>
            <p className="clock"><i className="fas fa-clock"></i> Khoảng 5 giờ trước</p>
          </div>
        </div>

        <div className='notificationLight' onClick={showModal}>
          <div className="circle"></div>
          <div className='message'>
            <p><strong>Lê Quang Nam</strong> đã nhắc bạn trong một bình luận</p>
            <p className="clock"><i className="fas fa-clock"></i> Khoảng 5 giờ trước</p>
          </div>
        </div>

        <div className='notificationLight' onClick={showModal}>
          <div className="circle"></div>
          <div className='message'>
            <p><strong>Lê Quang Nam</strong> đã nhắc bạn trong một bình luận</p>
            <p className="clock"><i className="fas fa-clock"></i> Khoảng 5 giờ trước</p>
          </div>
        </div>

        <div className='notificationLight'  onClick={showModal}>
          <div className="circle"></div>
          <div className='message'>
            <p><strong>Lê Quang Nam</strong> đã nhắc bạn trong một bình luận</p>
            <p className="clock"><i className="fas fa-clock"></i> Khoảng 5 giờ trước</p>
          </div>
        </div>


        <Modal title="Chi tiết bài viết" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]} width={"90%"} centered bodyStyle={{ backgroundColor: "#fff" }} >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "80%" }}>
            <Carousel dots={false}>
              {[""].map((item, index) => {
                return <div style={{ display: "flex" }}>
                  <Image
                    preview={false}
                    width={"100%"}
                    height={"100%"}
                    fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                    src="http://sangnk.xyz/api/file/ad397486-32fc-4209-97e1-f1d537eeb541Screenshot%20(1).png"
                    alt="Không kèm hình ảnh"


                  />
                </div>
              })}
            </Carousel>


          </div>
          <div style={{ width: "20%", marginLeft: "20px" }}>
            <Meta className="mt-1"
              avatar={<Avatar>A</Avatar>}
              title="Title test"
              description="Noi dung test"
            />
            <div style={{ marginTop: "20px" }}>
              <Typography.Text strong>Title test</Typography.Text>
              <br />
              <Typography.Text>Content test</Typography.Text>
              <hr />
            </div>
            <div className="actions" style={{ marginTop: "20px" }}>
              <div className="d-flex">
                {true === true ? (
                  <Badge>
                    <HeartFilled
                      disabled={true}
                      style={{ fontSize: "20px" }}
                    // onClick={() => unlikePost(post.postId)}
                    />
                  </Badge>
                ) : (
                  <Badge showZero >
                    <HeartOutlined
                      style={{ fontSize: "20px" }}
                    // onClick={() => likePost(post.postId)}
                    />
                  </Badge>
                )}
              </div>

              <div
                className="d-flex"
              // onClick={() => {
              //   setVisible(true);
              //   getPost(post.postId);
              // }}
              >
                <Badge showZero >
                  <MessageOutlined style={{ fontSize: "20px" }} />
                </Badge>
              </div>
              <ShareAltOutlined style={{ fontSize: "20px" }} />

            </div>
            <hr />

            <div style={{ marginTop: "20px" }}>
              {/* <Input.TextArea rows={4} placeholder="Nhập bình luận"/> */}
              <div className="comment-form">
                <Divider />
                <div className="d-flex">
                  <Input
                    onChange={(e) => {}}
                    size="default"
                    allowClear
                    placeholder="type comment"
                  />
                  <Button>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            {/* <div style={{ marginTop: "20px",height:"50vh", overflow:'scroll'}}>
              {postDetail && postDetail.comment && postDetail.comment.map(cmt => {
                return <Meta className="mt-1"
                  avatar={<Avatar style={{ backgroundColor: "#000" }}>A</Avatar>}
                  title="title Test"
                  description="Comment Test"
                />
              })}
            </div> */}
          </div>
        </div>
      </Modal>

    </div>
  )
};

export default Notifications;
