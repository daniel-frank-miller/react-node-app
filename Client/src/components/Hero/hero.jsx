import { useState } from 'react'
import video1 from '../../assets/cooking-vid.webm'
import video2 from '../../assets/cleaning-vid.webm'
import { FaChevronDown } from "react-icons/fa";

import './hero.css'

const Hero = () => {
  
  
    const [currentVideo, setCurrentVideo] = useState(1);
  
    const handleVideoEnd = () => {
      // Switch between video 1 and video 2
      setCurrentVideo(currentVideo === 1 ? 2 : 1);
    };
    const scrollToNextSection = () => {
      const aboutHomaidSection = document.getElementById('aboutUs');
      if (aboutHomaidSection) {
          aboutHomaidSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div className='video-section'>
    <div className="about-section">
        <div className="overlay"></div>
        <video src={video1}  onEnded={handleVideoEnd} autoPlay loop  muted id="bg-video"/>
    </div>
    <div className="about-section">
        <div className="overlay"></div>
        <video src={video2}  onEnded={handleVideoEnd} autoPlay loop  muted id="bg-video"/>
    </div>
    {/* <div className='bar-sec'>

    </div> */}
    {/* <div className="scroll-container" onClick={scrollToNextSection}>
      <div className="field">
        <div className="mouse"> */}
          {/* Add content inside the mouse div if needed */}
        {/* </div>
      </div>
    </div> */}
    </div>
  )
}

export default Hero