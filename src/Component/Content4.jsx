import React from 'react';
import "./Content4.css";
import Slider from 'react-slick';
import img1 from "../images/Logo/TCS.webp";
import img2 from "../images/Logo/HCL.png";
import img3 from "../images/Logo/WIPRO.webp";
import img4 from "../images/Logo/ZOHO1.webp";
import img5 from "../images/Logo/Amazon.webp";
import img6 from "../images/Logo/Accenture.webp";

const images = [img1,img2,img3,img4,img5,img6];

const Content4 = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <image src={img1}/>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Content4
