import Navbar from "/src/components/Navbar/navbar.jsx";
import paymentGateway from "/src/razorpay";
import "/src/components/CookingProfile/cp.css";
import Cookies from 'js-cookie';
import {Component} from 'react'
import { Navigate } from "react-router-dom";
class CookingProfile extends Component{
  state = {
    name: '',
    location: '',
    recurring: '',
    dateTime: '',
    familyMemberCount: 0
  };
   handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    const { name, location, recurring, dateTime, familyMemberCount } = this.state;
    const cookingServicesDetails = { name, location, recurring, familyMemberCount, dateTime };
    const response = await fetch("http://178.16.139.165:3000/cooking_services", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${Cookies.get("jwt_token")}`
      },
      body: JSON.stringify(cookingServicesDetails)
    });
    const data = await response;
    console.log(data);
    this.setState({name:'',location:'',recurring: '',dateTime: '',familyMemberCount: 0})
    paymentGateway(100);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecurring=e=>{
    this.setState({recurring:e.target.value})
  }

  handleDateTime=e=>{
    this.setState({dateTime:e.target.value})
  }

  handleFamilyMemberCount=e=>{
    this.setState({familyMemberCount:e.target.value})
  }

  renderSuccessView=()=>{
    const { name, location, recurring, dateTime, familyMemberCount } = this.state;
  return(
    <>
    <Navbar />
    <div className="CleaningContainer">
      <div className="form-container">
        <h1 className="form-container-h1">Cooking Profile</h1>
        <form id="profileForm" onSubmit={this.handleSubmit} className="cooking-form-container">
          <label htmlFor="name" className="form-container-label">Name:</label>
          <input
            type="text" 
            id="name"
            name="name"
            placeholder="Enter your Full Name"
            value={name} onChange={this.handleChange}
            className="cleaning-profile-input"
            required
          />

          <label htmlFor="location" className="form-container-label">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter Present Address"
            value={location} onChange={this.handleChange}
            className="cleaning-profile-input"
            required
          />

          <label htmlFor="sp" className="form-container-label">Recurring :</label>
          <select id="sp" name="schedulingPreference" value={recurring} onChange={this.handleRecurring} className="cleaning-profile-input">
            <option value="Select">Select</option>
            <option value="Once">Once</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>

          <label htmlFor="time" className="form-container-label">Date & Time:</label>
          <input
            type="datetime-local"
            id="time"
            name="time"
            placeholder="Enter Date and Time"
            className="cleaning-profile-input"
            value={dateTime} onChange={this.handleDateTime}
          />
          <label htmlFor="family-member-count" className="form-container-label">Family Member Count:</label>
          <input
            type="number"
            id="family-member-count"
            name="family-member-count"
            placeholder="Enter No. of Members"
            className="cleaning-profile-input"
            min="1"
            value={familyMemberCount} onChange={this.handleFamilyMemberCount}
            required
          />

          <div style={{ alignSelf: "center" }}>
            <button type="submit" className="cooking-profile-btn">
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

export default CookingProfile;
