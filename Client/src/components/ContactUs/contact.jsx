import { Component } from 'react';
import Navbar from "/src/components/Navbar/navbar.jsx";
import "/src/components/ContactUs/contact.css";
import Footer from "../Footer/footer.jsx"
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      phone: '',
      message:'',
      response:''
    };
  }

  onSubmit = async(e) => {
    e.preventDefault();
    const {firstName,lastName,email,phone,message}=this.state
    const response = await fetch("https://api.homaid.in/contactus", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName,lastName,email,phone,message})
      })
      const data = await response.json();
      console.log(data); 
      this.setState({response:data.display_msg, firstName:'',lastName:'', email:'', phone: '', message:''});
  };

  handlePhone = (e) => {
    if (String(e.target.value).length <= 10)
      this.setState({ phone: e.target.value });
  }

  handleFirstName=e=>{
    this.setState({firstName:e.target.value})
  }

  handleLastName=e=>{
    this.setState({lastName:e.target.value})
  }

  handleMessage=e=>{
    this.setState({message:e.target.value})
  }

  handleEmail=e=>{
    this.setState({email:e.target.value})
  }

  render() {
    const {firstName,lastName, email, phone, message,response}=this.state;
    return (
      <div className="singlePage">
        <Navbar />
        <div className="contactus-container prevent-select">
          <h1 className="contactus-title">Get in touch</h1>
          <div className="contactus-content">
            <form className="contactus-form" onSubmit={this.onSubmit}>
              <div className="contact-us-input-field">
                <label htmlFor='name' className='input-label'>First Name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="user-input"
                  value={firstName}
                  onChange={this.handleFirstName}
                  required
                />
                <hr/>
              </div>
              <div className="contact-us-input-field">
                <label htmlFor='name' className='input-label'>Last Name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="user-input"
                  value={lastName}
                  onChange={this.handleLastName}
                  required
                />
                <hr/>
              </div>
              <div className="contact-us-input-field">
                <label htmlFor='email' className='input-label'>Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="user-input"
                  value={email}
                  onChange={this.handleEmail}
                  required
                />
                <hr/>
              </div>
              <div className="contact-us-input-field">
                <label htmlFor='subject' className='input-label'>Mobile Number*</label>
                <input
                  type="number"
                  id="subject"
                  placeholder="Enter your phone number"
                  className="user-input"
                  min="1000000000"
                  max="9999999999"
                  value={phone}
                  onChange={this.handlePhone}
                  required
                />
                <hr/>
              </div>
              <div className="contact-us-input-field-message">
                <label htmlFor='message' className='input-label'>Message*</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                  className="message-user-input"
                  value={message}
                  onChange={this.handleMessage}
                  required
                ></textarea>
              </div>
              {response.length!==0&&<p className='response-msg'>{response}</p>}
              <div className='submit-btn-container'>
                <button type="submit" className="submit-form">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ContactUs;
