import React from "react";
import {
  HeartOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" width="120" />
      </div>
      <div className="header-category">
        <ul className="header-category__list">
          <li className="header-category__item">Home</li>
          <li className="header-category__item">Menu</li>
          <li className="header-category__item">About</li>
          <li className="header-category__item">Pages</li>
          <li className="header-category__item">Contact</li>
          <li className="header-category__item">About</li>
        </ul>
      </div>
      <div className="header-action">
        <div className="header-action__contact">
          <div className="header-action__contact__icon">
            <PhoneOutlined />
          </div>
          <div className="header-action__contact__text">
            <span
              className="header-action__contact__text-content"
              style={{ fontSize: 10 }}
            >
              Call in order
            </span>
            +8344-387-371
          </div>
        </div>
        <div className="header-action__link">
          <SearchOutlined />
        </div>
        <div className="header-action__link">
          <UserAddOutlined />
        </div>
        <div className="header-action__link">
          <HeartOutlined />
        </div>
        <div className="header-action__link">
          <ShoppingCartOutlined />
        </div>
      </div>
    </div>
  );
}

export default Header;
