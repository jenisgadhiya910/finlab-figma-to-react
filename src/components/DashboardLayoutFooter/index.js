import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.scss";

const DashboardLayoutFooter = () => {
  return (
    <div className="dashboard-layout-footer">
      <div className="company-info-section">
        <img className="logo-image" src={logo} alt="logo" />
        <span className="title">The Best fintech platform</span>
        <span className="copyright-text">
          ©2021 Finlab LTD. All rights reserved
        </span>
      </div>
      <div className="link-section">
        <span className="title">Product</span>
        <div className="links-wrap">
          <span className="link-item">Overview</span>
          <span className="link-item">Business Account</span>
          <span className="link-item">Credit Card</span>
          <span className="link-item">Financial Modelling</span>
          <span className="link-item">Spend Management</span>
        </div>
      </div>
      <div className="link-section">
        <span className="title">Resources</span>
        <div className="links-wrap">
          <span className="link-item">Help</span>
          <span className="link-item">Status</span>
          <span className="link-item">Privacy</span>
          <span className="link-item">Legal Agreement</span>
          <span className="link-item">Cookie Preferences</span>
        </div>
      </div>
      <div className="link-section">
        <span className="title">Company</span>
        <div className="links-wrap">
          <span className="link-item">About Finlab</span>
          <span className="link-item">Careers</span>
          <span className="link-item">Contact</span>
          <span className="link-item">Financial Modelling</span>
          <span className="link-item">Blog</span>
        </div>
      </div>
      <div className="social-section">
        <span className="title">Social media</span>
        <div className="social-links">
          <div className="social-icon-wrap">
            <FacebookOutlined />
          </div>
          <div className="social-icon-wrap">
            <InstagramOutlined />
          </div>
          <div className="social-icon-wrap">
            <TwitterOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayoutFooter;
