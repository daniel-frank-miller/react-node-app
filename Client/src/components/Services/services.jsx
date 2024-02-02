import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/components/Services/services.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000,
};

const Services = () => {
    const cleaningBlogSlider = () => {
      return (
        <Slider {...settings}>
          <img
            src="/src/assets/cleaning-blog-3.webp"
            alt="Images"
            className="blog-img"
          />
          <img
            src="/src/assets/cleaning-blog-2.webp"
            alt="Images"
            className="blog-img"
          />
          <img
            src="/src/assets/cleaning-blog-1.webp"
            alt="Images"
            className="blog-img"
          />
        </Slider>
      );
    };
    const cookingBlogSlider = () => {
      return (
        <Slider {...settings}>
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
        </Slider>
      );
    }
    // var element = document.getElementById("colorChangingElement");
    // setInterval(function() {
    //   element.style.backgroundColor = colors[index];
    //   index = (index + 1) % colors.length;
    // }, 1000); 
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

      <div className="blog-section prevent-select">
        <div className="blog-Container1">
          <h1 className="blog-title">Cleaning Blogs</h1>
          <p className="blog-subtitle">
            At HOMAID, we bring together the best of both worlds impeccable
            cleaning services tailored to your space and unique cooking
            experiences crafted to your taste. Experience the joy of a spotless
            home and gourmet meals, all seamlessly delivered to elevate your
            lifestyle.
          </p>
        </div>
        <div className="blog-Container2">
          <img
            src="/src/assets/cleaning-blog-3.webp"
            alt="Images"
            className="blog-img1"
          />
          <img
            src="/src/assets/cleaning-blog-2.webp"
            alt="Images"
            className="blog-img2"
          />
          <img
            src="/src/assets/cleaning-blog-1.webp"
            alt="Images"
            className="blog-img3"
          />
        </div>
        <div className="mobileview-blog-carousel">{cleaningBlogSlider()}</div>
      </div>

      <hr />

      <div className="blog-section prevent-select">
        <div className="blog-Container1 cookingblog1">
          <h1 className="blog-title">Cooking Blogs</h1>
          <p className="blog-subtitle">
            At HOMAID, we bring together the best of both worlds impeccable
            cleaning services tailored to your space and unique cooking
            experiences crafted to your taste. Experience the joy of a spotless
            home and gourmet meals, all seamlessly delivered to elevate your
            lifestyle.
          </p>
        </div>
        <div className="blog-Container2 cookingblog2">
          <img
            src="/src/assets/cooking-blog-3.webp"
            alt="Images"
            className="blog-img3"
          />
          <img
            src="/src/assets/cooking-blog-2.webp"
            alt="Images"
            className="blog-img2"
          />
          <img
            src="/src/assets/cooking-blog-1.webp"
            alt="Images"
            className="blog-img1"
          />
        </div>
        <div className="mobileview-blog-carousel">{cookingBlogSlider()}</div>
      </div>
    </>
  );
};

export default Services;
