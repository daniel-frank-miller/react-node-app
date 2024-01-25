import Navbar from "../Navbar/Navbar";
import "./cp.css";

const CookingProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="singlePage">
      <Navbar />
      <div className="CleaningContainer">
        <div className="img-container">
          <img
            src="/src/assets/cute_girl.webp"
            alt="Cooking Profile"
            className="image"
          />
        </div>
        <div className="form-container">
          <h1>Cooking Profile</h1>
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

            <label htmlFor="family-member-count">Family Member Count:</label>
            <input
              type="number"
              id="family-member-count"
              name="family-member-count"
              placeholder="Enter No. of Members"
              required
            />

            <div style={{ alignSelf: "center" }}>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CookingProfile;
