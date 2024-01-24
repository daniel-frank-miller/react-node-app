import './contact.css'

const ContactUs = () => {
  return (
    <div className="section3" id="servicesSection">
      <h1 className="services-heading prevent-select">What we offer?</h1>
      <div className="cards-container">
        <div className="card-element card--7">
          <img
            src="./src/assets/cooking-card-bg.webp"
            alt="cleaning image"
            className="card-image"
          />
          <div className="content">
            <h1 className="card-heading">Cooking</h1>
            <p className="card-desc prevent-select">
              Welcome to the world of flavor, innovation, and endless
              possibilities in the kitchen.
            </p>
          </div>
          <button className="btn services-btn" id="cookingBtn">
            Book Now
          </button>
        </div>
        <div className="card-element card--7">
          <img
            src="./src/assets/cleaning-card-bg.webp"
            alt="cleaning image"
            className="card-image"
          />
          <div className="content">
            <h1 className="card-heading">Cleaning</h1>
            <p className="card-desc prevent-select">
              We believe in transforming the chore of cleaning into a delightful
              and efficient experience.
            </p>
          </div>
          <button className="btn services-btn" id="cleaningBtn">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
