import { FaRegStar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import './index.css';

const HappyCustomers = () => {
    const [rating, setRating] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        const target = document.querySelector('.happy-customers-container');
        if (target) observer.current.observe(target);

        return () => observer.current.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const targetRating = 4.8;
            const targetCustomers = 500;

            const intervalId = setInterval(() => {
                setRating(prevRating => {
                    const increment = 0.2; // Adjust increment rate
                    return prevRating + increment > targetRating ? targetRating : prevRating + increment;
                });

                setCustomers(prevCustomers => {
                    const increment = 20; // Adjust increment rate
                    return prevCustomers + increment > targetCustomers ? targetCustomers : prevCustomers + increment;
                });
            }, 50); // Adjust interval duration

            return () => clearInterval(intervalId);
        }
    }, [isVisible]);

    return (
        <div className="happy-customers-container">
            <div className="rating-container">
                <FaRegStar className="star-icon" />
                <div className="scrolling-number-container">
                    <h1 className={`scrolling-number ${isVisible ? 'scrolling' : ''} rating-head`} style={{marginTop: 0}}>{rating.toFixed(1)}</h1>
                    <p>Service Rating</p>
                </div>
                
            </div>
            <div className="customer-container">
                <MdGroups className="star-icon" />
                <div className="scrolling-number-container">
                    <h1 className={`scrolling-number ${isVisible ? 'scrolling' : ''} rating-head`} style={{marginTop: 0}}>{customers}{customers === 500 ? "+" : ""}</h1>
                    <p>Happy Customers</p>
                </div>
                
            </div>
        </div>
    );
}

export default HappyCustomers;
