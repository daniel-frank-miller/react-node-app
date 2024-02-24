import "/src/components/Signup/signup.css";
import { MdOutlineMailLock } from "react-icons/md";
import { MdLock, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Cookies from "js-cookie";

class Register extends Component {
  state={name:'',email:'',password:'',confirmPassword:'',message:'',phone:'+91-',messageStatus:false}

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
    this.setState({phone:e.target.value})
  }

  handleConfirmPassword=e=>{
    this.setState({confirmPassword:e.target.value})
  }

  onSubmitSuccess=()=>{
    const {email}=this.state
    Cookies.set("auth-email",email,{expires:1})
  }

  onSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted");
    const {name,email,phone,password}=this.state 
    const response=await fetch("http://localhost:3000/register",{
      method:'POST',
      headers:{
        'Content-type':"application/json"
      },
      body:JSON.stringify({name,email,phone,password})
    })
    if(response.ok){
      this.onSubmitSuccess()
    }
    const data=await response.json()
    console.log(data)
    this.setState({name:'',email:'',password:'',confirmPassword:'',phone:'+91-',messageStatus:true,message:data.display_msg})
  };
  render(){
    const {name,email,password,confirmPassword,messageStatus,phone,message}=this.state 
    if(message=="Register successful, please login."){
      return <Navigate to="/verify-otp"/>
    }
  return (
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
            <input type="number" placeholder="Mobile No" className="register-input" value={phone} onChange={this.handlePhone} min="1000000000" max="9999999999" required/>
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
    </div>
  );
  }
}

export default Register;
