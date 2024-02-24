import { Component } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import OtpInput from 'react18-input-otp';
import './otp.css'

class OTPVerification extends Component {
  state = {
    otp: '',
    message: ''
  };

  handleChangeOtp = (otp) => {
    this.setState({ otp });
  };

  handleVerify = async (event) => {
    event.preventDefault();
    const { otp } = this.state;
    const email=Cookies.get("auth-email");
      const response = await fetch('http://localhost:3000/verify_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp })
      });
      const data = await response.json();
      if (response.ok) {
        this.setState({ message: data.message });
      } else {
        this.setState({ message: data.error });
      }
    
  };

  render() {
    const {  otp, message } = this.state;
    console.log(message)
    if(message=="OTP verified successfully."){
        Cookies.remove("auth-email")
        return <Navigate to="/login"/>
    }
    return (
      <div>
        <form onSubmit={this.handleVerify} className='verify-container'>
          <h2>OTP Authentication</h2>
          <p>if not received the OTP please check your <mark>SPAM</mark></p>
          <label>
            Enter OTP:
          </label>
          <OtpInput value={otp} onChange={this.handleChangeOtp} numInputs={6} separator={<span>--</span>} inputStyle={{width:"28px",height:"30px",border:"1px solid black",borderRadius:"2px"}} />
          <button type="submit" className='verify-container-button'>Verify OTP</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  }
}

export default OTPVerification;
