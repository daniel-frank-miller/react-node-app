import "/src/components/Signup/signup.css";
import { MdOutlineMailLock } from "react-icons/md";
import { MdLock, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    // complete the logic for db connection
  };

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
        <form className="registerform-container" onSubmit={onSubmit}>
          <div className="input-field">
            <MdOutlineDriveFileRenameOutline />
            <input type="text" placeholder="Name" className="register-input" />
          </div>
          <div className="input-field">
            <MdOutlineMailLock />
            <input type="text" placeholder="Email" className="register-input" />
          </div>
          <div className="input-field">
            <MdLock />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="register-input"
            />
          </div>

          <div className="input-field">
            <MdLock />
            <input
              type="password"
              placeholder="Confirm Password"
              className="register-input"
            />
          </div>
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
};

export default Register;
