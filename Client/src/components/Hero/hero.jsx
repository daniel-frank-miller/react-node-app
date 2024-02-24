import videoBg from '../../assets/videoBg.webm'
import {Link} from 'react-router-dom'

import './hero.css'

const Hero = () => {
  return (
    <div className='main section1 prevent-select' id="home">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="contents">
            <div className='content-container'>
              <h1 className="section1-heading">HOMAID</h1>
              <p className="section1-title">Revolutionising your Home</p>
              <p className="section1-subtitle">
                  Let us be your trusted partner in creating solutions that resonate
                  with your vision.
              </p>
              <Link to="/about" className="section1-button-link">
                  <button className="section1-button">Know More</button>
              </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero