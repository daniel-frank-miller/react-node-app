import "/src/components/Login/login.css";
import { MdOutlineMailLock } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {Component} from 'react';
import { Navigate } from "react-router-dom";

class Login extends Component{
  state={email:'',password:'',loginSuccessStatus:false,messageStatus:false,message:''}

  onSubmitSuccess=(jwt_token)=>{
    Cookies.set("jwt_token",jwt_token,{expires:30})
  }

  onSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted");
    const {email,password}=this.state 
    const response = await fetch("http://178.16.139.165:3000/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
      });
      const data = await response.json();
      console.log(data);
      if(response.ok){
        this.onSubmitSuccess(data.jwtToken)
      }
      this.setState({email:'',password:'',loginSuccessStatus:true,message:data.display_msg,messageStatus:true})
  };

  showPassword = () => {
    const password = document.getElementById("password");
    const showPassword = document.getElementById("showPassword");
    if (!showPassword.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }  
  }

  handleEmail=e=>{
    this.setState({email:e.target.value})
  }

  handlePassword=e=>{
    this.setState({password:e.target.value})
  }

  render(){
    const {email,password,messageStatus,message}=this.state 
    if(Cookies.get("jwt_token")){
      return <Navigate to="/"/>
    }
    return (
      <div className="LoginContainer prevent-select" id="LoginContainer">
        <div className="loginContainer-leftContent">
          <h1 className="loginContainer-heading">Welcome to Homaid</h1>
          <p className="loginContainer-subtitle">
            Cleanliness meets convenience and flavors come to life! Let us
            transform your space into a heaven of freshness and deliver delectable
            delights right to your door. Experience the magic of Homaid Where Home
            Feels Heavenly.
          </p>
        </div>
        <div className="loginContainer-rightContent">
          <h2 className="login-title">LOGIN</h2>
          <form className="loginform-container" onSubmit={this.onSubmit}>
            <div className="input-field">
              <MdOutlineMailLock />
              <input type="email" placeholder="Email" className="login-input" onChange={this.handleEmail} value={email}/>
            </div>
            <div className="input-field">
              <MdLock />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="login-input"
                onChange={this.handlePassword}
                value={password}
              />
            </div>
            <div className="alternatives">
              <div className="show-me">
                <input
                  type="checkbox"
                  className="showPassword"
                  id="showPassword"
                />
                <label
                  htmlFor="showPassword"
                  className="showLabel"
                  onClick={this.showPassword}
                >
                  Show Password
                </label>
              </div>
              <div className="forgot-password">
                <Link to="/forgot_password">Forgot Password?</Link>
              </div>
            </div>
            {messageStatus&&<p>{message}</p>}
            <button type="submit" className="login-btn">
              Login
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
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    );
  } 
}
export default Login;
