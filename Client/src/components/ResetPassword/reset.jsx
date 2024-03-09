import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './reset.css'

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      token: '',
      newPassword: '',
      message: '',
      messageStatus:false
    };
  }

  componentDidMount() {
    // Extract email and token from URL query parameter
    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    if (email && token) {
      this.setState({ email, token });
    }
    
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, token, newPassword } = this.state;
      const response = await fetch('https://api.homaid.in/reset_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, token, newPassword })
      });
      const data = await response.json();
      console.log(data)
      this.setState({ message: data.display_msg, messageStatus:true }); 
  }

  renderInitialView=()=>(
      <div className='initial-container'>
        <div className='initial-container-1'>
          <img src="/src/assets/reset-password-inmail-msg.webp" alt="reset-in-mail" className='reset-in-mail-image'/>
        </div>
        <div className='initial-container-2'>
          <h1 className='reset-initial-info-description'>Please, check your mail to reset your password. If not, please check your <mark>spam folder.</mark></h1>
        </div>
      </div>
  )

  renderSuccessView=()=>{
    const { newPassword, message,messageStatus } = this.state;
    return (
      <div className='change-password-container'>
         <img src="src/assets/reset-password-mailed.webp" alt="change-password" className='change-password-image'/>
        <form onSubmit={this.handleSubmit} className='change-password-form-container'>
            <h1 className='change-password-heading'>Reset Password</h1>
            <p className='change-password-description'>Enter your new Password!</p>
            <label htmlFor='new-password' className='change-password-input-label'>New Password</label>
            <input type="password" name="newPassword" id="new-password" value={newPassword} onChange={this.handleChange} className='change-password-input' placeholder='Enter your new Password' required /> 
          <button type="submit" className='change-password-btn'>Submit</button>
        </form>
        {messageStatus&&<p>{message}</p>}
      </div>
    );
  }

  render() {
    const {token,message} =this.state
    if (message=="Password updated successfully."){
      return <Navigate to="/login"/>
    }
    
    if(token===''){
      return this.renderInitialView()
    }
    return this.renderSuccessView()
  }
}

export default ResetPassword;
