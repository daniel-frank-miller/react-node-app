import "./services.css";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="section3  prevent-select" id="servicesSection">
        <h1 className="section3-heading">What we offer?</h1>

        <div className="section3-container">
          <div className="custom-card">
            <div className="img-box">
              <img src="/src/assets/cooking-card-bg.webp" />
            </div>
            <div className="custom-content">
              <h2 className="section3-title">Cooking</h2>
              <p className="section3-subtitle">
                Welcome to the world of flavour, innovation and endless
                possibilties in kitchen.
              </p>
              <Link to="/cookingprofile">
                <button className="services-btn" id="cleaningBtn">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className="custom-card">
            <div className="img-box">
              <img src="/src/assets/cleaning-card-bg.webp" />
            </div>
            <div className="custom-content">
              <h2 className="section3-title">Cleaning</h2>
              <p className="section3-subtitle">
                We believe in transforming the chore of cleaning into a
                delightful and efficient experience.
              </p>
              <Link to="/cleaningservices">
                <button className="services-btn" id="cleaningBtn">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section4" id="blogsSection">
        <div className="section4left">
          <h1 className="section4-heading">Cleaning Blogs</h1>
          <p className="section4-subtitle">
            At HOMAID, we bring together the best of both worlds impeccable
            cleaning services tailored to your space and unique cooking
            experiences crafted to your taste. Experience the joy of a spotless
            home and gourmet meals, all seamlessly delivered to elevate your
            lifestyle.
          </p>
        </div>
        <div className="section4right">
          <img
            src="/src/assets/cleaning-blog-3.webp"
            alt="Images"
            className="section4-img1"
          />
          <img
            src="/src/assets/cleaning-blog-2.webp"
            alt="Images"
            className="section4-img2"
          />
          <img
            src="/src/assets/cleaning-blog-1.webp"
            alt="Images"
            className="section4-img3"
          />
        </div>
      </div>
      <hr />
      <div className="section-cleaning">
        <div className="sectioncleaningright">
          <img
            src="/src/assets/cooking-blog-3.webp"
            alt="Images"
            className="rightsection4-img1"
          />
          <img
            src="/src/assets/cooking-blog-2.webp"
            alt="Images"
            className="rightsection4-img2"
          />
          <img
            src="/src/assets/cooking-blog-1.webp"
            alt="Images"
            className="rightsection4-img3"
          />
        </div>
        <div className="sectioncleaningleft">
          <h1 className="section4-cleaning-heading">Cooking Blogs</h1>
          <p className="section4-cleaning-subtitle">
            At HOMAID, we bring together the best of both worlds impeccable
            cleaning services tailored to your space and unique cooking
            experiences crafted to your taste. Experience the joy of a spotless
            home and gourmet meals, all seamlessly delivered to elevate your
            lifestyle.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
