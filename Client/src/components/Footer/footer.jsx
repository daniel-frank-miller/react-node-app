import "/src/components/Footer/footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="first-section">
        <h1 className="heading-footer">Start using Homaid Today.</h1>
        <div className="email-container">
          <input
            type="email"
            name="Email"
            className="email-input-element"
            placeholder="Enter Email"
          />
          <i
            className="fa-solid fa-paper-plane"
            aria-hidden="true"
          ></i>
        </div>
        <div className="inner-section">
          <div className="head-img-section">
            <h1 className="heading-footer">
              <span className="homaid-heading-span">H</span>omaid
            </h1>
            <img src="/src/assets/logo_nobg.webp" alt="Logo" className="foot-image" />
          </div>
          <p className="homaid-desc">
            Let us be your trusted partner in creating solutions that resonate
            with your vision.
          </p>
        </div>
      </div>
      <div className="second-section">
        <div className="second-inner-section">
          <h1 className="social-text-footer">SOCIAL</h1>
          <ul className="social-container">
            <div className="social-handles">
              <a
                href="http://linkedin.com/in/sadha-daryna-606b73245"
                className="social-media"
              >
                <li className="list-item">LinkedIn</li>
              </a>
              <a href="http://linkedin.com/in/sadha-daryna-606b73245">
                <i
                  className="fa-brands fa-linkedin-in"
                ></i>
              </a>
            </div>
            <div className="social-handles">
              <a
                href="https://twitter.com/Homaid471011"
                className="social-media"
              >
                <li className="list-item">Twitter</li>
              </a>
              <a href="https://twitter.com/Homaid471011">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="social-handles">
              <a
                href="https://www.instagram.com/homaid_service/"
                className="social-media"
              >
                <li className="list-item">Instagram</li>
              </a>
              <a href="https://www.instagram.com/homaid_service/">
                <i
                  className="fa-brands fa-instagram"
                ></i>
              </a>
            </div>
            <div className="social-handles">
              <a
                href="https://www.facebook.com/profile.php?id=61552265330728"
                className="social-media"
              >
                <li className="list-item">Facebook</li>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552265330728">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="third-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15223.725545863557!2d78.34613529555676!3d17.462997834991263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c92849a36b%3A0xde0dc034905512fa!2sKondapur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700829555216!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
