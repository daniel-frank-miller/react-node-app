import Navbar from "../Navbar/Navbar";
import "./contact.css";
import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
const ContactUs = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    // complete the logic for db connection
  };
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
          <form className="contactus-form" onSubmit={""}>
            <h2 className="contactus-form-title">Get in Touch</h2>
            <div className="input-field">
              <MdOutlineDriveFileRenameOutline />
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="user-input"
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
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-form" onSubmit={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
