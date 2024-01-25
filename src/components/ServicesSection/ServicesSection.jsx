import "./ServicesSection.css";

import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
const ServicesSection = () => {
  return (
    <>
      <Navbar />
      <div className="ServicesSection prevent-select">
        <h1 className="ServicesSection-heading">Services</h1>
        <div className="ServicesSection-cards-container">
          <div className="ServicesSection-card-element">
            <img
              src="./src/assets/cooking-card-bg.webp"
              alt="cooking image"
              className="ServicesSection-card-image"
            />
            <div className="ServicesSection-content">
              <h1 className="ServicesSection-card-heading">Cooking</h1>
              <p className="ServicesSection-card-subtitle ">
                Welcome to the world of flavour, innovation and endless
                possibilities in the kitchen.
              </p>
              <Link to="/cookingprofile" className="ServicesSection-btn-link">
                <button className="ServicesSection-btn" id="cookingBtn">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className="ServicesSection-card-element">
            <img
              src="./src/assets/cleaning-card-bg.webp"
              alt="cleaning image"
              className="ServicesSection-card-image"
            />
            <div className="ServicesSection-content">
              <h1 className="ServicesSection-card-heading">Cleaning</h1>
              <p className="ServicesSection-card-subtitle ">
                We believe in transforming the chore of cleaning into a
                delightful and efficient experience.
              </p>
              <Link to="/cleaningservices" className="ServicesSection-btn-link">
                <button className="ServicesSection-btn" id="cleaningBtn">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
