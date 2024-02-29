import "/src/components/Signup/signup.css";
import { MdOutlineMailLock } from "react-icons/md";
import { MdLock, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import OtpInput from 'react18-input-otp';
import Navbar from '../Navbar/navbar'


class Register extends Component {
  state={name:'',email:'',password:'',confirmPassword:'',message:'',phone:'',messageStatus:false, showModal: false,otp: '',otpMessage: ''}

  handleName=e=>{
    this.setState({name:e.target.value})
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
    const {email} =this.state 
    const response=await fetch("http://178.16.139.165:3000/register",{
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
    this.setState({messageStatus:true,message:data.display_msg})
  };

  handleVerify = async (event) => {
    event.preventDefault();
    const { email, otp, name, phone, password} = this.state;
    console.log(email);
      const response = await fetch('http://178.16.139.165:3000/verify_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp, name, phone, password })
      });
      const data = await response.json();
      if (response.ok) {
        this.setState({ otpMessage: data.message,showModal:false, otp:'' });
      } else {
        this.setState({ otpMessage: data.error });
      }
    
  };

  render(){
    const {name,email,password,confirmPassword,messageStatus,phone,message,showModal,otpMessage,otp}=this.state 
    if(otpMessage=="Registration successful."){
      return <Navigate to="/login"/>
    }
  return (
    <>
    <Navbar/>
    <div className="RegisterContainer prevent-select" id="RegisterContainer">
      <div className="RegisterContainer-leftContent">
        <h1 className="RegisterContainer-heading">Welcome to Homaid</h1>
        <p className="RegisterContainer-subtitle">
          Cleanliness meets convenience and flavors come to life! Let us
          transform your space into a heaven of freshness and deliver delectable
          delights right to your door. Experience the magic of Homaid Where Home
          Feels Heavenly.
        </p>
      </div>
      <div className="RegisterContainer-rightContent">
        <h2 className="register-title">Create an Account</h2>
        <form className="registerform-container" onSubmit={this.onSubmit}>
          <div className="input-field">
            <MdOutlineDriveFileRenameOutline />
            <input type="text" placeholder="Name" className="register-input" value={name} onChange={this.handleName} required/>
          </div>
          <div className="input-field">
            <MdOutlineMailLock />
            <input type="email" placeholder="Email" className="register-input" value={email} onChange={this.handleEmail} required/>
          </div>
          <div className="input-field">
            <FaPhoneAlt/>
            <input
              type="number"
              id="subject"
              placeholder="Enter your phone number"
              className="user-input"
              min="1000000000"
              max="9999999999"
              value={phone}
              onChange={this.handlePhone}
              required
            />
          </div>
          <div className="input-field">
            <MdLock />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="register-input"
              value={password}
              onChange={this.handlePassword}
              required
            />
          </div>

          <div className="input-field">
            <MdLock />
            <input
              type="password"
              placeholder="Confirm Password"
              className="register-input"
              value={confirmPassword}
              onChange={this.handleConfirmPassword}
              required
            />
          </div>
          {messageStatus&&<p>{message}</p>}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <p>------- or -------</p>
        <div className="social-login">
          <button className="social-icons">
            <FcGoogle />
          </button>
          <button className="social-icons">
            <FaFacebook />
          </button>
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

