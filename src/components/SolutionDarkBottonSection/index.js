import { Button, Col, Row } from "antd";
import React from "react";
import dashboard1 from "../../assets/images/dashboard1.png";
import dashboard2 from "../../assets/images/dashboard2.png";
import "./styles.scss";

const SolutionDarkBottonSection = () => {
  return (
    <div className="solution-dark-bottom-section">
      <div className="finlab-solution-section">
        <div className="top-tooltip-wrap">
          <span>Our best solution for you ✨</span>
        </div>
        <span className="finlab-solution-section-title">
          We have solutions that work for you.
        </span>
        <Row gutter={[0, 24]} justify={"space-between"}>
          <Col span={24} md={{ span: 11 }}>
            <div className="finlab-solution-card">
              <div className="card-top">
                <span className="card-title">Finlab for Personal</span>
                <span className="card-desc">
                  Easy-to-use personal platfrom and spend management software in
                  an integrated global solution.
                </span>
                <Button size="large" className="learn-more-btn">
                  Learn More
                </Button>
              </div>
              <img src={dashboard1} />
            </div>
          </Col>
          <Col span={24} md={{ span: 11 }}>
            <div className="finlab-solution-card startup-card">
              <div className="card-top">
                <span className="card-title">Finlab for Startup</span>
                <span className="card-desc">
                  Fast access to global cards, business account (send ACH and
                  wires), spend management, and bill pay
                </span>
                <Button size="large" className="learn-more-btn">
                  Learn More
                </Button>
              </div>
              <img src={dashboard2} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="about-us-section">
        <Row align="middle">
          <Col span={24} order={2} lg={{ span: 14, order: 1 }}>
            <Row gutter={[24, 24]}>
              <Col span={24} md={{ span: 12 }}>
                <div className="user-card">
                  <div className="user-card-top">
                    <img
                      src={
                        "https://s3-alpha-sig.figma.com/img/ebef/ebad/7c56b7f240afd8bc9de4143391bf51b5?Expires=1687737600&Signature=XmiLGCb3usqx0HCZwoYd2n9uIyNIhW6kNxle3nZeowmtdjDiSjzPIKP9LUAkJ2Qs2bVJtdd2HoTK-dl2pg1FCGPfzigUbuNTghhyUlyngZLp6cYzTxwxKFAhT3DUjN6CtqLklkTw7HYC9BGV3TamTUQPv-nxibcpzUiCsWZ9ZpaYzMdW1~158CrkbJTBnOWHTr18MtiVCD2ExPxZWeFBTsGMLsSWXXuT7A-rHRKGSVcJhcmYF9VR4NMeYb1PSFHy91IKdeOhHn65VqM0T5YZOfrBwspSWynOvj8IbI-MIlW3yL9i--hr2~LkLz9rN6ANTSYcFps2V4Mw-15suAq3vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      }
                    />
                    <span>”</span>
                  </div>
                  <span className="user-name">Mikasa Ackerman</span>
                  <span className="user-desc">
                    Lorem ipsum dolor sit amet consectetur. Diam semper odio
                    consectetur faucibus tristique nec vitae volutpat volutpat.
                  </span>
                  <div className="star-wrap">⭐ 4.8</div>
                </div>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <div className="user-card">
                  <div className="user-card-top">
                    <img
                      src={
                        "https://s3-alpha-sig.figma.com/img/ebef/ebad/7c56b7f240afd8bc9de4143391bf51b5?Expires=1687737600&Signature=XmiLGCb3usqx0HCZwoYd2n9uIyNIhW6kNxle3nZeowmtdjDiSjzPIKP9LUAkJ2Qs2bVJtdd2HoTK-dl2pg1FCGPfzigUbuNTghhyUlyngZLp6cYzTxwxKFAhT3DUjN6CtqLklkTw7HYC9BGV3TamTUQPv-nxibcpzUiCsWZ9ZpaYzMdW1~158CrkbJTBnOWHTr18MtiVCD2ExPxZWeFBTsGMLsSWXXuT7A-rHRKGSVcJhcmYF9VR4NMeYb1PSFHy91IKdeOhHn65VqM0T5YZOfrBwspSWynOvj8IbI-MIlW3yL9i--hr2~LkLz9rN6ANTSYcFps2V4Mw-15suAq3vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      }
                    />
                    <span>”</span>
                  </div>
                  <span className="user-name">Mikasa Ackerman</span>
                  <span className="user-desc">
                    Lorem ipsum dolor sit amet consectetur. Diam semper odio
                    consectetur faucibus tristique nec vitae volutpat volutpat.
                  </span>
                  <div className="star-wrap">⭐ 4.8</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24} order={1} lg={{ span: 10, order: 2 }}>
            <div className="about-us-content">
              <div className="top-tooltip-wrap">
                <span>Testimonials from user 🤩</span>
              </div>
              <span className="title">What our user say about us</span>
              <span className="desc">
                You will get many benefits from our features. Finding a parking
                space becomes easier
              </span>
              <Button size="large" className="learn-more-btn">
                Learn more
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SolutionDarkBottonSection;
