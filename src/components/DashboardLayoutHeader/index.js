import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row, Space } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/images/logo.png";
import "./styles.scss";

const DashboardLayoutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="dashboard-layout-header">
      <div className="header-left">
        <img className="logo-image" src={logo} alt="logo" />
        <div className="menu-wrap">
          <span
            className="menu-item"
            onClick={() => navigate("/dashboard/solution")}
          >
            Solution
          </span>
          <span
            className="menu-item"
            onClick={() => navigate("/dashboard/products")}
          >
            Product
          </span>
          <span className="menu-item">Resources</span>
          <span className="menu-item">Support</span>
        </div>
      </div>
      <div className="header-right">
        <Space size={"small"} className="header-right-btns">
          <Button type="text" onClick={() => navigate("/register")}>
            Create Account
          </Button>
          <Button type="primary" onClick={() => navigate("/")}>
            Sign In
          </Button>
        </Space>
        <MenuOutlined onClick={() => setIsOpen(true)} className="menu-icon" />
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        placement="right"
        className="mobile-menu-drawer"
        contentWrapperStyle={{ maxWidth: "80%" }}
      >
        <div className="mobile-menu-wrap">
          <span
            className="menu-item"
            onClick={() => navigate("/dashboard/solution")}
          >
            Solution
          </span>
          <span
            className="menu-item"
            onClick={() => navigate("/dashboard/products")}
          >
            Product
          </span>
          <span className="menu-item">Resources</span>
          <span className="menu-item">Support</span>
        </div>
        <Space
          direction="vertical"
          align="center"
          size={"small"}
          className="header-right-btns"
        >
          <Button type="text" onClick={() => navigate("/register")}>
            Create Account
          </Button>
          <Button type="primary" onClick={() => navigate("/")}>
            Sign In
          </Button>
        </Space>
      </Drawer>
    </div>
  );
};

export default DashboardLayoutHeader;
