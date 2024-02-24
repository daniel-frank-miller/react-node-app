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
        <div style={{width: "100%", textAlign: "center", paddingTop: "20px", paddingBottom: "20px"}}>
        <div style={{width: "90%", paddingLeft: "5%"}}>
          <h2 className="homaidHeadingAbout">Welcome to HOMAID</h2>
          <p className="homaidParaAbout">At HOMAID, we are committed to enhancing the quality of your life by providing exceptional home services. 
          Our journey began with a simple yet profound idea to make your home a haven of comfort and convenience. HOMAID offers a range of services tailored to meet your unique needs. 
          From skilled cooks who can whip up culinary delights to reliable maids dedicated to maintaining a pristine living space, we are your trusted partners in home management.
          </p><p className="homaidParaAbout">
            Our team of professionals is driven by a passion for service excellence. We understand that your home is more than just a place; it's a reflection of your
             lifestyle and personality. That's why we go the extra mile to ensure that our services not only meet but exceed your expectations. What sets HOMAID apart 
             is our unwavering commitment to customer satisfaction. We take pride in building lasting relationships with our clients, earning their trust through 
             reliability, integrity, and a relentless pursuit of perfection. Whether you are a busy professional in need of a helping hand or a family seeking support in 
             managing your household, HOMAID is here to make your life easier. Explore our services, and let us take care of the details so you can focus on what matters most enjoying a comfortable and harmonious home.
          </p><p className="homaidParaAbout">
            Thank you for choosing HOMAID. We look forward to serving you and becoming an integral part of your home story.
          </p>
        </div>
        </div>
        <div className="members">
          <div>
            <img
              src="/src/assets/draft-team-img.webp"
              alt="name1"
              className="team-img"
            />
            <p className="team-name">Name</p>
            <p className="teamMember-position">----Position----</p>
          </div>
          <div>
            <img
              src="/src/assets/draft-team-img.webp"
              alt="name2"
              className="team-img"
            />
            <p className="team-name">Name</p>
            <p className="teamMember-position">----Position----</p>
          </div>
          <div>
            <img
              src="/src/assets/draft-team-img.webp"
              alt="name3"
              className="team-img"
            />
            <p className="team-name">Name</p>
            <p className="teamMember-position">----Position----</p>
          </div>
          <div>
            <img
              src="/src/assets/draft-team-img.webp"
              alt="name4"
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
