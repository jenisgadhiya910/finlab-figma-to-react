import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import "./styles.scss";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="register-page-form">
      <span className="register-page-form-title">
        {"Let’s get started with \n creating account"}
      </span>
      <Form
        autoComplete="off"
        layout="vertical"
        onFinish={() => {
          navigate("/dashboard");
        }}
      >
        <Form.Item
          label="Your name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input size="large" />
        </Form.Item>
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

        <Form.Item
          label="Repeat Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="register-form-button"
          >
            Register
          </Button>
        </Form.Item>
        <Form.Item className="register-line">
          <span>
            Already have an account? <a href="/">Login Here</a>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
