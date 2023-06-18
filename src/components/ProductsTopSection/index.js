import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";
import React from "react";
import dashboard3 from "../../assets/images/dashboard3.png";
import "./styles.scss";

const ProductsTopSection = () => {
  return (
    <div className="products-top-section">
      <Row align={"middle"} justify="space-between">
        <Col span={24} lg={{ span: 12 }}>
          <div className="content-section">
            <div className="news-top-wrap">
              <Button type="primary" className="news-btn">
                news!
              </Button>
              <span className="desc">
                Update New features for active users ✨
              </span>
            </div>
            <span className="content-section-title">
              Easy way to find an accountant you trust here
            </span>
            <span className="content-section-desc">
              Need accounting support? Check out finlab directory of vetted
              accounting professionals who can help you streamline your finances
              and get the most out of your finlab account.
            </span>
            <Space size={"large"}>
              <Button size="large" type="primary">
                Get started <ArrowRightOutlined />
              </Button>
              <Button className="learn-more-btn" size="large" type="default">
                Learn more
              </Button>
            </Space>
          </div>
        </Col>
        <Col span={24} lg={{ span: 10 }}>
          <img src={dashboard3} className={"top-section-image"} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductsTopSection;
