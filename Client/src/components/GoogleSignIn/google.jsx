import React, { Component } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

class GoogleSignIn extends Component {
  state = { isLoggedIn: false };

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken) {
      // If JWT token exists, user is logged in
      this.setState({ isLoggedIn: true });
    }
  }

  handleGoogleLoginSuccess = async (credentialResponse) => {
    const decodedResponse = jwtDecode(credentialResponse.credential);
    // Update state to reflect user logged in
    this.setState({ isLoggedIn: true });

    // Post user details to backend
    try {
      const response = await fetch('https://api.homaid.in/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: decodedResponse.email,
          texted_email: decodedResponse.email_verified.toString(),
          name: decodedResponse.name,
        }),
      });

      if (response.ok) {
        console.log('User details posted successfully');
        const data=await response.json()
        Cookies.set('jwt_token', data.jwtToken, { expires: 30 });
      } else {
        throw new Error('Failed to post user details');
      }
    } catch (error) {
      console.error('Error posting user details:', error);
    }
  };

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      // If user is logged in, navigate to home page
      return <Navigate to="/" />;
    }

    return (
      <GoogleLogin
        onSuccess={this.handleGoogleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    );
  }
}

export default GoogleSignIn;
