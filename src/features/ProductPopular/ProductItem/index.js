import React from "react";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";

function ProductItem() {
  return (
    <div className="prodPopular-item">
      <div className="prodPopular-item__header">
        <div className="prodPopular-item__header__background"></div>
        <img
          className="prodPopular-item__header__image"
          src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/3-1-450x450.png"
        ></img>
      </div>
      <div className="prodPopular-item__content">
        <div className="prodPopular-item__content__star">
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
        </div>
        <div className="prodPopular-item__content__name">
          BBQ chicken breast
        </div>
        <div className="prodPopular-item__content__description">
          A mighty meaty double helping of all the reasons you love our burger.
        </div>
        <div className="prodPopular-item__content__main">
            <div className="prodPopular-item__content__main__price">
                $10
            </div>
            <div className="prodPopular-item__content__main__cart">
                <ShoppingCartOutlined/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
