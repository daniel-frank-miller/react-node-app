import { Component } from 'react';
import './admin.css';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    try {
      const response = await fetch('http://localhost:3000/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      // Redirect or perform actions upon successful login
      console.log('Logged in successfully');
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { username, password, error } = this.state;

    return (
      <div className="admin-login-container">
        <h2>Homaid Admin Page</h2>
        <form onSubmit={this.handleFormSubmit} className="login-form">
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    );
  }
}

export default AdminLogin;
