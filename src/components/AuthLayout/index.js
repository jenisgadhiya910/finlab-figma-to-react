import { Col, Divider, Row, Space } from "antd";
import React from "react";
import "./styles.scss";
import { Outlet } from "react-router";
import AuthLayoutHero from "../AuthLayoutHero";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Row className="auth-layout-row">
        <AuthLayoutHero />
        <Col span={24} md={{ span: 12 }} className="auth-form-wrap">
          <Outlet />
          <div className="footer-wrap">
            <span className="copyright-text">
              © 2022 Findash. All rights reserved.
            </span>
            <Space size={"small"}>
              <a href="#">Term & Condition</a>
              <Divider type="vertical" />
              <a href="#">Privacy & Policy</a>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
