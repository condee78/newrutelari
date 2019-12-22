import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.jsx";
import IndexHeader from "../components/Headers/IndexHeader.jsx";
import DarkFooter from "../components/Footers/DarkFooter.jsx";

// sections for this page
import FeaturedRute from "./index-sections/FeaturedRute.jsx";
import Carousel from "./index-sections/Carousel.jsx";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <FeaturedRute />
          <Carousel />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
