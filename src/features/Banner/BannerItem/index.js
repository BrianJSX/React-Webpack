import React from "react";

function BannerItem() {
  return (
    <div className="banner-item">
      <div className="banner-item__text">
        <div className="banner-item__header">Any day offers</div>
        <div className="banner-item__description">
          NEW PHENOMENON BURGER TASTE
        </div>
        <div className="banner-item__price">$12.90</div>
      </div>
      <div className="banner-item__content">
        <div className="banner-item__background"></div>
        <img
          class="banner-item__image"
          width="150rem"
          src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner1-1.png"
        ></img>
      </div>
    </div>
  );
}

export default BannerItem;
