import React, { Component } from 'react';
import { IoIosContact } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { CiMail } from 'react-icons/ci';
import './index.css';

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      animationClass: '',
      formData: {
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        date: '',
        time: '',
        service: '',
        message: ''
      },
      appointmentStatus:''
    };
    this.quotationRef = React.createRef();
  }

  componentDidMount() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          this.setState({ isVisible: true });
        } else {
          this.setState({ isVisible: false });
        }
      });
    }, options);

    if (this.quotationRef.current) {
      observer.observe(this.quotationRef.current);
    }

    this.setState({ observer });
  }

  componentWillUnmount() {
    if (this.quotationRef.current) {
      this.state.observer.unobserve(this.quotationRef.current);
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submitted");
    // console.log(this.state.formData);
    // console.log(typeof(this.state.formData.date));
    // console.log(typeof(this.state.formData.time));
    const { name, email, phoneNumber, location, date, time, service, message } = this.state.formData;
  
    try {
      const response = await fetch("https://api.homaid.in/book-appointment", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          location,
          date,
          time,
          service,
          message
        })
      });
  
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Handle success, if needed
        this.setState({appointmentStatus:data.display_msg })
      } else {
        // Handle error, if needed
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, if needed
    }
    
  };
  

  render() {
    const { isVisible, formData, appointmentStatus } = this.state;

    return (
      <div className={`quotation-container ${isVisible ? this.state.animationClass : ""}`} ref={this.quotationRef}>
        <div className='sub-quotation-container '>
          <div className='border'>
            <h4 className='book-heading'>Book Appointment</h4>
            <h2 className={`book-heading-2 ${isVisible ? 'animate__fadeIn' : ''}`}>GET YOUR HOMAID SERVICES WITH OUR PROFESSIONALS</h2>
            <div className={`form-main-div ${isVisible ? 'animate__fadeIn' : ''}`}>
              <div className={`image-div ${isVisible ? 'animate__fadeIn' : ''}`}>
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
                <form className='borderr form' onSubmit={this.handleSubmit}>
                  <p className='book-heading-5'>BOOK FOR HOMAID SERVICES NOW !</p>
                  <div className='input-div'>
                    <div className='sub-form-container'>
                      <div className='input-field'>
                        <input placeholder='Name' className='input' name='name' value={formData.name} onChange={this.handleInputChange} />
                        <IoIosContact className='icon-size' />
                      </div>
                      <div className='input-field'>
                        <input placeholder='Email Address' className='input' name='email' value={formData.email} onChange={this.handleInputChange} />
                        <CiMail className='icon-size' />
                      </div>
                    </div>
                    <div className='sub-form-container'>
                      <div className='input-field'>
                        <input placeholder='Phone Number' className='input' name='phoneNumber' value={formData.phoneNumber} onChange={this.handleInputChange} />
                        <FiPhoneCall className='icon-size' />
                      </div>
                      <div className='input-field'>
                        <input placeholder='Your Location' className='input' name='location' value={formData.location} onChange={this.handleInputChange} />
                        <GoLocation className='icon-size' />
                      </div>
                    </div>
                    <div className='sub-form-container'>
                      <div className='input-field'>
                        <input type="date" placeholder='Select Date' className='input1' name='date' value={formData.date} onChange={this.handleInputChange} />
                      </div>
                      <div className='input-field'>
                        <input type="time" placeholder='Choose Time' className='input1' name='time' value={formData.time} onChange={this.handleInputChange} />
                      </div>
                    </div>
                    <div className='input-field-text'>
                      <select placeholder='Choose' type='text' className='input-new-two' name='service' value={formData.service} onChange={this.handleInputChange}>
                        <option>Select</option>
                        <option>Cooking</option>
                        <option>Cleaning</option>
                      </select>
                    </div>
                    <div className='input-field-text'>
                      <textarea placeholder='Your Message' className='input-new-twoo' name='message' value={formData.message} onChange={this.handleInputChange} rows='3' cols='50'></textarea>
                    </div>
                    {appointmentStatus.length!==0&&<p className='appointment-msg'>{appointmentStatus}</p>}
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
  }
}

export default Quotation;
