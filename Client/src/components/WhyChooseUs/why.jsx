import  { useState, useEffect } from 'react';
import whyChooseUsImage from '/src/assets/why-choose-us.webp';
import './why.css';

function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const element = document.querySelector('.why-choose-us-image');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <img src={whyChooseUsImage} alt="Why Choose Us" className={`why-choose-us-image ${isVisible ? 'show' : ''}`}/>
    </div>
  );
}

export default WhyChooseUs;
