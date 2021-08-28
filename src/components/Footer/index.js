import React from "react";
import { FacebookOutlined, GithubOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <div className="footer-item__header">ADDRESS</div>
        <div className="footer-item__content">
          <p>570 8th Ave,</p>
          <p>New York,</p>
          <p>NY 10018 United States</p>
        </div>
        <div className="footer-item__action"></div>
      </div>
      <div className="footer-item">
        <div className="footer-item__header">BOOK A TABLE</div>
        <div className="footer-item__content">
          <p>Dogfood och Sliders foodtruck.</p>
          <p>Under Om oss kan ni läsa</p>
        </div>
        <div className="footer-item__action"></div>
      </div>
      <div className="footer-item">
        <div className="footer-item__header">OPENING HOURS</div>
        <div className="footer-item__content">
          <p>Monday – Friday: 8am – 4pm</p>
          <p>Saturday: 9am – 5pm</p>
        </div>
        <div className="footer-item__action">
          <span className="footer-icon">
            <FacebookOutlined />
          </span>
          <span className="footer-icon">
            <TwitterOutlined />
          </span>
          <span className="footer-icon">
            <YoutubeOutlined />
          </span>
          <span className="footer-icon">
            <GithubOutlined />
          </span>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-item__header">NEWSLETTER</div>
        <div className="footer-item__content">
          <p>Subscribe to the weekly newsletter for all the latest updates</p>
        </div>
        <div className="footer-item__action"></div>
      </div>
    </div>
  );
}

export default Footer;
