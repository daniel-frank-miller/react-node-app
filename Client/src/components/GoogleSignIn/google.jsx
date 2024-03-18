import { Component } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { Navigate } from "react-router-dom";

class GoogleSignIn extends Component {
    state = { googleData: [], email: '', email_verified: false, name: '' }

    // Function to store JWT token in a cookie
    onSubmitSuccess=(jwt_token)=>{
        Cookies.set("jwt_token",jwt_token,{expires:30})
    }

    // Function to post user details to the backend
    postUserDetails = async () => {
        const { email, email_verified, name } = this.state;
        let texted_email=email_verified.toString()
        try {
            const response = await fetch('https://api.homaid.in/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    texted_email,
                    name
                })
            });

            if (response.ok) {
                const data = await response.json();
                this.onSubmitSuccess(data.jwtToken)
                console.log('User details posted successfully');
            } else {
                throw new Error('Failed to post user details');
            }
        } catch (error) {
            console.error('Error posting user details:', error);
        }
    }

    componentDidMount() {
        const jwtToken = Cookies.get('jwt_token');
        if (jwtToken) {
            // If JWT token exists, but the user is not already on the home page,
            // then navigate to the home page.
            if (window.location.pathname !== '/') {
                window.location.href = '/'; // Replace '/home' with your home page URL
            }
        }
        if(Cookies.get("jwt_token")){
            return <Navigate to="/"/>
        }
    }
    

    render() {
        // let { email, email_verified, name } = this.state;
        // console.log(email, name, email_verified);
        // console.log(typeof(email_verified))
        // let texted_email=email_verified.toString()
        // console.log(typeof(texted_email), texted_email)
        
        return (
            <GoogleLogin
                onSuccess={credentialResponse => {
                    const decodedResponse = jwtDecode(credentialResponse.credential);
                    this.setState({
                        googleData: decodedResponse,
                        email: decodedResponse.email,
                        email_verified: decodedResponse.email_verified,
                        name: decodedResponse.name
                    }, () => {
                        // Callback to post user details after state is updated
                        this.postUserDetails();
                    });
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        );
    }
}

export default GoogleSignIn;
