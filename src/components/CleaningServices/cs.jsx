import "./cs.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const CleaningServices = () => {
  return (
    <>
      <Navbar />
      <div className="CleaningServices-Container">
        <h1 className="heading">Cleaning Services</h1>
        <div className="content">
          <div className="card">
            <div className="top-card">
              <img
                src="/src/assets/clean2.webp"
                alt="Regular Cleaning"
                className="img"
              />
              <h2 className="title">
                <center>Regular Cleaning</center>
              </h2>
              <p className="bottom-text">
                Keep your place spick and span with our regular cleaning
                services! We cover all the basics—sweeping for a tidy floor and
                mopping, both dry and wet, to make sure everything shines.
              </p>
            </div>
            <div className="bottom-card">
              <div className="actions-card">
                <Link to="/cleaningprofile">
                  <button className="btn" id="regularCleanBtn">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="top-card">
              <img
                src="./src/assets/clean1.webp"
                alt="Washroom Cleaning"
                className="img"
              />
              <h2 className="title">
                <center>Washroom Cleaning</center>
              </h2>
              <p className="bottom-text">
                Experience the ultimate in cleanliness and hygiene with our
                top-notch washroom cleaning service. Schedule your washroom
                cleaning now and step into a space that radiates cleanliness and
                comfort!
              </p>
            </div>
            <div className="bottom-card">
              <div className="actions-card">
                <Link to="/cleaningprofile">
                  <button className="btn" id="washroomCleanBtn">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="top-card">
              <img
                src="./src/assets/clean3.webp"
                alt="Dusting & Setting"
                className="img"
              />
              <h2 className="title">
                <center>Dusting & Setting</center>
              </h2>
              <p className="bottom-text">
                Elevate your living spaces with our expert dusting and setting
                services! Say goodbye to dust and wrinkles as our meticulous
                team restores freshness to your beautiful home.
              </p>
            </div>
            <div className="bottom-card">
              <div className="actions-card">
                <Link to="/cleaningprofile">
                  <button className="btn" id="dustingCleanBtn">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CleaningServices;
