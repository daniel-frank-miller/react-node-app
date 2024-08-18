/* eslint-disable no-unused-vars */
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './footer.css'; // Assuming the correct path for CSS file

const Footer = () => {
  return (
    <div className="footer-part">
      <div className="footer-section">
        <div className="first-section">
          <h1 className="heading-footer">Start using Homaid Today.</h1>
          <div className="email-container">
            {Cookies.get("jwt_token") === undefined ? (
              <NavLink to="/login" className="footer-button">Join With Us</NavLink>
            ) : (
              <NavLink to="/" className="footer-button">Thanks For Joining Us</NavLink>
            )}
          </div>
          <div className="inner-section">
            <div className="head-img-section">
              <h1 className="heading-footer">
                <span className="homaid-heading-span">H</span>omaid
              </h1>
              <img src="/src/assets/logo_nobg.webp" alt="Homaid Logo" className="foot-image" />
            </div>
            <p className="homaid-desc">
              Let us be your trusted partner in creating solutions that resonate with your vision.
            </p>
          </div>
        </div>
        <div className="second-section">
          <div className="second-inner-section">
            <h1 className="social-text-footer">Connect With Us</h1>
            <ul className="social-container">
              <li className="social-handles">
                <a href="https://www.linkedin.com/company/homaid-services/about/" aria-label="LinkedIn">
                  <FaLinkedin className="linkedin-icon" />
                </a>
                <span className="social-media">LinkedIn</span>
              </li>
              <li className="social-handles">
                <a href="https://twitter.com/Homaid471011" aria-label="Twitter">
                  <FaTwitter className="twitter-icon" />
                </a>
                <span className="social-media">Twitter</span>
              </li>
              <li className="social-handles">
                <a href="https://www.instagram.com/homaid_service/" aria-label="Instagram">
                  <FaInstagram className="instagram-icon" />
                </a>
                <span className="social-media">Instagram</span>
              </li>
              <li className="social-handles">
                <a href="https://www.facebook.com/profile.php?id=61552265330728" aria-label="Facebook">
                  <FaFacebook className="facebook-icon" />
                </a>
                <span className="social-media">Facebook</span>
              </li>
              <li className="social-handles">
                <a href="https://www.youtube.com/@Homaid-hc9ik" aria-label="YouTube">
                  <FaYoutube className="youtube-icon" />
                </a>
                <span className="social-media">YouTube</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='policy-section'>
          <h5 className='social-text-footer'>Policies</h5>
          <ul className='policy-list'>
            <li>
              <Link to="/refundpolicy">Refund Policy</Link>
            </li>
            <li>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/termsandconditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="third-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.665031171588!2d78.34141327516807!3d17.523496483387078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMxJzI0LjYiTiA3OMKwMjAnMzguNCJF!5e0!3m2!1sen!2sin!4v1723810808767!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
      <hr />
      <div className="footer-details-container">
        <p className="footer-para">
          Road No : 07, Office Backside Vijetha Warehouse, Near Coca Cola Road, Ameenpur, Miyapur - 502032
        </p>
        <p className="footer-para">+91 9010114722</p>
        <a href="mailto:contact@homaid.in" className="contact-info-email">
          <p className="footer-para">contact@homaid.in</p>
        </a>
        <ul className="social-container-footer">
          <li className="social-handles-footer">
            <a href="https://www.linkedin.com/company/homaid-services/about/" aria-label="LinkedIn">
              <FaLinkedin className="linkedin-icon" />
            </a>
          </li>
          <li className="social-handles-footer">
            <a href="https://twitter.com/Homaid471011" aria-label="Twitter">
              <FaTwitter className="twitter-icon" />
            </a>
          </li>
          <li className="social-handles-footer">
            <a href="https://www.instagram.com/homaid_service/" aria-label="Instagram">
              <FaInstagram className="instagram-icon" />
            </a>
          </li>
          <li className="social-handles-footer">
            <a href="https://www.facebook.com/profile.php?id=61552265330728" aria-label="Facebook">
              <FaFacebook className="facebook-icon" />
            </a>
          </li>
          <li className="social-handles-footer">
            <a href="https://www.youtube.com/@Homaid-hc9ik" aria-label="YouTube">
              <FaYoutube className="youtube-icon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright-content">Copyright © 2024 Homaid - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
