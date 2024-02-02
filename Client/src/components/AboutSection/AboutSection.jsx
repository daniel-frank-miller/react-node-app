import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import "/src/components/AboutSection/AboutSection.css";
import { GiTargetShot } from "react-icons/gi";

const AboutSection = () => {
  const customNavbar = {
    backgroundColor: "transparent",
  };
  return (
    <div className="AboutSection-Container prevent-select">
      <Navbar style={customNavbar} />
      <div className="aboutMain-Container">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">Here is little bit about us</p>
        </div>
      </div>
      <div className="TeamDetails">
        <h2 className="TeamDetails-heading">
          Welcome to Homaid, where your home is our priority.
        </h2>
        <div className="members">
          <div>
            <img
              src="/src/assets/draft-team-img.png"
              alt="name"
              className="team-img"
            />
            <p className="team-name">Name</p>
            <p className="teamMember-position">----Position----</p>
          </div>
          <div>
            <img
              src="/src/assets/draft-team-img.png"
              alt="name"
              className="team-img"
            />
            <p className="team-name">Name</p>
            <p className="teamMember-position">----Position----</p>
          </div>
          <div>
            <img
              src="/src/assets/draft-team-img.png"
              alt="name"
              className="team-img"
            />
            <p className="team-name">Name</p>
            <p className="teamMember-position">----Position----</p>
          </div>
          <div>
            <img
              src="/src/assets/draft-team-img.png"
              alt="name"
              className="team-img"
            />
            <p className="team-name">Name</p>
            <p className="teamMember-position">----Position----</p>
          </div>
        </div>
      </div>
      <div className="FAQs">
        <h1 className="faq-title">
          Here are some of the freqently asked questions
        </h1>
        <div className="questions">
          <div className="question-Container">
            <GiTargetShot size={35} className="target-icon" />
            <div>
              <h1 className="question">What services does Homaid provide?</h1>
              <p className="answer">
                Homaid offers a range of cleaning and cooking services. This
                includes regular house cleaning, deep cleaning, meal
                preparation, and personalized chef services.
              </p>
            </div>
          </div>

          <div className="question-Container">
            <GiTargetShot size={35} className="target-icon" />
            <div>
              <h1 className="question">
                How do I book a cleaning or cooking service with Homaid?
              </h1>
              <p className="answer">
                You can easily book a service through the Homaid website. Simply
                select the type of service you need, choose a date and time, and
                provide any specific instructions. Homaid will then match you
                with a qualified professional.
              </p>
            </div>
          </div>

          <div className="question-Container">
            <GiTargetShot size={35} className="target-icon" />
            <div>
              <h1 className="question">
                Are the cleaners and cooks from Homaid trained and vetted?
              </h1>
              <p className="answer">
                Yes, all professionals at Homaid undergo a thorough vetting
                process, including background checks and training. This ensures
                that you receive reliable and skilled individuals to assist with
                your cleaning and cooking needs.
              </p>
            </div>
          </div>

          <div className="question-Container">
            <GiTargetShot size={35} className="target-icon" />
            <div>
              <h1 className="question">
                Can I request a specific cleaner or cook from Homaid?
              </h1>
              <p className="answer">
                Homaid aims to provide consistency in service, and you can
                request a preferred professional based on availability. However,
                it&apos;s not guaranteed due to scheduling and other factors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutSection;
