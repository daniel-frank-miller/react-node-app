import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Services from "./components/Services";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
