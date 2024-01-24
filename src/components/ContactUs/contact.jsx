import Navbar from "../Navbar/Navbar";
import "./contact.css";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="upper-container">
          <h1 className="heading">Contact Us</h1>
          <p className="pg">
            Need assistance or have a question? Connect with us for tailored
            solutions and dedicated customer care!
          </p>
        </div>
        <div className="lower-container">
          <div className="img-container">
            <img
              src="./src/assets/contact_page_side_img.webp"
              alt="contact side image"
            />
          </div>
          <div className="form-container">
            <h1>Contact us</h1>
            <form id="profileForm">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Full Name"
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                required
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter your Phone Number"
                required
              />

              <label htmlFor="message">Type your Message:</label>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Enter your Message"
                required
              />

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
