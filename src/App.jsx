import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import Login from "./components/Login/login.jsx";
import ContactUs from "./components/ContactUs/contact.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
