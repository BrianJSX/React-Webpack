import React from "react";
import imgTomato from "../../assets/images/tomato.png";
import background from "../../assets/images/slider.jpg";
import imgPizza from "../../assets/images/pizza.png";
import { Button } from "antd";

function Slider() {
  return (
    <div
      className="slider"
      style={{ backgroundImage: "url(" + background + ")" }}
    >
      <div className="slider-left">
        <div className="slider-text">
          UNLIMITED MEDIUM <span style={{ color: "yellow" }}>PIZZAS</span>
        </div>
        <div className="slider-description">
          <div className="slider-description__header">
            Medium 2-topping* pizza
          </div>
          <div className="slider-description__content">
            *Additional charge for premium toppings. Minimum of 2 required.
          </div>
        </div>
        <div className="slider-action">
          <div className="slider-action__button">
            <Button size="large" type="primary">
              ORDER NOW
            </Button>
          </div>
          <div className="slider-action__price">$12.99</div>
        </div>
      </div>
      <div className="slider-right">
        <img className="slider-tomato" src={imgTomato} />
        <img className="slider-pizza" src={imgPizza}></img>
      </div>
    </div>
  );
}

export default Slider;
