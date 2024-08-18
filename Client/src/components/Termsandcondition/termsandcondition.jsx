/* eslint-disable no-unused-vars */
import React from "react";
import "./termsandcondition.css";
import LoginNavbar from "../Navbar/loginNavbar";
import Footer from "../Footer/footer";
import Whatsapp from "../Whatsapp/whatsapp";

const TermsAndConditions = () => {
  return (
    <>
      <LoginNavbar/>
      <div className="terms-container">
        <h1>Terms and Conditions</h1>

        <h2>Terms and conditions of HOMAID Services</h2>

        <h3>Service Schedule:</h3>
        <p>
          Our cleaning and cooking services are provided between 9 AM and 4 PM.
          Clients are requested to ensure access to the premises during these
          hours.
          <a href="https://homaid.in/"> https://homaid.in/</a>.
        </p>

        <h3>Cancellation Policy:</h3>
        <h4>Cancellation Notice:</h4>
        <p>
          Cancellations must be made at least 24 hours before the scheduled
          appointment time.
        </p>

        <h3>Refund Policy:</h3>
        <p>
          Cancellations made less than 24 hours before the scheduled appointment
          will not be eligible for any refund of the service fee.
        </p>

        <h3>Payment Terms:</h3>
        <p>
          All payments must be made promptly. Late payments are not tolerated
          and may result in additional fees or cessation of services.
        </p>

        <h3>Code of Conduct:</h3>
        <p>
          We expect all clients to treat our service staff with respect. Any
          rude or disrespectful behavior towards our staff will result in
          immediate termination of services and potential legal action.
        </p>

        <h3>Liability Exclusions:</h3>
        <p>
          We are not liable for any damages to objects within your home during
          the provision of our services. Clients are advised to secure or remove
          any valuable or fragile items before our staff arrives.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at
          <a href="mailto:contact@homaid.in">
            {" "}
            support contact@homaid.in
          </a>
          .
        </p>

        {/* <footer className="footer">
          <p>&copy; 2024 HOMAID Services. All rights reserved.</p>
          <p>
            Follow us on
            <a
              href="https://twitter.com/homaidservices"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Twitter
            </a>
            ,
            <a
              href="https://facebook.com/homaidservices"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Facebook
            </a>
            , and
            <a
              href="https://instagram.com/homaidservices"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Instagram
            </a>
            .
          </p>
        </footer> */}
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default TermsAndConditions;
