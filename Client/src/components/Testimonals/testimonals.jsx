import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Rating from "react-rating";
import "./testimonals.css"; // Import your CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Feedback() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this threshold as per your need
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const [feedbackData, setFeedbackData] = useState([
    { name: "John Doe", comment: "Great service!", rating: 5 },
    { name: "Jane Smith", comment: "Excellent experience!", rating: 4.5 },
    { name: "John Doe", comment: "Great service!", rating: 5 },
    { name: "Jane Smith", comment: "Excellent experience!", rating: 4.5 },
    { name: "John Doe", comment: "Great service!", rating: 5 },
    { name: "Jane Smith", comment: "Excellent experience!", rating: 4.5 },
    { name: "John Doe", comment: "Great service!", rating: 5 },
    { name: "Jane Smith", comment: "Excellent experience!", rating: 4.5 }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    verticalSwiping: true,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      name: formData.name,
      comment: formData.message,
      rating: formData.rating
    };
    setFeedbackData([...feedbackData, newFeedback]);
    setFormData({
      name: "",
      email: "",
      message: "",
      rating: 0
    });
  };

  return (
    <div className="Tfeedback-container" ref={servicesRef}>
      <div className={`Tsub-feedback-1 animate__zoomIn ${isVisible ? "Tanimate__fadeInLeft" : ""}`}>
        <div className="Titem-card-container">
          <div className="Titem-card">
            <div className="Titem-card-front">
              <h1 className="Tfeedback-heading">
                Express <br/> Your <br/> Experience
              </h1>
              <div className="Tdiv">
                <button className="Tbutton">Hover Me</button>
              </div>
            </div>
            <div className="Titem-card-back">
              <form className="Tform1" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
                <input 
                  type="text" 
                  placeholder="Email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                />
                <textarea 
                  placeholder="Message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                ></textarea>
                <Rating
                  emptySymbol={<span className="Trating-icon">&#9734;</span>}
                  fullSymbol={<span className="Trating-icon">&#9733;</span>}
                  onChange={(value) => setFormData({ ...formData, rating: value })}
                  initialRating={formData.rating}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`Tsub-feedback-2 ${isVisible ? "Tanimate__fadeInRight" : ""}`}>
        <Slider {...settings}>
          {feedbackData.map((feedback, index) => (
            <div key={index} className="Tfeedback-item">
              <p>{feedback.comment}</p>
              <p>by {feedback.name}</p>
              <Rating
                initialRating={feedback.rating}
                readonly
                emptySymbol={<span className="Trating-icon">&#9734;</span>}
                fullSymbol={<span className="Trating-icon">&#9733;</span>}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
