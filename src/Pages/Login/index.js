import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import "./styles.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="login-page-form">
      <span className="login-page-form-title">
        {"Let’s login to your \nFinlab account first"}
      </span>
      <Form
        autoComplete="off"
        layout="vertical"
        onFinish={() => {
          navigate("/dashboard");
        }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter valid email!" },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a href="#" className="forgot-link">
            Forgot Password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="login-form-button"
          >
            Login
          </Button>
        </Form.Item>
        <Form.Item className="register-line">
          <span>
            Don’t have an account? <a href="/register">Register Here</a>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
