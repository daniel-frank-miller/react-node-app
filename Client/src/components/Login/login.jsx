import "/src/components/Login/login.css";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {Component} from 'react';
import { Navigate } from "react-router-dom";
import Navbar from '../Navbar/navbar'
import GoogleSignIn from '../GoogleSignIn/google.jsx'
// import FacebookSignIn from '../FacebookSignIn/facebook.jsx'
class Login extends Component{
  state={email:'',password:'',loginSuccessStatus:false,messageStatus:false,message:'',loading:false,emailError: '',
  passwordError: '',}

  validateEmail = () => {
    const { email } = this.state;
    if (!email) {
      this.setState({ emailError: '*Required' });
    } else {
      this.setState({ emailError: '' });
    }
  };

  validatePassword = () => {
    const { password } = this.state;
    if (!password) {
      this.setState({ passwordError: '*Required' });
    } else {
      this.setState({ passwordError: '' });
    }
  };

  handleEmailBlur = () => {
    this.validateEmail();
  };

  handlePasswordBlur = () => {
    this.validatePassword();
  };


  onSubmitSuccess=(jwt_token)=>{
    Cookies.set("jwt_token",jwt_token,{expires:30})
  }

  onSubmit = async(e) => {
    e.preventDefault();
    this.setState({loading:true})
    this.validateEmail()
    this.validatePassword()
    const {email,password}=this.state 
    const response = await fetch("https://api.homaid.in/login", {
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
      this.setState({email:'',password:'',loginSuccessStatus:true,message:data.display_msg,messageStatus:true,loading:false})
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
    const {email,password,messageStatus,message,loading,emailError,passwordError}=this.state 
    if(Cookies.get("jwt_token")){
      return <Navigate to="/"/>
    }
    return (
      <>
      <Navbar/>
      <div className="LoginContainer prevent-select" id="LoginContainer">
        <h2 className="login-tagline">Experience the joy of a clean, fresh home and tasty meals delivered to your door with Homaid! Let us make your space feel like heaven with our cleanliness and convenience.</h2>
        <div className="loginContainer-rightContent">
          <h2 className="login-title">LOGIN</h2>
          <form className="loginform-container" onSubmit={this.onSubmit}>
            <div className="login-input-field">
              <label htmlFor="email" className="login-label">Email ID</label>
              <input type="email" placeholder="Enter your Email" id="email" className="login-input" onChange={this.handleEmail} onBlur={this.handleEmailBlur} value={email} required/>
              {emailError && <span className="error-text">{emailError}</span>} 
            </div>
            <div className="login-input-field">
              <label htmlFor="password" className="login-label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="login-input"
                onChange={this.handlePassword}
                onBlur={this.handlePasswordBlur}
                value={password}
                required
              />
              {passwordError && <span className="error-text">{passwordError}</span>}
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
            {
              loading?(
                  <button type="submit" className="login-btn">
                    <div className="loader"></div>
                  </button>
              ):
              (
                <button type="submit" className="login-btn">
                Login
              </button>
              )
            }
           
          </form>
          <p>------- or -------</p>
          <div className="social-login">
            <button className="social-icons">
              <GoogleSignIn/>
            </button>
            {/* <button className="social-icons">
              <FacebookSignIn/>
            </button> */}
          </div>
          <p className="login-signup">
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      </>
    );
  } 
}
export default Login;