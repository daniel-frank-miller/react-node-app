import "/src/components/Signup/signup.css";
// import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import OtpInput from 'react18-input-otp';
import Navbar from '../Navbar/navbar'
import GoogleSignIn from '../GoogleSignIn/google.jsx'

class Register extends Component {
  state={firstName:'',lastName:'',email:'',password:'',confirmPassword:'',message:'',phone:'',messageStatus:false, showModal: false,otp: '',otpMessage: '',loading: false,}

  handleFirstName=e=>{
    this.setState({firstName:e.target.value})
  }

  handleLastName=e=>{
    this.setState({lastName:e.target.value})
  }

  handleEmail=e=>{
    this.setState({email:e.target.value})
  }

  handlePassword=e=>{
    this.setState({password:e.target.value})
  }

  handlePhone=e=>{
    if (String(e.target.value).length <= 10) {
      this.setState({ phone: e.target.value });
    }
  }

  handleConfirmPassword=e=>{
    this.setState({confirmPassword:e.target.value})
  }

  handleChangeOtp = (otp) => {
    this.setState({ otp });
  };

  handleModalClose=()=>{
    this.setState({showModal:false});
  }


  onSubmit = async(e) => {
    e.preventDefault();
    const { email } = this.state;
    this.setState({ loading: true });
    const response=await fetch("https://api.homaid.in/register",{
      method:'POST',
      headers:{
        'Content-type':"application/json"
      },
      body:JSON.stringify({email})
    })
    if(response.ok){
      this.setState({showModal:true})
    }
    const data=await response.json()
    console.log(data)
    this.setState({messageStatus:true,message:data.message,loading:false})
  };

  handleVerify = async (event) => {
    event.preventDefault();
    const { email, otp, firstName, phone, password} = this.state;
    console.log(email);
      const response = await fetch('https://api.homaid.in/verify_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp, firstName, phone, password })
      });
      const data = await response.json();
      if (response.ok) {
        this.setState({ otpMessage: data.message,showModal:false, otp:'' });
      } else {
        this.setState({ otpMessage: data.error });
      }
    
  };

  render(){
    const {firstName,lastName,email,password,confirmPassword,messageStatus,phone,message,showModal,otpMessage,otp,loading}=this.state 
    if(otpMessage=="Registration successful."){
      return <Navigate to="/login"/>
    }
  return (
    <>
    <Navbar/>
    <div className="RegisterContainer prevent-select" id="RegisterContainer">
    <h2 className="register-tagline">Experience the joy of a clean, fresh home and tasty meals delivered to your door with Homaid! Let us make your space feel like heaven with our cleanliness and convenience.</h2>
      <div className="RegisterContainer-rightContent">
        <h2 className="register-title">Create an Account</h2>
        <form className="registerform-container" onSubmit={this.onSubmit}>
          <div className="register-input-field">
           <label htmlFor="first-name" className="register-label">First Name*</label>
            <input type="text" placeholder="Enter your First Name" id="first-name" className="register-input" value={firstName} onChange={this.handleFirstName} required/>
          </div>
          <div className="register-input-field">
           <label htmlFor="last-name" className="register-label">Last Name*</label>
            <input type="text" placeholder="Enter your Last Name" id="last-name" className="register-input" value={lastName} onChange={this.handleLastName} required/>
          </div>
          <div className="register-input-field">
            <label htmlFor="email" className="register-label">Email ID*</label>
            <input type="email" placeholder="Enter your Email" id="email" className="register-input" value={email} onChange={this.handleEmail} required/>
          </div>
          <div className="register-input-field">
            <label htmlFor="subject" className="register-label">Mobile Number*</label>
            <input
              type="number"
              id="subject"
              placeholder="Enter your Mobile Number"
              className="register-input"
              min="1000000000"
              max="9999999999"
              value={phone}
              onChange={this.handlePhone}
              required
            />
          </div>
          <div className="register-input-field">
            <label htmlFor="password" className="register-label">Password*</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="register-input"
              value={password}
              onChange={this.handlePassword}
              required
            />
          </div>

          <div className="register-input-field">
            <label htmlFor="confirm-password" className="register-label">Confirm Password*</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Enter your Confirm Password"
              className="register-input"
              value={confirmPassword}
              onChange={this.handleConfirmPassword}
              required
            />
          </div>
          {messageStatus&&<p className="message-status">{message}</p>}
          {loading ? (
                <button type="submit" className="register-btn">
                    <div className="loader"></div>

              </button> 
            ) : (
              <button type="submit" className="register-btn">
                Register
              </button>
            )}
        </form>
        <p>------- or -------</p>
        <div className="social-login">
          <button className="social-icons">
            <GoogleSignIn />
          </button>
          {/* <button className="social-icons">
            <FaFacebook />
          </button> */}
        </div>
        <p className="login-signup">
          Already have an account? <Link to="/login">login</Link>
        </p>
      </div>
      {showModal && (
          <div className="modal">
            <div className="modal-content">
                <form className='verify-container' onSubmit={this.handleVerify}>
                  <h2>OTP Authentication</h2>
                  <p>if not received the OTP please check your <mark>SPAM</mark></p>
                  <label>
                    Enter OTP:
                  </label>
                  <div>
                    <OtpInput value={otp} onChange={this.handleChangeOtp} numInputs={6} separator={<span>--</span>} inputStyle={{width:"28px",height:"30px",border:"1px solid black",borderRadius:"2px",textAlign:"center"}} />
                  </div>
                  <div>
                    <button type="button" onClick={this.handleModalClose} className="close-btn">Close</button>
                    <button type="submit" className='verify-container-button'>Verify OTP</button>
                  </div>
                </form>
              {otpMessage.length!=0 && <p>{otpMessage}</p>}
            </div>
          </div>
      )}
    </div>
    </>
  );
  }
}

export default Register;

