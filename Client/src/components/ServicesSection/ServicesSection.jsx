import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "/src/components/Navbar/navbar.jsx";
import "/src/components/ServicesSection/ServicesSection.css";
import Footer from "../Footer/footer.jsx"
import CookingFormPopup from "../CookingFormPopup/index.jsx";
import Cookies from "js-cookie";

const ServicesSection = () => {
    const [cookingFormStatus, setCFormStatus] = useState(false);
    return (
        <div className="singlePage">
            <Navbar/>
            <CookingFormPopup cFormStatus={cookingFormStatus} setCFormStatus={setCFormStatus} />
            <div className="ServicesSection prevent-select">
                <h1 className="ServicesSection-heading">Our Services</h1>
                <div className="ServicesSection-cards-container">
                    <div className="ServicesSection-card-element">
                        <div className="about-section">
                            <div className="overlay"></div>
                            <video src="/src/assets/cooking-video-banner.webm" autoPlay loop muted id="bg-video" />
                        </div>
                        <div className="ServicesSection-content">
                            <h1 className="ServicesSection-card-heading">Cooking</h1>
                            <p className="ServicesSection-card-subtitle ">
                                Welcome to the world of flavour, innovation and endless
                                possibilities in the kitchen.
                            </p>
                            <div className="rating">
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9734;</span>
              <span className="star2">4.8 (2.1k+)</span>
              </div>
                            {Cookies.get("jwt_token") && <button onClick={() => setCFormStatus(!cookingFormStatus)} className="ServicesSection-btn" id="cookingBtn">
                                Book Now
                            </button>}
                            {!Cookies.get("jwt_token") && 
                                <Link to="/login" className="ServicesSection-btn-link">
                                <button className="ServicesSection-btn" id="cleaningBtn">
                                    Book Now
                                </button>
                            </Link>
                            }
                        </div>
                    </div>
                    <div className="ServicesSection-card-element">
                        <div className="about-section">
                            <div className="overlay"></div>
                            <video src="/src/assets/cleaning-video-banner.webm" autoPlay loop muted id="bg-video" />
                        </div>
                        <div className="ServicesSection-content">
                            <h1 className="ServicesSection-card-heading">Cleaning</h1>
                            <p className="ServicesSection-card-subtitle ">
                                We believe in transforming the chore of cleaning into a
                                delightful and efficient experience.
                            </p>
                            <div className="rating">
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9734;</span>
              <span className="star2">4.9 (2.4k+)</span>
              </div>
                            <Link to="/cleaningservices" className="ServicesSection-btn-link">
                                <button className="ServicesSection-btn" id="cleaningBtn">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src="/src/assets/about-us-homaid.webp" alt="about-us" className="about-us-image"/> */}
            <Footer />
        </div>
    );
};

export default ServicesSection;
