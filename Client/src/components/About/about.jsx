/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "/src/components/About/about.css";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: <></>, // Custom empty arrow component for previous
  nextArrow: <></>, // Custom empty arrow component for next
};

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold as per your need
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const simpleSlider = () => {
    return (
      <Slider {...settings}>
        <div>
          <img
            src="/src/assets/car-1.webp"
            alt="Image 1"
            className="carousel-img animate__fadeInLeft"
          />
        </div>
        <div>
          <img
            src="/src/assets/car-2.webp"
            alt="Image 2"
            className="carousel-img animate__fadeInRight"
          />
        </div>
        <div>
          <img
            src="/src/assets/car-3.webp"
            alt="Image 3"
            className="carousel-img animate__zoomIn"
          />
        </div>
      </Slider>
    );
  };

  return (
    <div className={`section2 prevent-select}`} id="aboutUs" ref={aboutRef}>
      <div className="section2-content">
        <h1 className={`section2-heading`}>About Homaid</h1>
        <p className={`section2-subtitle`}>
          At Homaid, we are not just a cleaning service, we are your partners in
          creating a home that sparkles with brilliance. Yet, our passion
          extends to the heart of the home the kitchen, where we strive to
          revolutionize the way you experience not just cleanliness and
          organization but a culinary journey filled with delights and flavors.
        </p>
        <Link to="/contactus">
          <button className={`section-2-btn`} id="getInTouch">
            Get in Touch
          </button>
        </Link>
      </div>
      <div className={`carousel`}>
        {simpleSlider()}
      </div>
    </div>
  );
};

export default About;
