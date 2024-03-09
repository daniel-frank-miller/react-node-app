import { Component } from "react";
import { Navigate } from "react-router-dom";
import './forgot.css'

class ForgotPassword extends Component{
    state={email:'',message:'',messageStatus:false}

    handleEmail=e=>{
        this.setState({email:e.target.value})
    }

    forgotBtn=async e=>{
        e.preventDefault()
        let {email}=this.state 
        const response = await fetch("https://api.homaid.in/forgot_password", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email})
        });
        const data = await response.json();
        console.log(data) 
        this.setState({message:data.display_msg,messageStatus:true})
    }

    render(){
        const {email,message,messageStatus}=this.state 
        if(message=="Password reset instructions sent to your email."){
            return <Navigate to="/reset_password"/>
        }
        return(
            <div className="forgot-password-container">
                <img src="/src/assets/forgot-password.webp" alt="forgot-password-image" className="forgot-password-image"/>
                <form onSubmit={this.forgotBtn} className="forgot-form-container">
                    <h1 className="forgot-head">Forgot Password</h1>
                    <p className="forgot-description">You can reset your password here!</p>
                    <input type="email" placeholder="Enter Email ID" value={email} onChange={this.handleEmail} className="forgot-input-email" required/>
                    {messageStatus&&<p className="error-msg">* {message}</p>}
                    <button type="submit" className="forgot-btn">Submit</button>
                </form>
            </div>
        )   
    }
}

export default ForgotPassword