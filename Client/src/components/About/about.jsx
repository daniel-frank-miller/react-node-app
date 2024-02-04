import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Link} from 'react-router-dom';

import "/src/components/About/about.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000,
};

const About = () => {
  const simpleSlider = () => {
    return (
      <Slider {...settings}>
        <div>
          <img
            src="/src/assets/car-1.webp"
            alt="Image 1"
            className="carousel-img"
          />
        </div>
        <div>
          <img
            src="src/assets/car-2.webp"
            alt="Image 2"
            className="carousel-img "
          />
        </div>
        <div>
          <img
            src="src/assets/car-3.webp"
            alt="Image 3"
            className="carousel-img"
          />
        </div>
        <div>
          <img
            src="/src/assets/car-4.webp"
            alt="Image 4"
            className="carousel-img"
          />
        </div>
        <div>
          <img
            src="/src/assets/car-5.webp"
            alt="Image 5"
            className="carousel-img"
          />
        </div>
        <div>
          <img
            src="/src/assets/car-6.webp"
            alt="Image 6"
            className="carousel-img"
          />
        </div>
      </Slider>
    );
  };
  return (
    <div className="section2 prevent-select" id="aboutUs">
      <div className="carousel">{simpleSlider()}</div>
      <div className="section2-content">
        <h1 className="section2-heading ">About Homaid</h1>
        <p className="section2-subtitle">
          At Homaid, we are not just a cleaning service, we are your partners in
          creating a home that sparkles with brilliance. Yet, our passion
          extends to the heart of the home the kitchen, where we strive to
          revolutionise the way you experience not just cleanliness and
          organization but a culinary journey filled with delights and flavours.
        </p>
        <Link to="/contactus">
          <button className="section-2-btn" id="getInTouch">
            Get in Touch
          </button>
        </Link>
      </div>
    </div>
  );
};
export default About;
