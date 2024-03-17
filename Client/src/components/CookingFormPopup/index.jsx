import React, { useState, useEffect } from 'react';
import Popup from "reactjs-popup";
import Slider from "react-slick";
import { IoPersonOutline } from "react-icons/io5";
import Rating from "react-rating";
import { GiCrossMark } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // Import CSS file
import Cookies from 'js-cookie';

export default function CookingFormPopup({ cFormStatus, setCFormStatus }) {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [recurringType, setRecurringType] = useState('');
    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [cFormControl, setCFormControl] = useState(cFormStatus);
    const [count, setCount] = useState(0);

    const professionals = [
        // Professional data
        {
            id: 9,
            name: "Vikram Singh",
            rating: 4.7,
            description: "Experienced chef specializing in authentic Indian cuisine."
        },
        {
            id: 10,
            name: "Neha Patel",
            rating: 4.2,
            description: "Talented chef known for flavorful Indian dishes."
        },
        {
            id: 11,
            name: "Rajesh Kumar",
            rating: 4.5,
            description: "Seasoned chef mastering the art of Indian cooking."
        },
        {
            id: 12,
            name: "Anjali Gupta",
            rating: 4.8,
            description: "Culinary artist renowned for Indian flavors."
        },
        {
            id: 13,
            name: "Amit Verma",
            rating: 4.4,
            description: "Passionate chef creating comforting Indian dishes."
        },
        {
            id: 14,
            name: "Pooja Sharma",
            rating: 4.6,
            description: "Rising star exploring new flavors in Indian cuisine."
        }
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 2000    // Autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (name && number && recurringType && location && dateTime && count) {
            const formData = {
                name: name,
                location: location,
                recurring: recurringType,
                familyMemberCount: count,
                dateTime: dateTime,
                phone: number,
            };

            try {
                const response = await fetch("https://api.homaid.in/cooking_services", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get("jwt_token")}`
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    // Handle successful submission, e.g., show success message
                    console.log("Form submitted successfully");
                    // Clear form fields
                    setName('');
                    setNumber('');
                    setRecurringType('');
                    setLocation('');
                    setDateTime('');
                    setCount(0);
                } else {
                    // Handle server errors or other response errors
                    console.error("Error submitting form:", response.statusText);
                    // Optionally show an error message to the user
                    alert('Error submitting form. Please try again later.');
                }
            } catch (error) {
                // Handle network errors or other exceptions
                console.error("Error submitting form:", error);
                // Optionally show an error message to the user
                alert('Error submitting form. Please check your network connection and try again.');
            }
        } else {
            alert('Please fill in all form fields');
        }
    };

    // Function to handle button click and update state
    const handleButtonLocation = (value) => {
        setLocation(value)
    }

    const handleButtonRecurring = (value) => {
        setRecurringType(value)
    }

    useEffect(() => {
        setCFormControl(cFormStatus);
    }, [cFormStatus]);

    useEffect(() => {
        if (!cFormControl) {
            setCFormStatus(false); // Reset the state to false when the popup is closed
        }
    }, [cFormControl]);

    return (
        <Popup
            open={cFormControl}
            closeOnDocumentClick={true}
            position="center center"
        >
            <div className="s-overlay">
                <button onClick={() => setCFormControl(false)} className='cross-button'><GiCrossMark className='ig' /></button>
                <div className='sub-overlay'>
                    <div className="card-one">
                        <div className="sub-card-one">
                            <video className="sub-card-one-video" src="/src/assets/cooking-video-banner.webm" autoPlay loop muted id="bg-video" />
                        </div>
                        <div className="sub-card-one sub2">
                            <Slider {...sliderSettings} >
                                {professionals.map((item) => (
                                    <div key={item.id} className="slider-container">
                                        <IoPersonOutline className="person-img" />
                                        <h5 className="person-heading">{item.name}</h5>
                                        <Rating
                                            initialRating={item.rating}
                                            emptySymbol={<span className="rating-icon">&#9734;</span>}
                                            fullSymbol={<span className="rating-icon">&#9733;</span>}
                                            readonly
                                        />
                                        <p className="person-para">{item.description}</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="sub-card-one sub2 sub3">
                            <div>
                                <h1 className="card-head">300 <span>+</span></h1>
                                <p className="card-para">Certified Workers</p>
                            </div>
                            <div>
                                <h1 className="card-head">600 <span>+</span></h1>
                                <p className="card-para">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-two">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="cf-label">
                                    Name:
                                </label><br />
                                <input
                                    type="text"
                                    className='cf-input'
                                    placeholder="Enter Name"
                                    required
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="cf-label">
                                    Mobile Number:
                                </label><br />
                                <input
                                    type="tel"
                                    className='cf-input'
                                    required
                                    placeholder="Enter Name"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <div>
                                <h2 className="cf-heading">
                                    Locations In Hyderabad: <span className='cf-heading cf-span'> {location} </span>
                                </h2>
                                <div className="button-container">
                                    <button className="cf-button" onClick={() => handleButtonLocation("KPHB")}>KPHB</button>
                                    <button className="cf-button" onClick={() => handleButtonLocation("Jubilee Hills")}>Jubilee Hills</button>
                                    <button className="cf-button" onClick={() => handleButtonLocation("Gachibowli")}>Gachibowli</button>
                                    <button className="cf-button" onClick={() => handleButtonLocation("Madhapur")}>Madhapur</button>
                                </div>
                            </div>
                            <div>
                                <h2 className='cf-heading'>Recurring: <span className='cf-heading cf-span'> {recurringType} </span> </h2>
                                <div className="button-container">
                                    <button className="cf-button" onClick={() => handleButtonRecurring("Once")}>Once</button>
                                    <button className="cf-button" onClick={() => handleButtonRecurring("Daily")}>Daily</button>
                                    <button className="cf-button" onClick={() => handleButtonRecurring("Weekly")}>Weekly</button>
                                    <button className="cf-button" onClick={() => handleButtonRecurring("Monthly")}>Monthly</button>
                                </div>
                            </div>
                            {/* House Type */}
                            <div>
                                <label className='cf-heading'>Date & Time:</label><br />
                                <input
                                    className='cf-input'
                                    type="datetime-local"
                                    placeholder="Date & Time"
                                    name="dateTime"
                                    required
                                    value={dateTime}
                                    onChange={(e) => setDateTime(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="cf-label">
                                    Family Members Count:
                                </label><br />
                                <input
                                    type="number"
                                    className='cf-input'
                                    placeholder="Enter Name"
                                    required
                                    value={count}
                                    onChange={(e) => setCount(e.target.value)}
                                />
                            </div>
                            <button className='cff-button ' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Popup>
    );
}
