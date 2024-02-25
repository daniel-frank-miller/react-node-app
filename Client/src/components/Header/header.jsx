import "/src/components/Header/header.css";
import { useEffect, useState } from 'react';

import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
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
                                <a href="#"> <div ><LuPhoneCall /></div>+91 81255 22213</a>
                                <span>|</span>
                                <a href="mailto:example@example.com"> <div><MdEmail /></div>homaidserviceshyd@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="social-icons">
                                <div className="container-icons">
                                    <a className="icon" href="#"><FaSquareInstagram /></a>
                                    </div>
                                <div className="container-icons">
                                <a className="icon" href="#"><FaSquareTwitter /></a>
                                </div>
                                <div className="container-icons">
                                <a className="icon" href="#"><FaFacebookSquare /></a>
                                </div>
                                <div className="container-icons">
                                <a className="icon" href="#"><FaWhatsappSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    
};

export default Header;