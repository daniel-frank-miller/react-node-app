/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Navbar from "/src/components/Navbar/navbar.jsx";
import About from "/src/components/About/about.jsx";
import Services from "/src/components/Services/services.jsx";
import Testimonals from "/src/components/Testimonals/testimonals.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import Quotation from "/src/components/Quotation/index.jsx";
import Hero from "/src/components/Hero/hero.jsx";
import WhyChooseUs from "../WhyChooseUs/why.jsx";
import ServiceBlog from "../ServiceBlog/index.jsx";
import HappyCustomers from "../HappyCustomers/index.jsx";
import Recognition from "../Recognition/index.jsx";
import "/src/components/Home/home.css";
import Whatsapp from "../Whatsapp/whatsapp.jsx";
import { FaArrowUp } from 'react-icons/fa'; // Import the down arrow icon from react-icons/fa
import RatingStars from '../RatingStars/rating.jsx'

const Home = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const servicesSectionId = document.getElementById('servicesSection');
    if (servicesSectionId) {
      if (window.pageYOffset > servicesSectionId.offsetTop) {
        setShowScrollIcon(true);
      } else {
        setShowScrollIcon(false);
      }
    }
  };

  const scrollToServices = () => {
    const servicesSectionId = document.getElementById('servicesSection');
    if (servicesSectionId) {
      window.scrollTo({
        top: servicesSectionId.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mainContainer">
      <Navbar />
      <Hero />
      <Whatsapp />
      <About />
      <Services />
      <WhyChooseUs />
      <HappyCustomers />
      <ServiceBlog />
      <Testimonals />
      {/* <div className='review-image-container'>
      <img src={`/src/assets/updated-review-rating.webp`} alt="review-rating" className='review-rating-image'/>
      </div> */}
      <RatingStars/>
      <Quotation />
      <Recognition />
      <Footer />
      {showScrollIcon && (
        <div className="scrollToServicesIcon" onClick={scrollToServices}>
          <FaArrowUp className='arrow-icon'/>
        </div>
      )}
    </div>
  );
};

export default Home;
