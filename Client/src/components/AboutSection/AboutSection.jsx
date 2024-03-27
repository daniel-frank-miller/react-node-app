import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import "/src/components/AboutSection/AboutSection.css";
import AboutSlider from "/src/components/AboutSlider/slider.jsx"
const AboutSection = () => {
  const customNavbar = {
    backgroundColor: "transparent",
  };
  return (
    <div className="AboutSection-Container prevent-select">
      <Navbar style={customNavbar} />
      <img src="/src/assets/about-us-banner.webp" alt="about-banner" className="banner-image"/>
      <div className="TeamDetails">
        <h2 className="TeamDetails-heading">
          Welcome to HOMAID
        </h2>
        <div style={{width: "100%", textAlign: "center", paddingTop: "20px", paddingBottom: "20px"}}>
        <div style={{width: "90%", paddingLeft: "5%"}}>
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
        
      </div>
      {/* <img src="/src/assets/about-us-homaid-cleaning.webp" alt="about-us" className="about-us-image"/> */}
      <AboutSlider/>
      <div className="FAQs">
        <h1 className="faq-title">
          Here are some of the freqently asked questions
        </h1>
        <div className="questions">
          <details className="details-container">
            <summary className="question">
              What services does Homaid provide?
            </summary>
            <p className="answer">
              Homaid offers a range of cleaning and cooking services. This
              includes regular house cleaning, deep cleaning, meal
              preparation, and personalized chef services.
            </p>
          </details>
          <hr className="horizontal-line"/>
          <details className="details-container">
            <summary  className="question"> 
              How do I book a cleaning or cooking service with Homaid?
            </summary>
            <p className="answer">
              You can easily book a service through the Homaid website. Simply
              select the type of service you need, choose a date and time, and
              provide any specific instructions. Homaid will then match you
              with a qualified professional.
            </p>
          </details>
          <hr className="horizontal-line"/>
          <details className="details-container">
            <summary className="question">
              Are the cleaners and cooks from Homaid trained and vetted?
            </summary>
            <p className="answer">
              Yes, all professionals at Homaid undergo a thorough vetting
              process, including background checks and training. This ensures
              that you receive reliable and skilled individuals to assist with
              your cleaning and cooking needs.
            </p>
          </details>
          <hr className="horizontal-line"/>
          <details className="details-container">
            <summary className="question">
              Can I request a specific cleaner or cook from Homaid?
            </summary>
            <p className="answer">
              Homaid aims to provide consistency in service, and you can
              request a preferred professional based on availability. However,
              it&apos;s not guaranteed due to scheduling and other factors.
            </p>
          </details> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutSection;
