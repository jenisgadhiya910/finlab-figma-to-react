import { Button, Col, Row } from "antd";
import React from "react";
import RecentActivitySection from "../RecentActivitySection";
import "./styles.scss";

const SolutionFinancialDiscipline = () => {
  return (
    <div className="solution-financial-discipline-section">
      <Row gutter={{ md: 30, lg: 60, xl: 90 }} justify="space-between">
        <Col span={24} lg={{ span: 11, xl: 12 }}>
          <div className="content-section">
            <div className="our-best-feature-top">
              <span>For personal use 🤟🏻</span>
            </div>
            <span className="title">
              Create a culture of speed and financial discipline.
            </span>
            <span className="desc">
              Gain real-time visibility and accountability across global spend,
              break down silos of separate systems, and give accounting teams
              more automation and accuracy.
            </span>
            <Button type="primary" size="large" className="learn-more-btn">
              Learn more
            </Button>
          </div>
        </Col>
        <Col span={24} lg={{ span: 13, xl: 12 }}>
          <div className="right-section">
            <RecentActivitySection />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SolutionFinancialDiscipline;
