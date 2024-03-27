import  { useState, useEffect } from 'react';
import './slider.css'; // Assuming you have some CSS for styling
import aboutUsCleaning from '/src/assets/about-us-homaid-cleaning.webp';
import aboutUs from '/src/assets/about-us-homaid.webp';

const AboutSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images
  const images = [
    aboutUsCleaning,
    aboutUs
  ];

  // Function to handle switching to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Effect to handle automatic switching
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Switch every 3 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      {/* Display the current image */}
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="active slide-in"
      />

      {/* You can add any additional UI elements here, such as arrows for manual control */}
    </div>
  );
};

export default AboutSlider;
