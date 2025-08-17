import { useEffect } from "react";
import "./index.scss";
import bgImg from "../../assets/bg.jpg";
import lgbgImg from "../../assets/lgbg.jpg";
import logo from "../../assets/logo.png";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../../api/users";
import { setToken } from "../../store/login/authSlice";
import { useDispatch } from "react-redux";
import { Navigate, replace, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setFlagsFromString } from "v8";

function Login() {
  // Get form instance by useForm hook,
  // bind onClick with sending Request
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  function handleLogin() {
    form
      .validateFields()
      .then(async (values) => {
        setLoading(true); // set button loading state
        const {
          data: { token }, // values = {username:"", password:""}
        } = await login(values); // async-sending a request, waiting for fullfilled/rejected
        setLoading(false);
        dispatch(setToken(token)); // Save token to Redux and session
        navigate("/", { replace: true }); // login successfully, navigate to homepage, rejct return
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    // style = {object}  object = {backgroundImage: "url..."}
    <div className="lg" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="lg-bg" style={{ backgroundImage: `url(${lgbgImg})` }}>
        <div className="lg-bg-panel">
          {/* Header */}
          <div className="lg-bg-panel-header">
            <div className="logo">
              <img src={logo} width={100} />
            </div>
            <h1 className="name">xx管理平台</h1>
          </div>

          {/* Form */}
          <Form form={form}>
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Username" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item label={null}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                onClick={handleLogin}
                loading={loading}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
