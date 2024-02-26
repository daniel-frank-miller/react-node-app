import videoBg from '../../assets/videoBg.webm'


import './hero.css'

const Hero = () => {
  return (
    <div className="about-section">
        <video src={videoBg} autoPlay loop muted id="bg-video"/>
    </div>
  )
}

export default Hero
