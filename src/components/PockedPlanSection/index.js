import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import "./styles.scss";

const PockedPlanSection = () => {
  return (
    <div className="mypocked-plan-component-wrap">
      <div className="mypocked-plan-top">
        <span className="title">
          My Pocked Plans <InfoCircleOutlined />
        </span>
        <span className="see-more">
          See more <ArrowRightOutlined />
        </span>
      </div>
      <div className="pock-list">
        <Row gutter={[18, 18]}>
          <Col span={12}>
            <div className="pock-item">
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
            <div className="pock-item">
              <div className="icon-wrap">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/b504/cf5a/e086d2601ee13c82b80f141a11633c6f?Expires=1687737600&Signature=YqTJ052PDsIQxNIdK4pAcM9v73jY0x9ASMYZgB-koUtuqf-0~~xSskPDYDcN05L0-S~P0zIesWzIdE~ZhONhgMjbhwwz2CQV3QCd5Cb0b7MZWxJ9hc2xzB9ri~bhC9n9EeZ-tiamHix-Zmj4~llYmVfXE~G0LAyZEmRXkfSadd~PscpIVajl9eY7cJw4qg4lcxIDeIn4~HN5VHaEeVQz3oCw4y3qNKOsBYcwkuJBdZaCKeAOi1L91gdNPI28q5uNeKE3PgDbR3byS6o8b9B5phD6j1YgacC7skI3EVvSGAqsIMQfmEIH4Vnl9XXGhzAB2xmGJAUQwftk03jJWNIp6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
                />
              </div>
              <span className="item-name">New Console</span>
              <span className="item-price">$5.000,00</span>
            </div>
          </Col>
          <Col span={12}>
            <div className="pock-item">
              <div className="icon-wrap">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/e658/8a0e/bbd632fcc199b5b3e3451f2f26fc56f8?Expires=1687737600&Signature=K8eKAy~o8mNfQmVftt7YOjgDVWksqGM5G17H8F4mZtG3TGtrsS2Nc4I8B0PQ7ySbk8wxn~1xb5MaMr-jMNQq5o9Fcvg7k6j9Nt7vRHKjES8NyZrbtyQeSKvCU~lVB6wi6qwFMot1Vu~2IVjyS~fJvRqyoiwskEuhvJxXG5a4r8bx5phy19zzhkHn0Y3Qie9AB~Wehbp1jEdr~b17FkDhcIInaOBBXkzuQR0kxFZ2Kk9GWryUbArPIi3kZ~lCk7o1SPgc78iElytRs74E9g8K9mpWUGZIOGTVgi5ArJjByKLwaungtK79IPob~3-qfsHkhQxj~LCh4WHiS5yqlLG~Og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
                />
              </div>
              <span className="item-name">Savings </span>
              <span className="item-price">$5.000,00</span>
            </div>
          </Col>
          <Col span={12}>
            <div className="pock-item">
              <div className="icon-wrap">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/b463/62c0/0ac9d4c5427d8023077e0952fd6e5466?Expires=1687737600&Signature=UhY5FK6TbD~YGUFHWJ-RHPpH0AfFstXFmLZe9xXVafFTPBiJHJyPuRW-SSj3AOcKnPGSzox2-2kafOEjZHC3FIMA0KxGJli80wdA9M5aHACvVnCoDO-Sg~~Ojhm2wNAjgTwCigwU4vIu3uYgodFnx4AFDEYs1y~3jsIDgLmBuDoumtPJ1zNDdJXGrN~4FNRuB2D5Bnm674Gm6OwV6gNf7OH3N6H26nGeB3qI85157SE-9ejq7g0MHDqtgEkVFWkysYJaTWs54tnGomGDGU1f2LorbKoRzQI~9FHtVJgOj-N-povma1k1CartuLQmvnQZYgk-MMfgdgt8V0xUZqTlnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
                />
              </div>
              <span className="item-name">New Car</span>
              <span className="item-price">$5.000,00</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PockedPlanSection;
