/* eslint-disable no-unused-vars */
import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "/src/components/Home/home.jsx";
import Login from "/src/components/Login/login.jsx";
import ContactUs from "/src/components/ContactUs/contact.jsx";
import CookingProfile from "/src/components/CookingProfile/cp.jsx";
import CleaningServices from "/src/components/CleaningServices/cs.jsx";
import CleaningProfile from "/src/components/CleaningProfile/CleaningProfile.jsx";
import ServicesSection from "/src/components/ServicesSection/ServicesSection.jsx";
import AboutSection from "/src/components/AboutSection/AboutSection.jsx";
import Signup from '/src/components/Signup/signup.jsx';
import Reviews from '/src/components/Reviews/reviews';
import Gallery from "./components/Gallery/gallery.jsx";
import ForgotPassword from "./components/ForgotPassword/forgot.jsx";
import ResetPassword from "./components/ResetPassword/reset.jsx";
import AdminLogin from "./components/AdminLogin/admin.jsx";
import PaymentPage from "./components/PaymentPage/index.jsx"
import PaymentStatus from "./components/PaymentStatus"
import UpdatedReviews from "./components/UpdatedReviews/index.jsx";
import TermsAndConditions from "./components/Termsandcondition/termsandcondition.jsx";
import RefundPolicy from "./components/RefundPolicy/RefundPolicy.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/privacyPolicy.jsx";

//import Bookings from "./components/Bookings/index.jsx";
class App extends Component {
  render() {
    return (
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutSection />} />
          <Route exact path="/services" element={<ServicesSection />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/cookingprofile" element={<CookingProfile />} />
          <Route exact path="/cleaningservices" element={<CleaningServices />} />
          <Route exact path="/cleaningprofile" element={<CleaningProfile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgot_password" element={<ForgotPassword/>}/>
          <Route exact path="/reset_password" element={<ResetPassword/>}/>
          <Route exact path="/admin_login" element={<AdminLogin/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/reviews" element={<UpdatedReviews/>}/>
          <Route exact path = "/payments" element = {<PaymentPage/>}/>
          <Route exact path = "api/status/:trid" element = {<PaymentStatus/>}/>
          <Route exact path="/termsandconditions" element={<TermsAndConditions/>}/>
          <Route exact path="/refundpolicy" element={<RefundPolicy/>}/>
          <Route exact path="/privacypolicy" element={<PrivacyPolicy/>}/>
        </Routes>
      </Router>
      
    );
  }
}

export default App;
