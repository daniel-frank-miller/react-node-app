import "./ServicesNavbar.css";

import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
const ServicesSection = () => {
  return (
    <>
      <Navbar />
      <div className="ServicesNavbar prevent-select" id="servicesSection">
        <h1 className="ServicesNavbar-heading ">Services</h1>
        <div className="ServicesNavbar-cards-container">
          <div className="ServicesNavbar-card-element">
            <img
              src="./src/assets/cooking-card-bg.webp"
              alt="cooking image"
              className="ServicesNavbar-card-image"
            />
            <div className="ServicesNavbar-content">
              <h1 className="ServicesNavbar-card-heading">Cooking</h1>
              <p className="ServicesNavbar-card-desc ">
                Welcome to the world of flavour, innovation and endless
                possibilities in the kitchen.
              </p>
            </div>
            <Link to="/cookingprofile">
              <button className="ServicesNavbar-btn" id="cookingBtn">
                Book Now
              </button>
            </Link>
          </div>
          <div className="ServicesNavbar-card-element">
            <img
              src="./src/assets/cleaning-card-bg.webp"
              alt="cleaning image"
              className="ServicesNavbar-card-image"
            />
            <div className="ServicesNavbar-content">
              <h1 className="ServicesNavbar-card-heading">Cleaning</h1>
              <p className="ServicesNavbar-card-desc ">
                We believe in transforming the chore of cleaning into a
                delightful and efficient experience.
              </p>
            </div>
            <Link to="/cleaningservices">
              <button className="ServicesNavbar-btn" id="cleaningBtn">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
