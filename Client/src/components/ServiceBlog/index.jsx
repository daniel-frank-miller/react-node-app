import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Chrono } from 'react-chrono';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './index.css';

const ServiceBlog = () => {
  
  const items = [
    {
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

  return (
    <div className='service-blogs-container'>
      <Container className="my-5">
        <Row>
          <Col xs={12} md={12}>
            <Chrono
              className="home-font"
              items={items}
              mode="VERTICAL_ALTERNATING"
              theme={{ primary: '#4A666B', secondary: '#50ff45', cardBgColor: '#d1d6db' }}
              disableNavOnWheel={false}
              disableNavButtons={true}
              enableAutoPlay={false}
              enableControls={false}
              itemComponent={(props) => (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Card {...props} />
                </motion.div>
              )}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceBlog;
