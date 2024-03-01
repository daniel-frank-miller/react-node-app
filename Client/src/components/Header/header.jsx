import "/src/components/Header/header.css";
import { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
    
        const [isSticky, setIsSticky] = useState(false);
    
        useEffect(() => {
            const handleScroll = () => {
                const sticky = document.querySelector('.sticky-header').offsetTop;
                setIsSticky(window.pageYOffset > sticky);
            };
    
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    
        return (
            <header className={`sticky-header  ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="contact col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-info">
                                <a href="#"> <div><LuPhoneCall className="phone-email-icon"/></div><p className="contact-info-mobile-number">+91 81255 22213</p></a>
                                <span className="header-division">|</span>
                                <a href="mailto:homaidserviceshyd@gmail.com"> <div><MdEmail className="phone-email-icon"/></div><p className="contact-info-email">homaidserviceshyd@gmail.com</p></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="header-social-icons">
                                <div className="container-icons">
                                    <a className="icon" href="https://www.instagram.com/homaid_service/"><FaInstagram className="instagram-icon"/></a>
                                </div>
                                <div className="container-icons">
                                    <a className="icon" href=""><FaXTwitter className="twitter-icon" /></a>
                                </div> 
                                <div className="container-icons">
                                    <a className="icon" href="https://www.facebook.com/profile.php?id=61552315005159"><FaFacebook className="facebook-icon"/></a>
                                </div>
                                <div className="container-icons">
                                    <a className="icon" href="https://www.youtube.com/@Homaid-hc9ik"><FaYoutube className="youtube-icon"/></a>
                                </div>
                                 <div className="container-icons">
                                    <a className="icon" href="#"><FaWhatsappSquare className="whatsapp-icon"/></a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    
};

export default Header;