import React from "react";
import ProductItem from "./ProductItem";

function ProductPopular() {
  return (
    <div className="prodPopular">
      <div className="prodPopular-header">Popular Product</div>
      <div className="prodPopular-category">
        <ul className="prodPopular-category__list">
          <li className="prodPopular-category__item prodActive">Pizza</li>
          <li className="prodPopular-category__item">Sushi</li>
        </ul>
      </div>
      <div className="prodPopular-list">
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    </div>
  );
}

export default ProductPopular;
