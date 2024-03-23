import React, { useState, useEffect } from 'react';
import Popup from "reactjs-popup";
import Slider from "react-slick";
import { IoPersonOutline } from "react-icons/io5";
import Rating from "react-rating";
import { GiCrossMark } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // Import CSS file
import WashroomPaymentPopup from '../WashroomPaymentPopup';
import Cookies from 'js-cookie';
import axios from 'axios'; // Import Axios for making HTTP requests

export default function WashroomCleaningPopup({ washroomCleaning, setWashroomCleaning}) {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [recurringType, setRecurringType] = useState('');
    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [cFormControl, setCFormControl] = useState(washroomCleaning);
    const [numberofWashrooms, setNumberOfWashrooms] = useState(1);
    const [serviceType, setServiceType] = useState("Washroom Cleaning");
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [formData, setFormData] = useState(null);
    const [email,setEmail] = useState("");

    const professionals = [
        // Professional data
        {
            "id": 9,
            "name": "Ananya Subramanian",
            "rating": 4.7,
            "description": "Highly skilled in maintaining washrooms to the utmost standards of cleanliness, ensuring a hygienic and refreshing environment."
        },
        {
            "id": 10,
            "name": "Karthik Ramanathan",
            "rating": 4.2,
            "description": "Known for meticulous attention to detail, delivering immaculate washroom cleaning services that exceed expectations."
        },
        {
            "id": 11,
            "name": "Meera Krishnamurthy",
            "rating": 4.5,
            "description": "Master of the art of washroom maintenance, consistently providing pristine and inviting restroom spaces."
        },
        {
            "id": 12,
            "name": "Aditya Iyer",
            "rating": 4.8,
            "description": "Passionate about hygiene and cleanliness, renowned for transforming washrooms into spotless and hygienic areas."
        },
        {
            "id": 13,
            "name": "Sneha Venkatesh",
            "rating": 4.4,
            "description": "Dedicated to creating comfortable and organized washroom environments, ensuring utmost satisfaction with every service."
        },
        {
            "id": 14,
            "name": "Vivek Sundaram",
            "rating": 4.6,
            "description": "Innovative and resourceful, constantly exploring new methods and technologies to elevate the standards of washroom cleanliness."
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

        if (name && number && recurringType && email && location && dateTime && numberofWashrooms && serviceType) {
            const formData = {
                name: name,
                location: location,
                recurring: recurringType,
                cleaningServiceType:serviceType,
                houseType:"",
                email,
                numberofWashrooms,
                dateTime: dateTime,
                phone: number,
            };
            console.log(formData);

            try {
                const response = await axios.post("https://api.homaid.in/cleaning_services", formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get("jwt_token")}`
                    }
                });

                if (response.status === 200) {
                    // Handle successful submission, e.g., show success message
                    console.log("Form submitted successfully");
                    // Trigger payment popup
                    setFormData(formData);
                    setPaymentStatus(true);
                    // Clear form fields
                    setName('');
                    setNumber('');
                    setRecurringType('');
                    setLocation('');
                    setDateTime('');
                    setEmail('');
                    setNumberOfWashrooms(0);
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

    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        let month = now.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = now.getDate();
        day = day < 10 ? '0' + day : day;
        let hours = now.getHours();
        hours = hours < 10 ? '0' + hours : hours;
        let minutes = now.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    // Function to handle button click and update state
    const handleButtonLocation = (value) => {
        setLocation(value)
    }

    const handleButtonRecurring = (value) => {
        setRecurringType(value)
    }

    useEffect(() => {
        setCFormControl(washroomCleaning);
    }, [washroomCleaning, paymentStatus]);

    useEffect(() => {
        if (!cFormControl && paymentStatus) {
            setPaymentStatus(false); // Reset the payment status
        }
    }, [cFormControl, paymentStatus]);

    return (
        <Popup
            open={cFormControl}
            closeOnDocumentClick={false} // Prevents closing on outside click
            position="center center"
        >
            <div className="s-overlay">
                <WashroomPaymentPopup  formData={formData} paymentStatus={paymentStatus} setPaymentStatus={setPaymentStatus}/>
                <button onClick={() => setCFormControl(false)} className='cross-button'><GiCrossMark className='ig'/></button>
                <div className='sub-overlay'>
                    <div className="card-one">
                        <div className="sub-card-one">
                            <video className="sub-card-one-video" src="/src/assets/cleaning-video-banner.webm" autoPlay loop muted id="bg-video" />
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
                                    Email:
                                </label><br />
                                <input
                                    type="email"
                                    className='cf-input'
                                    placeholder="Enter Email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    placeholder="Enter Mobile Number"
                                    maxLength={10} // limit input to 10 characters
                                    value={number}
                                    onChange={(e) => {
                                        const input = e.target.value;
                                        const regex = /^[0-9]*$/; // only digits allowed
                                        if (regex.test(input)) {
                                            // Update state only if input is digits
                                            setNumber(input);
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <label className="cf-label">
                                    Service Type
                                </label><br />
                                <select
                                    className='cf-input-select'
                                    required
                                    value={serviceType} // Change the value to serviceType
                                    onChange={(e) => setServiceType(e.target.value)}
                                > 
                                    <option value="Washroom Cleaning">Washroom Cleaning</option> {/* Set value attribute */}
                                </select>
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
                                    min={getCurrentDateTime()} // set minimum value to current date and time
                                    value={dateTime}
                                    onChange={(e) => {
                                        const selectedDateTime = e.target.value;
                                        if (selectedDateTime >= getCurrentDateTime()) {
                                            setDateTime(selectedDateTime);
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <label className="cf-label">
                                    Number Of Washrooms:
                                </label><br />
                                <select
                                    type="text"
                                    className='cf-input-select'
                                    placeholder="Enter Family Members Count"
                                    required
                                    value={numberofWashrooms}
                                    onChange={(e) => setNumberOfWashrooms(e.target.value)}
                                > 
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                    <option value="four">4</option>
                                    <option value="five">5</option>
                                    <option value="six">6</option>
                                    <option value="seven">7</option>
                                </select>
                            </div>
                            <button className='cff-button ' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Popup>
    );
}
