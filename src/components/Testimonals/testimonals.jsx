import "./testimonals.css";

const Testimonals = () => {
  return (
    <div className="section5 prevent-select" id="testimonialSection">
      <div className="section5-left-section">
        <div className="imagecontainer">
          <img
            src="/src/assets/testimonials.webp"
            alt="Couple Image"
            className="section5-img"
          />
        </div>
      </div>
      <div className="section5-right-section">
        <div className="subcontainer">
          <div className="feedback">
            <p className="feedback-desc">
              I have been using Homaid Services for years and I would not trust
              anyone else with my home!
            </p>
            <h5 className="feeback-user-name">- Sriya.</h5>
          </div>
          <div className="feedback">
            <p className="feedback-desc">
              The cooking services from Homaid are a game-changer! Delicious
              meals without the hassle of grocery shopping and cooking
            </p>
            <h5 className="feeback-user-name">- Suhan.</h5>
          </div>
          <div className="feedback">
            <p className="feedback-desc">
              Homaid professional maids are thorough, reliable, and friendly. I
              couldnot be happier with their service!
            </p>
            <h5 className="feeback-user-name">- Dhyan.</h5>
          </div>
          <div className="feedback">
            <p className="feedback-desc">
              Homaid Services is simply unmatched. Their cleaning prowess and
              culinary skills have made my life easier and my home happier. I am
              a loyal customer for a reason
            </p>
            <h5 className="feeback-user-name">- Ananay.</h5>
          </div>
          <div className="feedback">
            <p className="feedback-desc">
              When it comes to cooking, Homaid Services is in a league of its
              own. Their chefs have a magic touch that transforms ordinary meals
              into extraordinary experiences. I would not let anyone else take
              the reins in my kitchen.
            </p>
            <h5 className="feeback-user-name">- Nashal.</h5>
          </div>
          <div className="feedback">
            <p className="feedback-desc">
              Trust is paramount when it comes to home services, and Homaid
              excels in delivering it. Their disciplined and trained staff not
              only keep my home impeccably clean but also operate with
              transparency, creating a partnership built on reliability and
              excellence.
            </p>
            <h5 className="feeback-user-name">- Dhananad.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
