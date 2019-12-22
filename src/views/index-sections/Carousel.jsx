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
      src: require("../../assets/img/Bukit Batulawang.jpg"),
      city: "Cilegon, Banten",
      title: "Bukit Batu Lawang",
      subtitle: "Gerem",
      link: ""
    },
    {
      src: require("../../assets/img/Cilegon.jpg"),
      city: "Cilegon, Banten",
      title: "Cilegon",
      subtitle: "",
      link: ""
    },
    {
      src: require("../../assets/img/Serang.jpg"),
      city: "Serang, Banten",
      title: "Serang",
      subtitle: "",
      link: ""
    },
    {
      src: require("../../assets/img/Tanjung Pendam Belitong.jpg"),
      city: "Belitong",
      title: "Tanjung Pendam",
      subtitle: "Belitong",
      link: ""
    },
    {
      src: require("../../assets/img/Perkebunan Teh Penyairan.jpg"),
      city: "Cianjur, Jawa Barat",
      title: "Perkebunan Teh",
      subtitle: "Penyairan",
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
