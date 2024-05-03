import { Link } from "react-router-dom";
import Navbar from "/src/components/Navbar/navbar.jsx";
import { useState } from "react";
import "/src/components/CleaningServices/cs.css";
import RegularCleaningFormPopup from "../RegularCleaningFormPopup";
import WashroomCleaningPopup from "../WashroomCleaningPopup";
import DustingCleaningPopup from "../Dusting&CleaningPopup";
import Cookies from "js-cookie";
import Footer from "/src/components/Footer/footer.jsx";


const CleaningServices = () => {
  const [regularCleaning, setRegularCleaning] = useState(false);
  const [washroomCleaning,setWashroomCleaning] = useState(false);
  const [dustingCleaning, setDustingCleaning] = useState(false);
  return (
    <div className="singlePage">
      <Navbar />
      <RegularCleaningFormPopup regularCleaning = {regularCleaning} setRegularCleaning = {setRegularCleaning}/>
      <WashroomCleaningPopup washroomCleaning={washroomCleaning} setWashroomCleaning={setWashroomCleaning}/>
      <DustingCleaningPopup dustingCleaning={dustingCleaning} setDustingCleaning={setDustingCleaning}/>
      <div className="CleaningServices-Container">
        <h1 className="heading">Cleaning Services</h1>
        <div className="content">
          <div className="card">
            <img
              src="/src/assets/clean1.webp"
              alt="Regular Cleaning"
              className="img"
            />
            <div className="bottom-card">
              <h2 className="title">
                <center>Regular Cleaning</center>
              </h2>
              <p className="bottom-text">
                Keep your place spick and span with our regular cleaning
                services! We cover all the basics—sweeping for a tidy floor and
                mopping, both dry and wet, to make sure everything shines.
              </p>
              <div className="rating">
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star2">4.8 (2.1k+)</span>
              </div>
              <div className="actions-card">
                {Cookies.get("jwt_token") && 
                  <button onClick={()=>setRegularCleaning(!regularCleaning)} className="cleaning-service-btn" id="regularCleanBtn">
                    Book Now
                  </button>
                  
                }
                {!Cookies.get("jwt_token") && 
                  <Link to="/login">
                    <button className="cleaning-service-btn" id="regularCleanBtn">
                      Book Now
                    </button>
                  </Link>
                }
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="/src/assets/clean2.webp"
              alt="Washroom Cleaning"
              className="img"
            />
            <div className="bottom-card">
              <h2 className="title">
                <center>Washroom Cleaning</center>
              </h2>
              <p className="bottom-text">
                Experience the ultimate in cleanliness and hygiene with our
                top-notch washroom cleaning service. Schedule your washroom
                cleaning now and step into a space that radiates cleanliness and
                comfort!
              </p>
              <div className="rating">
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star2">4.9 (2.4k+)</span>
              </div>
              <div className="actions-card">
                {Cookies.get("jwt_token") && 
                  <button onClick={()=>setWashroomCleaning(!washroomCleaning)} className="cleaning-service-btn" id="regularCleanBtn">
                    Book Now
                  </button>
                }
                {!Cookies.get("jwt_token") && 
                  <Link to="/login">
                    <button className="cleaning-service-btn" id="regularCleanBtn">
                      Book Now
                    </button>
                  </Link>
                }
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="/src/assets/clean3.webp"
              alt="Dusting & Setting"
              className="img"
            />
            <div className="bottom-card">
              <h2 className="title">
                <center>Dusting & Setting</center>
              </h2>
              <p className="bottom-text">
                Elevate your living spaces with our expert dusting and setting
                services! Say goodbye to dust and wrinkles as our meticulous
                team restores freshness to your beautiful home.
              </p>
              <div className="rating">
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9733;</span>
              <span className="star1">&#9734;</span>
              <span className="star2">4.7 (1.2k+)</span>
              </div>
              <div className="actions-card">
                {Cookies.get("jwt_token") && 
                  <button onClick={()=>setDustingCleaning(!dustingCleaning)} className="cleaning-service-btn" id="regularCleanBtn">
                    Book Now
                  </button>
                }
                {!Cookies.get("jwt_token") && 
                  <Link to="/login">
                    <button className="cleaning-service-btn" id="regularCleanBtn">
                      Book Now
                    </button>
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CleaningServices;
