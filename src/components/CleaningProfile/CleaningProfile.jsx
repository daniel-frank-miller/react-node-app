import "./CleaningProfile.css";
import Navbar from "../Navbar/Navbar";

const CleaningProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Navbar />
      <div className="cleaningProfile-container">
        <div className="img-container">
          <img
            src="./src/assets/cleaningpic.webp"
            alt="Cleaning Profile"
            className="img-container"
          />
        </div>
        <div className="form-container">
          <h1>Cleaning Profile</h1>
          <form id="profileForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Full Name"
              required
            />

            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter Present Address"
              required
            />

            <label htmlFor="sp">Recurring :</label>
            <select id="sp" name="schedulingPreference">
              <option value="Select">Select</option>
              <option value="Once">Once</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>

            <label htmlFor="time">Date & Time:</label>
            <input
              type="datetime-local"
              id="time"
              name="time"
              placeholder="Enter Date and Time"
            />

            <label htmlFor="house-type">House Type:</label>
            <select id="house-type" name="house-type">
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="4BHK">4BHK</option>
              <option value="VILLA">Villa</option>
            </select>

            <div id="con" style={{ width: "100%", textAlign: "center" }}>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CleaningProfile;
