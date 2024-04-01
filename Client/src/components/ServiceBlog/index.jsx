// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
import { Chrono } from 'react-chrono';
// import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './index.css';

const ServiceBlog = () => {
  
  const items = [
    {
      key:1,
      title: "Cooking for Busy Schedules",
      cardTitle: "Cooking for Busy Schedules",
      cardSubtitle: "Delicious, healthful, and simple-to-prepare meals are part of our personalised programmes, so you can enjoy them without worrying about grocery shopping or preparation time.",
      media: {
        type: "IMAGE",
        source: {
          url: "/src/assets/cooking-blog-3.webp",
        },
      },
    },
    {
      key:2,
      title: "Cooking for Special Occasions",
      cardTitle: "Cooking for Special Occasions",
      cardSubtitle: "We enjoy crafting gastronomic adventures that you and your visitors won't soon forget. We provide tailored meals according to your tastes for everything from small dinners to larger parties.",
      media: {
        type: "IMAGE",
        source: {
          url: "/src/assets/cooking-blog-2.webp",
        },
      },
    },
    {
      key:3,
      title: "Interactive Cooking Sessions",
      cardTitle: "Interactive Cooking Sessions",
      cardSubtitle: "Optional cooking classes for family members to learn how to prepare healthy and delicious meals together, fostering a love for cooking and making informed food choices.",
      media: {
        type: "IMAGE",
        source: {
          url: "/src/assets/cooking-blog-1.webp"
        },
      },
    },

    {
      key:4,
      title: "Thorough Cleaning",
      cardTitle: "Thorough Cleaning",
      cardSubtitle: "Top-notch equipment is used by our cleaning specialists to create a clean and organised house. We promise that you will be happy.",
      media: {
        type: "IMAGE",
        source: {
          url: "/src/assets/cleaning-blog-3.webp",
        },
      },
    },
    {
      key:5,
      title: "Professional Expertise",
      cardTitle: "Professional Expertise",
      cardSubtitle: "Our staff is qualified and equipped to provide high-quality service. You can rely on us to consistently surpass your expectations.",
      media: {
        type: "IMAGE",
        source: {
          url:"/src/assets/cleaning-blog-2.webp",
        },
      },
    },
    {
      key:6,
      title: "Customized Plans",
      cardTitle: "Customized Plans",
      cardSubtitle: "We are aware that every family is distinct and every house is unique. For this reason, we provide specialised cleaning programmes to meet your unique needs.",
      media: {
        type: "IMAGE",
        source: {
          url:"/src/assets/cleaning-blog-1.webp",
        },
      },
    },
  ];

 

  const customTheme = {
    primary: '#000', // Change line color to black
    secondary: '#fff', // Change line color to black
    cardBgColor: '#fff',
    cardForeColor: '#000', // Change text color to white when clicked
    titleColor: '#000', // Change title color to black
    subtitleColor: '#000',
    fontFamily: 'Montserrat',
    padding: '10px'
  };

  return (
    <div className='service-blogs-container' style={{ fontFamily: customTheme.fontFamily, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Chrono
        items={items}
        fontSizes={{
          cardSubtitle: '1rem',
          cardText: '1rem',
          cardTitle: '1rem',
          title: '1rem',
        }}
        fontFamily="Montserrat"
        fontWeight={{
          cardTitle: '400',
        }}
        mode="VERTICAL_ALTERNATING"
        theme={customTheme}
        disableToolbar={true}
        
      />    
    </div>
  );
};

export default ServiceBlog;
