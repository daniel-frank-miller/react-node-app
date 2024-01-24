import Navbar from "../Navbar/Navbar";
import About from "../About/about";
import Services from "../Services/services";
import Testimonals from "../Testimonals/testimonals";
import Rating from "../Rating/rating";
import Footer from "../Footer/footer";
import "./home.css";

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
