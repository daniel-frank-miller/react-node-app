import Navbar from "/src/components/Navbar/navbar.jsx";
import paymentGateway from "/src/razorpay";
import "/src/components/CookingProfile/cp.css";
import Cookies from 'js-cookie';
import {Component} from 'react'

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
    const response = await fetch("http://localhost:3000/cooking_services", {
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

  render(){
    const { name, location, recurring, dateTime, familyMemberCount } = this.state;
  return(
    <div className="singlePage">
    <Navbar />
    <div className="CleaningContainer">
      <div className="img-container-cooking">
        <img src="/src/assets/cute_girl.webp" alt="Cooking Profile" className="image-cutegirl" />
      </div>
      <div className="form-container">
        <h1>Cooking Profile</h1>
        <form id="profileForm" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Full Name"
            value={name} onChange={this.handleChange}
            required
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter Present Address"
            value={location} onChange={this.handleChange}
            required
          />

          <label htmlFor="sp">Recurring :</label>
          <select id="sp" name="schedulingPreference" value={recurring} onChange={this.handleRecurring}>
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
            value={dateTime} onChange={this.handleDateTime}
          />

          <label htmlFor="family-member-count">Family Member Count:</label>
          <input
            type="number"
            id="family-member-count"
            name="family-member-count"
            placeholder="Enter No. of Members"
            min="1"
            value={familyMemberCount} onChange={this.handleFamilyMemberCount}
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
  )
}
 
}




export default CookingProfile;
