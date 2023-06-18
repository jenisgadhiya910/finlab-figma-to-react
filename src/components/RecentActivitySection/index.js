import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
import React from "react";
import "./styles.scss";

const RecentActivitySection = () => {
  return (
    <div className="recent-activity-component-wrap">
      <div className="recent-activity-top">
        <span className="title">
          Recent Activiy <InfoCircleOutlined />
        </span>
        <span className="see-more">
          See more <ArrowRightOutlined />
        </span>
      </div>
      <div className="activity-list">
        <div className="activity-item">
          <div className="left-wrap">
            <div className="icon-wrap">
              <img
                src={
                  "https://s3-alpha-sig.figma.com/img/0cf3/1a99/ea799aa140a3352eb940dd3f193295c3?Expires=1687737600&Signature=OIHroCImTjboLMqJbLZ7oU6Jh0EzjEERy7hUHViwgjknzumsrQ469u6mw3~2AxaMubizGuCYY17r9XPG8gXIX-Uy2YgCbEfy2Yk1LzasA7a7b-eRQNafui3N69XnDabYm0DmlLGkLb0xVa3Ti-m~GU1L6Wp6heP5UwXC7xM3orqPfgNfv7k7AfIhUvCNs5OAgv4av8Ip4jvSRRmyoIsh7b-8AUMGTsD4kPl7XNA5IELhPdzr4Ul8ZlkR7pA0f05WPnWzjMy4jiAhXFDmYpoxA-vP4SU0YW5Yxa8VXffnEuI0JGGosoej24M7hyIPB3ompktVgh46OubZ5kpAD4y9LA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
              />
            </div>
            <div className="details-wrap">
              <span className="name">Figma Pro</span>
              <span className="desc">Subscriptions</span>
            </div>
          </div>
          <div className="right-wrap">
            <span className="price">-$23.21</span>
            <span className="datetime">10/02/22 - 15.34</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="left-wrap">
            <div className="icon-wrap">
              <img
                src={
                  "https://s3-alpha-sig.figma.com/img/46b4/0bb1/55516853527584c48c541cd576368c40?Expires=1687737600&Signature=Gt5aA--E4ZhjAUGXNPvTFb19O5lOkV5jRcmcLmIXZNsoVAEJyQDKrbb49fxlkP8nB7yX6G824M9dzWIs5pP-Hmq9MiL7Q0wrOuXmu89N9C9UbhDOPbTJiyH-ujTj5yY372VZbuym1Cr27n24fqxPt80OqOJDu7xZZBwhTR8eImxTaAzz9~mWGrjB3s8iJvtWyWeA7lW4E9ydzDWw7hJqj3fTi5J85nOd9kOimsoma-yakS6~eEZCtG7sprKV6~6HauRyoGKw5OLp1KErO9njeoxAXzCtVrkZfRx1xGRREoJsYXUqW~dPUhnP1Z68iJXrJVqPTGGiZZwumGYPRj~gDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
              />
            </div>
            <div className="details-wrap">
              <span className="name">Adobe Collection</span>
              <span className="desc">Subscriptions</span>
            </div>
          </div>
          <div className="right-wrap">
            <span className="price">-$50.21</span>
            <span className="datetime">10/02/22 - 15.34</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="left-wrap">
            <div className="icon-wrap">
              <img
                src={
                  "https://s3-alpha-sig.figma.com/img/a503/7295/3dcdd8c087f45983873351fca27a8d23?Expires=1687737600&Signature=WKsS7yJH3f97D7UE9UJEPGZ1JhNZy~AXI5hk8kMq8WSjzJNlQAMDuy3LWatZVd465T3JvBCVAlSXu-qmSLax4roy2M-BTdgJ61IiYMqZOrD7RwcX8DG8~enkv~k4z56ne-0ceX~jXJ9kwf48n3yIYdgbGZ4effKQBMWjs8mJTiT-XRiOkFojbn~RititvEXQ~7amykkudf9iHcqPQisZJOn1B~7wRGAzef5BRue2-HJfBNKf02CsFjxCIyg8DsEGc-ksA~c9vw2vd38HuQX28Wl1QfGOcKFAzLfVrPRmK6dM~EFqGHA~eh2HA5ueSw4BWoifLDbKcALRq1jAbcV4YQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
              />
            </div>
            <div className="details-wrap">
              <span className="name">Fiver Inter</span>
              <span className="desc">Receive</span>
            </div>
          </div>
          <div className="right-wrap">
            <span className="price">+$100.00</span>
            <span className="datetime">10/02/22 - 15.34</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="left-wrap">
            <div className="icon-wrap">
              <img
                src={
                  "https://s3-alpha-sig.figma.com/img/b489/6b61/e60af654e6e288bf548da34bfb901314?Expires=1687737600&Signature=jdg8naFrjaiuOcN2-Uh0mLmqoc2w6P4vAm3WapFn7yf0a-0~HTSi83Apx-yDWWv4as2nVfXJZjh7FpQ1FQYuFLQEhCRWNRg7uYgvHpkjwTVWz-SYdya4B3JJrKZWWq20S4uWpOAGpeVZNI2DjxgBn4BvjLCW6pWDi9EIpjlaPKbhffPGzoXZL4N-HTejYXNrF5Iq42Htfhez9Lf7EU8yHvMts55hipBrEFQII4J1qCq3Eq1wDWiLf6H6Cd3vlIMedKlSo5BjYYkhXJdBrBYp4j8oyNwH-Zu1BLPh~BFe9ddRi0irBToIXhTUdS17XKVUj9MIfLDbgQrf5s2IxAbuNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
              />
            </div>
            <div className="details-wrap">
              <span className="name">Starbucks</span>
              <span className="desc">Transfer</span>
            </div>
          </div>
          <div className="right-wrap">
            <span className="price">-$50.00</span>
            <span className="datetime">10/02/22 - 15.34</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivitySection;
