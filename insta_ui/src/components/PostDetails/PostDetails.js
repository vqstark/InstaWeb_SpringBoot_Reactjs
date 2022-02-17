import React, { useState } from "react";
import Post from "../Post/Post";
import { Divider, Input, Comment, List, Button, Avatar } from "antd";
import { connect } from "react-redux";
import PostsSkeleton from "../../utils/PostsSkeleton";
import moment from "moment";
import { submitComment } from "../../redux/action/dataAction";

const PostDetails = (props) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      setErrors("Write something");
      setTimeout(() => {
        setErrors("");
      }, 2000);
    } else {
      const newComment = { body: comment };
      props.submitComment(props.post.postId, newComment);
      setLoading(true);
      setTimeout(() => {
        setComment("");
        setLoading(false);
      }, 2000);
    }
  };
  const renderPost = props.UI.loading ? (
    <PostsSkeleton />
  ) : (
    <>
      <Post post={props.post} />
      <div className="ml-4 pl-2 mr-4 pr-2">
        <div className="comment__details">
          <div className="comments">
            {props.postDetail.comment && (
              <List
                className="comment-list"
                header={`${props.postDetail.comment.length} ${
                  props.postDetail.comment.length > 1 ? "comments" : "comment"
                }`}
                itemLayout="horizontal"
                dataSource={props.postDetail.comment}
                renderItem={(item) => (
                  <li>
                    <Comment
                      author={item.userSummary.fullName}
                      avatar={<Avatar style={{ backgroundColor: "#000" }}>{item.userSummary.fullName.charAt(0).toUpperCase()}</Avatar>}
                      content={item.body}
                      datetime={moment(item.createdAt)
                        .startOf("seconds")
                        .fromNow()}
                    />
                  </li>
                )}
              />
            )}
          </div>
          <div className="comment-form">
            <Divider />
            <div className="d-flex">
              <Input
                onChange={(e) => setComment(e.target.value)}
                size="default"
                allowClear
                placeholder="type comment"
                value={comment}
              />
              <Button disabled={loading} onClick={handleSubmit}>
                Submit
              </Button>
            </div>
            {errors && <span className="text-danger">{errors}</span>}
          </div>
        </div>
      </div>
    </>
  );
  return renderPost;
};

const mapStateToProps = (state) => {
  return {
    posts: state.data.posts,
    postDetail: state.data.post,
    UI: state.UI,
  };
};

const mapActionsToProps = { submitComment };

export default connect(mapStateToProps, mapActionsToProps)(PostDetails);
