import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import account1 from "../../assets/images/account1.png";
import account2 from "../../assets/images/account2.png";
import account3 from "../../assets/images/account3.png";
import account4 from "../../assets/images/account4.png";
import account5 from "../../assets/images/account5.png";
import account6 from "../../assets/images/account6.png";
import account7 from "../../assets/images/account7.png";
import account8 from "../../assets/images/account8.png";
import account9 from "../../assets/images/account9.png";
import React from "react";
import "./styles.scss";

const accountsData = [
  {
    title: "Pilot",
    description:
      "Pilot handles your startup’s finance, accounting, and tax prep needs, so you can focus on what matters most—building your business. When you work with Pilot, you have a team of US-based accounting experts and fractional CFOs ready to support you at every stage of your company. They're the largest startup accounting provider in the world, and work with 1000+ startups today from pre-seed to Series D.",
    image: account1,
  },
  {
    title: "Countsy",
    description:
      "Countsy provides Finance, Accounting and HR Solutions to venture backed startups. Through a unique combination of an on demand CFO, CPO (Chief People Officer) and streamlined technologies, we free you from back office management and empower you to focus on what matters most. Delighting customers. Perfecting solutions. Accelerating growth. From Payroll and Benefits to GAAP Financials and Board Reporting, you get the support you need to be transaction ready. Efficient. Scalable. Done right.",
    image: account2,
  },
  {
    title: "Kruze Consulting",
    description:
      "Kruze Consulting is a leading provider of accounting, finance, HR, and tax consulting to seed and venture capital-funded startups. Kruze’s clients have collectively raised over $10 billion in VC financing, and Kruze’s clients are regularly acquired by the largest public technology companies. Kruze Consulting’s tax credit advisory is reducing our clients'​ burn by over $10 million this year, and Kruze’s team recommends best-in-class financial and HR systems that help make data-driven startup founders more productive. Visit https://kruzeconsulting.com/ to learn more.",
    image: account3,
  },
  {
    title: "Countabl",
    description:
      "Countabl is a tech-enabled service that creates the experience of a full financial team for the cost of a part-time employee. Our virtual workforce of bookkeepers, accountants, and financial analysts integrate remotely with startups, small businesses, and non-profits to build and maintain strong financial management practices from day one - through growth and scale.",
    image: account4,
  },
  {
    title: "Attivo Partners LLC",
    description:
      "With our fractional CFO and accounting services, we help founders navigate the complexities of company building through all stages of the journey - raising capital, building business models, operationalizing for scale, and achieving successful exits.",
    image: account5,
  },
  {
    title: "Bench Accounting",
    description:
      "Bench is the all-in-one financial solution that helps you grow your business. Get your bookkeeping, tax prep, and filing done by experts—with unlimited advisory services.",
    image: account6,
  },
  {
    title: "Fondo",
    description:
      "Fondo is an all-in-one accounting platform backed by Y Combinator that makes Bookkeeping, Tax, and Tax Credits easy for startups. Know your burn rate, runway, and financial details to make important company decisions. Getting your books closed and filing your taxes can also have an ROI. Fondo can help you identify and claim various tax credits that can help extend your startup's runway. We're offering $1,100 off to Brex customers.",
    image: account7,
  },
  {
    title: "Furey",
    description:
      "Furey is the accounting partner for more than 75 venture-backed startups and counting. We build innovative solutions that combine the best guidance and the smartest technology to help companies make smarter decisions and move forward confidently. Our clients—high-growth companies from many different industries—have raised nearly $2 billion in funding to date.",
    image: account8,
  },
  {
    title: "TaxTaker",
    description:
      "Over 80% of startups are missing out on billions of dollars in government sponsored programs. Don't be like that. Thanks to the R&D tax credit and Employee Retention Credit programs, startups are getting back tens of thousands of dollars in free money.",
    image: account9,
  },
];

const ProductsAccountantSection = () => {
  return (
    <div className="products-accountant-section">
      <div className="our-best-feature-top">
        <span>Search accountant 🎉</span>
      </div>
      <span className="title">Let’s find an accountant</span>
      <Input
        prefix={<SearchOutlined />}
        size={"large"}
        placeholder={"Input your first name"}
      />
      <Row gutter={[24, 24]} className={"accounts-list"}>
        {accountsData?.map((item) => (
          <Col span={24} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }}>
            <div className="account-card-item">
              <img src={item?.image} />
              <span className="title">{item?.title}</span>
              <span className="desc">{item?.description}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsAccountantSection;
