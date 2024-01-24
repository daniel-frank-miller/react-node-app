import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import Login from "./components/Login/login.jsx";
import ContactUs from "./components/ContactUs/contact.jsx";
import CookingProfile from "./components/CookingProfile/cp.jsx";
import CleaningServices from "./components/CleaningServices/cs.jsx";
import CleaningProfile from "./components/CleaningProfile/CleaningProfile.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/cookingprofile" element={<CookingProfile />} />
          <Route
            exact
            path="/cleaningservices"
            element={<CleaningServices />}
          />
          <Route exact path="/cleaningprofile" element={<CleaningProfile />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
