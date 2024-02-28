import { useState } from 'react'
import video1 from '../../assets/cooking-vid.webm'
import video2 from '../../assets/cleaning-vid.webm'

import './hero.css'

const Hero = () => {
  
  
    const [currentVideo, setCurrentVideo] = useState(1);
  
    const handleVideoEnd = () => {
      // Switch between video 1 and video 2
      setCurrentVideo(currentVideo === 1 ? 2 : 1);
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
    </div>
  )
}

export default Hero