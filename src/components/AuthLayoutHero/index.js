import { Col } from "antd";
import logo from "../../assets/images/logo.png";
import React from "react";
import "./styles.scss";

const AuthLayoutHero = () => {
  return (
    <Col span={24} md={{ span: 12 }} className="hero-wrap">
      <img className="logo" src={logo} />
      <span className="title">Manages all your</span>
      <span className="desc">financial task using our platform</span>
      <span className="summary">
        The one-stop platform for all financial management of small and
        medium-sized business.
      </span>
    </Col>
  );
};

export default AuthLayoutHero;
