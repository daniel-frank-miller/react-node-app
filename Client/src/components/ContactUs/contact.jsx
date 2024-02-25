import { Component } from 'react';
import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Navbar from "/src/components/Navbar/navbar.jsx";
import "/src/components/ContactUs/contact.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      phone: '',
      message:'',
      response:''
    };
  }

  onSubmit = async(e) => {
    e.preventDefault();
    const {name,email,phone,message}=this.state
    const response = await fetch("http://178.16.139.165:3000/contactus", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email,phone,message})
      })
      const data = await response.json();
      console.log(data);
      this.setState({response:data.display_msg, name:'', email:'', phone: '', message:''});
  };

  handlePhone = (e) => {
    if (String(e.target.value).length <= 10)
      this.setState({ phone: e.target.value });
  }

  handleName=e=>{
    this.setState({name:e.target.value})
  }

  handleMessage=e=>{
    this.setState({message:e.target.value})
  }

  handleEmail=e=>{
    this.setState({email:e.target.value})
  }

  render() {
    const {name, email, phone, message,response}=this.state;
    return (
      <div className="singlePage">
        <Navbar />
        <div className="contactus-container prevent-select">
          <h1 className="contactus-title">Contact Us</h1>
          <p className="contactus-subtitle">
            Need assistance or have a question? Connect with us for tailored
            solutions and dedicated customer care!
          </p>
          <div className="contactus-content">
            <img
              src="/src/assets/contact_page_side_img.webp"
              className="contactpage-img"
              alt=""
            />
            <form className="contactus-form" onSubmit={this.onSubmit}>
              <h2 className="contactus-form-title">Get in Touch</h2>
              <div className="input-field">
                <MdOutlineDriveFileRenameOutline />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="user-input"
                  value={name}
                  onChange={this.handleName}
                  required
                />
              </div>
              <div className="input-field">
                <MdOutlineMailLock />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="user-input"
                  value={email}
                  onChange={this.handleEmail}
                  required
                />
              </div>
              <div className="input-field">
                <FiPhoneCall />
                <input
                  type="number"
                  id="subject"
                  placeholder="Enter your phone number"
                  className="user-input"
                  min="1000000000"
                  max="9999999999"
                  value={phone}
                  onChange={this.handlePhone}
                  required
                />
              </div>
              <div className="input-field">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                  className="user-input"
                  value={message}
                  onChange={this.handleMessage}
                  required
                ></textarea>
              </div>
              {response.length!==0&&<p>{response}</p>}
              <button type="submit" className="submit-form">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
