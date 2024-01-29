import { Link } from "react-router-dom";
import Navbar from "/src/components/Navbar/navbar.jsx";
import About from "/src/components/About/about.jsx";
import Services from "/src/components/Services/services.jsx";
import Testimonals from "/src/components/Testimonals/testimonals.jsx";
import Rating from "/src/components/Rating/rating.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import "/src/components/Home/home.css";

const Home = () => {
  const SectionOne = () => {
    return (
      <div className="section1 prevent-select" id="home">
        <div className="section1-leftcontent">
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
        <div className="section1-rightcontent">
          <img
            src="/src/assets/bg-side-removebg-preview.webp"
            alt="Homaid Services"
            className="section1-mainLogo"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="mainContainer">
      <Navbar />
      {SectionOne()}
      <About />
      <Services />
      <Testimonals />
      <Rating />
      <Footer />
    </div>
  );
};

export default Home;
