import Navbar from "/src/components/Navbar/navbar.jsx";
import axios from "axios";
import "/src/components/CleaningProfile/CleaningProfile.css";
import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
class CleaningProfile extends Component{
  state={name:"",
  location:"",
  recurring:"",
  houseType:"",
  cleaningServiceType:"",
  dateTime:""}

  handlePayment = async () => {
    const data = {
      name: 'Waleed',
      amount: 100,
      number: '7498608775',
      MUID: 'MUID' + Date.now(),
      transactionId: 'T' + Date.now(),
    };
    const response = await axios.post('https://api.homaid.in/api/payment', {
      amount: data.amount,
      number:data.number,
    });


    if (response.data.redirectUrl) {
      window.location.href = response.data.redirectUrl;
    }
  };

  handleSubmit = async(e) => {
    e.preventDefault();
    const {name,location,recurring,houseType,cleaningServiceType,dateTime}=this.state 
    const cleaningServicesDetails = {name,location,recurring,houseType,cleaningServiceType,dateTime};
    const response = await fetch("https://api.homaid.in/cleaning_services", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${Cookies.get("jwt_token")}`
        },
        body: JSON.stringify(cleaningServicesDetails)
      })
      const data = await response;
      console.log(data);
      this.handlePayment();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecurring=e=>{
    this.setState({recurring:e.target.value})
  }

  handleHouseType=e=>{
    this.setState({houseType:e.target.value})
  }

  handleServiceType=e=>{
    this.setState({cleaningServiceType:e.target.value})
  }

  handleDateTime=e=>{
    this.setState({dateTime:e.target.value})
  }

  renderSuccessView=()=>{
    const {name,location,recurring,houseType,cleaningServiceType,dateTime}=this.state 
    return(
      <>
        <Navbar />
        <div className="cleaningProfile-container">
        <h1 className="form-container-h1">Cleaning Profile</h1>
          <div className="form-container">
            <form id="profileForm" onSubmit={this.handleSubmit} className="cleaning-form-container">
              <div className="register-input-field">
              <label className="form-container-label" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Full Name"
                value={name}
                onChange={this.handleChange}
                className="cleaning-profile-input"
                required
              />
              </div>
  
              <div className="register-input-field">
              <label className="form-container-label" htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter Present Address"
                value={location}
                onChange={this.handleChange}
                className="cleaning-profile-input"
                required
              />
              </div>
  
              <div className="register-input-field">
              <label className="form-container-label" htmlFor="service-type">Service Type :</label>
              <select id="service-type" name="serviceType" value={cleaningServiceType} onChange={this.handleServiceType} className="cleaning-profile-input">
                <option value="Regular Cleaning">Regular Cleaning</option>
                <option value="Washroom Cleaning">Washroom Cleaning</option>
                <option value="Dusting and Setting">Dusting & Setting</option>
              </select>
              </div>
  
              <div className="register-input-field">
              <label className="form-container-label" htmlFor="sp">Recurring :</label>
              <select id="sp" name="schedulingPreference" value={recurring} onChange={this.handleRecurring} className="cleaning-profile-input">
                <option value="Select">Select</option>
                <option value="Once">Once</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
              </div>
  
              <div className="register-input-field">
              <label className="form-container-label" htmlFor="time">Date & Time:</label>
              <input
                type="datetime-local"
                id="time"
                name="time"
                placeholder="Enter Date and Time"
                value={dateTime}
                onChange={this.handleDateTime}
                className="cleaning-profile-input"
              />
              </div>
  
              <div className="register-input-field">
              <label className="form-container-label" htmlFor="house-type">House Type:</label>
              <select id="house-type" name="house-type" value={houseType} onChange={this.handleHouseType} className="cleaning-profile-input">
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
                <option value="4BHK">4BHK</option>
                <option value="VILLA">Villa</option>
              </select>
              </div>
              <div id="con" style={{ width: "100%", textAlign: "center" }}>
                <button type="submit" className="cleaning-profile-btn">
                  Submit 
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }

  render(){
      if(Cookies.get("jwt_token")!==undefined){
        return this.renderSuccessView()
      }
      return <Navigate to="/login"/>
  }  
}

export default CleaningProfile;
