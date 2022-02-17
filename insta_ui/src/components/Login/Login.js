import { Form, Input, Button, Checkbox, Card } from 'antd';
import './Login.css'
import { useState, useEffect } from 'react';
import { loginAction } from '../../redux/action/userAction';
// import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
// import { loginUser } from "../../redux/actions/userActions";
// import store from "../../redux/store";
// import {CLEAR_ERRORS} from "../../redux/types";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    let navigate = useNavigate();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

  const onFinish = () => {
      const userData = {username, password};
      props.loginAction(userData, props.history);
      navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card>
        <h1>Login</h1>
        <Form
        name="basic"
        labelCol={{span: 6,}}
        wrapperCol={{span: 12,}}
        initialValues={{remember: true,}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input onChange={(e) => {
                  setUserName(e.target.value);
                //   store.dispatch({ type: CLEAR_ERRORS });
                }}/>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password onChange={(e) => {
                  setPassword(e.target.value);
                //   store.dispatch({ type: CLEAR_ERRORS });
                }}/>
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
            // offset: 6,
            span: 14,
            }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 6,
            span: 12,
            }}
        >
            <Button type="primary" htmlType="submit">
            Login
            </Button>
        </Form.Item>
        </Form>

        <span className="text-center d-block mt-1">
        Bạn chưa có tài khoản? <a href="/signup">Đăng ký!</a>
        </span>
    </Card>
  );
};

// export default Login;
const mapStateToProps = (state) => {
    return {
      UI: state.UI,
      user: state.user,
    };
  };
  const mapActionsToProps = { loginAction };
  export default connect(mapStateToProps,mapActionsToProps)(Login);