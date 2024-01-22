import { Component } from "react";

import Navbar from "../Navbar";
import "./index.css";

class Home extends Component {
  homeSection = () => {
    return (
      <div className="section1" id="home">
        <div className="section1leftcontent">
          <h1 className="heading prevent-select">HOMAID</h1>
          <p className="homaid-desc prevent-select">
            Revolutionising your Home
          </p>
          <p className="desc prevent-select">
            Let us be your trusted partner in creating solutions that resonate
            with your vision.
          </p>
          <button className="btn section1-btn" id="aboutScroll">
            Know More
          </button>
        </div>
        <div className="section1rightcontent">
          <img
            src="https://res.cloudinary.com/dwsbjx12w/image/upload/v1705917846/bg-side-removebg-preview_wg4tg3.webp"
            alt=""
            className="mainLogo"
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <>
        <Navbar />
        {this.homeSection()}
      </>
    );
  }
}

export default Home;
