import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Card, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// User actions
import { signupUser } from "../../redux/action/userAction";
import store from "../../redux/store";
import { CLEAR_ERRORS } from "../../redux/type";

const SignUp = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUserName] = useState();
  const [fullName, setFullName] = useState();
  const [phoneNumber, setPhoneNumBer] = useState();
  const onFinish = () => {
    const newUserData = {
      username,
      email,
      fullName,
      password,
      phoneNumber,
    };
    props.signupUser(newUserData, props.history);
  };
  useEffect(() => {
    if (props.user.authenticated) {
      props.history.push("/");
    }
  }, [props.user.authenticated, props.history]);
  // console.log(props.UI.errors);
  return (
    <div className="row">
      <div className="col-sm-8 col-md-6 mx-auto p-4">
        <Card className="px-4 py-1 mx-4">
          <h2 className="text-center mb-3">Signup</h2>

          {props.UI.errors?.error && message.error(props.UI.errors?.error)}
          {props.UI.errors?.email && message.error(props.UI.errors?.email)}

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Nhập tài khoản"
                onChange={(e) => {
                  setUserName(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>

            <Form.Item
              name="fullName"
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Họ và tên"
                onChange={(e) => {
                  setFullName(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Email không đúng định dạng",
                },
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
                onChange={(e) => {
                  setPassword(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>


            <Form.Item
              name="handle"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Số điện thoại"
                onChange={(e) => {
                  setPhoneNumBer(e.target.value);
                  store.dispatch({ type: CLEAR_ERRORS });
                }}
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Chấp nhận điều khoản"),
                },
              ]}
            >
              <Checkbox>
                Đồng ý với <Link to="/">điều khoản</Link>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              {/* <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={props.UI.loading}
              >
                {props.UI.loading ? "Registering" : "Register"}
              </Button> */}
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng ký
              </Button>
              <span className="text-center d-block mt-1">
                Bạn đã có tài khoản? <Link to="/login">Đăng nhập!</Link>
              </span>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    UI: state.UI,
  };
};
const mapActionsToProps = {
  signupUser,
};

export default connect(mapStateToProps, mapActionsToProps)(SignUp);
