import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { NavLink} from "react-router-dom";

import "/src/components/Footer/footer.css";

const Footer =()=>{
  return (
    <div className="footer-part">
    <div className="footer-section">
      <div className="first-section">
        <h1 className="heading-footer">Start using Homaid Today.</h1>
        <div className="email-container">
          {Cookies.get("jwt_token") == undefined ? <NavLink to = "/login" className="footer-button"> Join With Us</NavLink>:<NavLink to = "/" className="footer-button">Thanks For Joining Us</NavLink>}
          {/* <i
            className="fa-solid fa-paper-plane"
            aria-hidden="true"
          ></i> */}
        </div>
        <div className="inner-section">
          <div className="head-img-section">
            <h1 className="heading-footer">
              <span className="homaid-heading-span">H</span>omaid
            </h1>
            <img src="/src/assets/logo_nobg.webp" alt="Logo" className="foot-image" />
          </div>
          <p className="homaid-desc">
            Let us be your trusted partner in creating solutions that resonate
            with your vision.
          </p>
        </div>
      </div>
      <div className="second-section">
        <div className="second-inner-section">
          <h1 className="social-text-footer">Connect With Us</h1>
          <ul className="social-container">
            <div className="social-handles">
            <a href="https://www.linkedin.com/company/homaid-services/about/">
                <FaLinkedin className="linkedin-icon"/>
              </a>
              <a
                href="https://www.linkedin.com/company/homaid-services/about/"
                className="social-media"
              >
                <li className="list-item">LinkedIn</li>
              </a>
              
            </div>
            <div className="social-handles">
            <a href="https://twitter.com/Homaid471011">
              <FaXTwitter className="twitter-icon" />
              </a>
              <a
                href="https://twitter.com/Homaid471011"
                className="social-media"
              >
                <li className="list-item">Twitter</li>
              </a>
              
            </div>
            <div className="social-handles">
            <a href="https://www.instagram.com/homaid_service/">
              <FaInstagram className="instagram-icon"/>
              </a>
              <a
                href="https://www.instagram.com/homaid_service/"
                className="social-media"
              >
                <li className="list-item">Instagram</li>
              </a>
              
            </div>
            <div className="social-handles">
            <a href="https://www.facebook.com/profile.php?id=61552265330728">
              <FaFacebook className="facebook-icon"/>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552265330728"
                className="social-media"
              >
                <li className="list-item">Facebook</li>
              </a>
              
            </div>
            <div className="social-handles">
            <a href="https://www.youtube.com/@Homaid-hc9ik">
              <FaYoutube className="youtube-icon"/>
              </a>
              <a
                href="https://www.youtube.com/@Homaid-hc9ik"
                className="social-media"
              >
                <li className="list-item">Youtube</li>
              </a>
              
            </div>
          </ul>
        </div>
      </div>
      <div className="third-section">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.665031171588!2d78.34141327516807!3d17.523496483387078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMxJzI0LjYiTiA3OMKwMjAnMzguNCJF!5e0!3m2!1sen!2sin!4v1723806298367!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <hr/>
    <div className="footer-details-container">
      <p className="footer-para">Road No : 07,Office Backside Vijetha Warehouse,
                                     Near Coca Cola Road,Ameenpur,Miyapur - 502032</p>
      <p className="footer-para">+91 9010114722</p>
      <a href="mailto:contact@homaid.in"  className="contact-info-email"> <div></div><p className="footer-para">contact@homaid.in</p></a>
      <ul className="social-container-footer">
            <div className="social-handles-footer">
            <a href="https://www.linkedin.com/company/homaid-services/about/">
                <FaLinkedin className="linkedin-icon"/>
              </a>
             
            </div>
            <div className="social-handles-footer">
            <a href="https://twitter.com/Homaid471011">
              <FaXTwitter className="twitter-icon" />
              </a>
              
            </div>
            <div className="social-handles-footer">
            <a href="https://www.instagram.com/homaid_service/">
              <FaInstagram className="instagram-icon"/>
              </a>
             
            </div>
            <div className="social-handles-footer">
            <a href="https://www.facebook.com/profile.php?id=61552265330728">
              <FaFacebook className="facebook-icon"/>
              </a>
            </div>
            <div className="social-handles-footer">
            <a href="https://www.youtube.com/@Homaid-hc9ik">
              <FaYoutube className="youtube-icon"/>
              </a>
            </div>
          </ul>
    </div>
    <p className="copyright-content">Copyright © 2024 Homaid - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
