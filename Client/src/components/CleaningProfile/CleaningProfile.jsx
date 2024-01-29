import Navbar from "/src/components/Navbar/navbar.jsx";

import "/src/components/CleaningProfile/CleaningProfile.css";

const CleaningProfile = () => {

  const handlePayment = async () => {
    const data = {
      name: 'Waleed',
      amount: 100,
      number: '7498608775',
      MUID: 'MUID' + Date.now(),
      transactionId: 'T' + Date.now(),
    };

    try {
      const response = await axios.post('http://localhost:3000/api/payment/phonepe', { ...data });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    handlePayment();
  };

  return (
    <>
      <Navbar />
      <div className="cleaningProfile-container">
        <div className="img-container">
          <img src="./src/assets/cleaningpic.webp" alt="Cleaning Profile" className="img-container-cleaning" />
        </div>
        <div className="form-container">
          <h1 className="form-container-h1">Cleaning Profile</h1>
          <form id="profileForm" onSubmit={handleSubmit}>
            <label className="form-container-label" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Full Name"
              required
            />

            <label className="form-container-label" htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter Present Address"
              required
            />

            <label className="form-container-label" htmlFor="sp">Recurring :</label>
            <select id="sp" name="schedulingPreference">
              <option value="Select">Select</option>
              <option value="Once">Once</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>

            <label className="form-container-label" htmlFor="time">Date & Time:</label>
            <input
              type="datetime-local"
              id="time"
              name="time"
              placeholder="Enter Date and Time"
            />

            <label className="form-container-label" htmlFor="house-type">House Type:</label>
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
