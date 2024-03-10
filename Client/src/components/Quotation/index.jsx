import  { useState, useEffect, useRef } from 'react';
import { IoIosContact } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { CiMail } from 'react-icons/ci';
import './index.css';

const Quotation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const quotationRef = useRef(null);

 useEffect(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, options);

  if (quotationRef.current) {
    observer.observe(quotationRef.current);
  }

  return () => {
    if (quotationRef.current) {
      observer.unobserve(quotationRef.current);
    }
  };
}, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    fetch('https://api.homaid.in/book-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      // Handle response as needed
      console.log(response)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  

  return (
    <div className={`quotation-container ${isVisible ? animationClass : ""}`} ref={quotationRef}>
      <div className='sub-quotation-container '>
        <div className='border'>
          <h4 className='book-heading'>Book Appointment</h4>
          <h2 className= {`book-heading-2 ${isVisible ? 'animate__fadeIn' : ''}`}>GET YOUR HOMAID SERVICES WITH OUR PROFESSIONALS</h2>
          <div className={`form-main-div ${isVisible ? 'animate__fadeIn' : ''}`}>
            <div className= {`image-div ${isVisible ? 'animate__fadeIn' : ''}`}>
              <p className='book-heading-3'>
                We schedule a free consultation to understand your needs and preferences
              </p>
              <img
                className='img-class'
                src='/src/assets/consultation-image.webp'
                alt='Consultation'
              />
            </div>
            <div className={`form-div ${isVisible ? 'animate__slideInFromLeft' : ''}`}>
              <form className='borderr form' onSubmit={handleSubmit}>
                <p className='book-heading-5'>BOOK FOR HOMAID SERVICES NOW !</p>
                <div className='input-div'>
                  <div className='sub-form-container'>
                    <div className='input-field'>
                      <input placeholder='Name' className='input' name='name' value={formData.name} onChange={handleInputChange} />
                      <IoIosContact className='icon-size' />
                    </div>
                    <div className='input-field'>
                      <input placeholder='Email Address' className='input' name='email' value={formData.email} onChange={handleInputChange} />
                      <CiMail className='icon-size' />
                    </div>
                  </div>
                  <div className='sub-form-container'>
                    <div className='input-field'>
                      <input placeholder='Phone Number' className='input' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} />
                      <FiPhoneCall className='icon-size' />
                    </div>
                    <div className='input-field'>
                      <input placeholder='Your Location' className='input' name='location' value={formData.location} onChange={handleInputChange} />
                      <GoLocation className='icon-size' />
                    </div>
                  </div>
                  <div className='sub-form-container'>
                    <div className='input-field'>
                      <input type="date" placeholder='Select Date' className='input1' name='date' value={formData.date} onChange={handleInputChange} />
                    </div>
                    <div className='input-field'>
                      <input type="time" placeholder='Choose Time' className='input1' name='time' value={formData.time} onChange={handleInputChange} />
                    </div>
                  </div>
                  
                  <div className='input-field-text'>
                    <select placeholder='Choose' type='text' className='input-new-two' name='service' value={formData.service} onChange={handleInputChange}>
                      <option>Select</option>
                      <option>Cooking</option>
                      <option>Cleaning</option>
                    </select>
                  </div>
                  <div className='input-field-text'>
                    <textarea placeholder='Your Message' className='input-new-twoo' name='message' value={formData.message} onChange={handleInputChange} rows='3' cols='50'></textarea>
                  </div>

                  <button className='appointment-button' type='submit'>
                    SUBMIT NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
