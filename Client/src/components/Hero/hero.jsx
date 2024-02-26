import { useState } from 'react'
import video1 from '../../assets/video1.webm'
import video2 from '../../assets/video2.webm'

import './hero.css'

const Hero = () => {
  
  
    const [currentVideo, setCurrentVideo] = useState(1);
  
    const handleVideoEnd = () => {
      // Switch between video 1 and video 2
      setCurrentVideo(currentVideo === 1 ? 2 : 1);
    };
  return (
    <div className="about-section">
        <div className="overlay"></div>
        <video src={currentVideo===1?video1:video2}  onEnded={handleVideoEnd} autoPlay  muted id="bg-video"/>
    </div>
  )
}

export default Hero
