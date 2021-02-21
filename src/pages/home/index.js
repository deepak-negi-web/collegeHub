import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    accessibility: true,
    adaptiveHeight: true,
    centerMode: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            style={{ width: "100%", padding: "16px" }}
            src="https://via.placeholder.com/1200x320/"
            alt="carousel-img"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", padding: "16px" }}
            src="https://via.placeholder.com/1200x320/"
            alt="carousel-img"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", padding: "16px" }}
            src="https://via.placeholder.com/1200x320/"
            alt="carousel-img"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", padding: "16px" }}
            src="https://via.placeholder.com/1200x320/"
            alt="carousel-img"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", padding: "16px" }}
            src="https://via.placeholder.com/1200x320/"
            alt="carousel-img"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", padding: "16px" }}
            src="https://via.placeholder.com/1200x320/"
            alt="carousel-img"
          />
        </div>
      </Slider>
    </div>
  );
}
