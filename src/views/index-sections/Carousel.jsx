import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./CarouselStyle.css";

function CarouselSection() {
  const myLink = {
    color: "#2ca8ff",
    textDecoration: "none"
  };

  const items = [
    {
      src: require("../../assets/img/bg1.jpg"),
      city: "Nature, United States",
      title: "Nature, United States",
      subtitle: "subtitle",
      link: ""
    },
    {
      src: require("../../assets/img/bg3.jpg"),
      city: "Somewhere Beyond, United States",
      title: "Somewhere Beyond, United States",
      subtitle: "subtitle",
      link: ""
    },
    {
      src: require("../../assets/img/bg4.jpg"),
      city: "Yellowstone National Park, United States",
      title: "Yellowstone National Park, United States",
      subtitle: "subtitle",
      link: ""
    }
  ];

  return (
    <>
      <OwlCarousel classNameName="owl-theme" loop margin={50} nav>
        {items.map(item => {
          return (
            <div clas="item">
              <div className="single-features-area">
                <img src={item.src} />

                <div className="price-start">
                  <p>{item.city}</p>
                </div>
                <a href={item.link} style={myLink}>
                  <div className="feature-content d-flex align-items-center justify-content-between">
                    <div className="feature-title">
                      <h5>{item.title}</h5>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
      <div className="mb-5"></div>
    </>
  );
}

export default CarouselSection;
