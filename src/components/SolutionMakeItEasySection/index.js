import { Button, Col, Row } from "antd";
import React from "react";
import PockedPlanSection from "../PockedPlanSection";
import "./styles.scss";

const SolutionMakeItEasySection = () => {
  return (
    <div className="solution-makeit-easy-section">
      <Row gutter={{ md: 30, lg: 70, xl: 90 }} justify="space-between">
        <Col span={24} order={2} lg={{ span: 12, order: 1 }}>
          <div className="right-section">
            <PockedPlanSection />
          </div>
        </Col>
        <Col span={24} order={1} lg={{ span: 12, order: 2 }}>
          <div className="content-section">
            <div className="our-best-feature-top">
              <span>For business startup 💼</span>
            </div>
            <span className="title">
              Make it easy to do the right thing, anywhere.
            </span>
            <span className="desc">
              Auto-generate receipts and make it easy to understand the policy
              and purpose for expenses, across cards, reimbursements, and bill
              pay — with amounts shown in USD and local currency.
            </span>
            <Button type="primary" size="large" className="learn-more-btn">
              Learn more
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SolutionMakeItEasySection;
