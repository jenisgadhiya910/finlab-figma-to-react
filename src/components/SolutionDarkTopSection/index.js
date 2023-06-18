import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import topSolutionImage from "../../assets/images/top-solution.png";
import "./styles.scss";

const SolutionDarkTopSection = ({ newsTitle, title, description }) => {
  return (
    <div className="solution-dark-top-section">
      <div className="content-section">
        <div className="news-top-wrap">
          <Button type="primary" className="news-btn">
            news!
          </Button>
          <span className="desc">
            {newsTitle || "Update New features for active users ✨"}
          </span>
        </div>
        <span className="content-section-title">
          {title || "Modern spend management"}
        </span>
        <span className="content-section-desc">
          {description ||
            "Integrated cards and software that drive 100% compliance with 0 receipt chasing in 100+ countries."}
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
      <img src={topSolutionImage} className={"top-section-image"} />
    </div>
  );
};

export default SolutionDarkTopSection;
