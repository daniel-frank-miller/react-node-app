import "/src/components/Login/login.css";
import { MdOutlineMailLock } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    // complete the logic for db connection
  };

  const showPassword = () => {
    const password = document.getElementById("password");
    const showPassword = document.getElementById("showPassword");
    if (!showPassword.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }  
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
        <form className="loginform-container" onSubmit={onSubmit}>
          <div className="input-field">
            <MdOutlineMailLock />
            <input type="text" placeholder="Email" className="login-input" />
          </div>
          <div className="input-field">
            <MdLock />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="login-input"
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
                onClick={showPassword}
              >
                Show Password
              </label>
            </div>
            <div className="forgot-password">
              <Link to="">Forgot Password?</Link>
            </div>
          </div>
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
};

export default Login;
