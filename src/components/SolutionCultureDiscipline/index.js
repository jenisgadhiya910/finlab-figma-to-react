import {
  CaretDownOutlined,
  DownOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Row, Space } from "antd";
import React from "react";
import "./styles.scss";

const SolutionCultureDiscipline = () => {
  return (
    <div className="solution-culture-discipline-section">
      <div className="our-best-feature-top">
        <span>Our best features for you 👏🏻</span>
      </div>
      <span className="title">Culture of financial discipline</span>
      <span className="desc">
        finlab is adaptable to meet the financial processing requirements of
        global companies and support with multiple local bank channels and
        digital wallets.
      </span>
      <Row gutter={[24, 32]} className="cards-wrap">
        <Col span={24} lg={{ span: 8 }}>
          <div className="card-item">
            <span className="card-item-title">
              Manage your future with savings plans
            </span>
            <span className="card-item-desc">
              Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio
              nunc ullamcorper mauris commodo .
            </span>
            <div className="bottom-saving-plan">
              <Row gutter={15} className="card-plans">
                <Col span={12}>
                  <div className="plan-item">
                    <div className="icon-wrap">
                      <img
                        src={
                          "https://s3-alpha-sig.figma.com/img/ecc9/8283/81c59f827a50c2a49adc7264d172e79c?Expires=1687737600&Signature=m26ajp9hqdC42Od2nt2vxxwsfsUeYRU-adcgiGi8JB4pZLUmzwgSmZSLpiozoYYVJMh84Co22zQMhc3-Dz0lhM0iny7z9ZlWQGfBXPWH-l1TI2r-g-xn2bVuKF2qgrNFKsr2wewhwLaeSxvP61BKLwDMDM2nYsh5~pU3DlpEgeq5rIlE1ZAp2368~IGso1ejyr~5INUx~~ZN2~i38luvA~-CtIupq1n4Ri074MshfuhhWHLvvLeSAtWTks8kH67N92kDufi2In4JDxZO4YeveulO8rQKr9SrPBy7vKByjZzhNdg6oMdhEnwr9xIK48WVRywswGZ3JSKoctrDLDxiIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        }
                      />
                    </div>
                    <span className="item-name">New Car</span>
                    <span className="item-price">$5.000,00</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="plan-item">
                    <div className="icon-wrap">
                      <img
                        src={
                          "https://s3-alpha-sig.figma.com/img/ecc9/8283/81c59f827a50c2a49adc7264d172e79c?Expires=1687737600&Signature=m26ajp9hqdC42Od2nt2vxxwsfsUeYRU-adcgiGi8JB4pZLUmzwgSmZSLpiozoYYVJMh84Co22zQMhc3-Dz0lhM0iny7z9ZlWQGfBXPWH-l1TI2r-g-xn2bVuKF2qgrNFKsr2wewhwLaeSxvP61BKLwDMDM2nYsh5~pU3DlpEgeq5rIlE1ZAp2368~IGso1ejyr~5INUx~~ZN2~i38luvA~-CtIupq1n4Ri074MshfuhhWHLvvLeSAtWTks8kH67N92kDufi2In4JDxZO4YeveulO8rQKr9SrPBy7vKByjZzhNdg6oMdhEnwr9xIK48WVRywswGZ3JSKoctrDLDxiIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        }
                      />
                    </div>
                    <span className="item-name">New Car</span>
                    <span className="item-price">$5.000,00</span>
                  </div>
                </Col>
              </Row>
              <div className="add-new-plan-popup">
                <span className="add-new-plan-popup-title">
                  Want Add new Saving Plan ?
                </span>
                <Space direction="vertical" className="add-new-plan-popup-btns">
                  <Button type="primary">Yes</Button>
                  <Button>No</Button>
                </Space>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <div className="card-item">
            <span className="card-item-title">
              Know the currency of each country
            </span>
            <span className="card-item-desc">
              Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio
              nunc ullamcorper mauris commodo .
            </span>
            <div className="bottom-currentcy-section">
              <div className="bottom-currentcy-section-top">
                <span className="currency-label">
                  Currency <InfoCircleOutlined />
                </span>
                <div className="top-right-pill">
                  <span>1</span>
                  <Divider type="vertical" />
                  <span>
                    USD <DownOutlined />{" "}
                  </span>
                </div>
              </div>
              <div className="currency-list">
                <div className="currency-item">
                  <div className="item-left">
                    <div className="item-flag" />
                    <span className="item-name">Euro</span>
                  </div>
                  <div className="item-right">
                    <span className="item-value">0,95</span>
                    <span className="item-currency">EUR</span>
                  </div>
                </div>
                <div className="currency-item">
                  <div className="item-left">
                    <div
                      className="item-flag"
                      style={{ background: "#ED4C5C" }}
                    />
                    <span className="item-name">Chinese Yuan</span>
                  </div>
                  <div className="item-right">
                    <span className="item-value">7,06</span>
                    <span className="item-currency">CNY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <div className="card-item">
            <span className="card-item-title">
              Easily analyze your financial activity
            </span>
            <span className="card-item-desc">
              Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio
              nunc ullamcorper mauris commodo .
            </span>
            <div className="bottom-saving-plan">
              <Row gutter={15} className="card-plans">
                <Col span={12}>
                  <div className="plan-item">
                    <div className="icon-wrap">
                      <img
                        src={
                          "https://s3-alpha-sig.figma.com/img/ecc9/8283/81c59f827a50c2a49adc7264d172e79c?Expires=1687737600&Signature=m26ajp9hqdC42Od2nt2vxxwsfsUeYRU-adcgiGi8JB4pZLUmzwgSmZSLpiozoYYVJMh84Co22zQMhc3-Dz0lhM0iny7z9ZlWQGfBXPWH-l1TI2r-g-xn2bVuKF2qgrNFKsr2wewhwLaeSxvP61BKLwDMDM2nYsh5~pU3DlpEgeq5rIlE1ZAp2368~IGso1ejyr~5INUx~~ZN2~i38luvA~-CtIupq1n4Ri074MshfuhhWHLvvLeSAtWTks8kH67N92kDufi2In4JDxZO4YeveulO8rQKr9SrPBy7vKByjZzhNdg6oMdhEnwr9xIK48WVRywswGZ3JSKoctrDLDxiIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        }
                      />
                    </div>
                    <span className="item-name">New Car</span>
                    <span className="item-price">$5.000,00</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="plan-item">
                    <div className="icon-wrap">
                      <img
                        src={
                          "https://s3-alpha-sig.figma.com/img/ecc9/8283/81c59f827a50c2a49adc7264d172e79c?Expires=1687737600&Signature=m26ajp9hqdC42Od2nt2vxxwsfsUeYRU-adcgiGi8JB4pZLUmzwgSmZSLpiozoYYVJMh84Co22zQMhc3-Dz0lhM0iny7z9ZlWQGfBXPWH-l1TI2r-g-xn2bVuKF2qgrNFKsr2wewhwLaeSxvP61BKLwDMDM2nYsh5~pU3DlpEgeq5rIlE1ZAp2368~IGso1ejyr~5INUx~~ZN2~i38luvA~-CtIupq1n4Ri074MshfuhhWHLvvLeSAtWTks8kH67N92kDufi2In4JDxZO4YeveulO8rQKr9SrPBy7vKByjZzhNdg6oMdhEnwr9xIK48WVRywswGZ3JSKoctrDLDxiIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        }
                      />
                    </div>
                    <span className="item-name">New Car</span>
                    <span className="item-price">$5.000,00</span>
                  </div>
                </Col>
              </Row>
              <div className="add-new-plan-popup">
                <span className="add-new-plan-popup-title">
                  Want Add new Saving Plan ?
                </span>
                <Space direction="vertical" className="add-new-plan-popup-btns">
                  <Button type="primary">Yes</Button>
                  <Button>No</Button>
                </Space>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Button size="large" className="learn-more-btn">
        Learn more
      </Button>
    </div>
  );
};

export default SolutionCultureDiscipline;
