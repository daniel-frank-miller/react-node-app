import React, { useState } from "react";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import "./index.css";

export default function JoinOurTeam() {
  const [formStatus, setFormStatus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  
  const handleData = async (e) => {
    e.preventDefault();
    try {
      await fetch("", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponse("Success");
    } catch (error) {
      setResponse("Failure");
    }
    setName("");
    setEmail("");
    setFormStatus(true)
  };

  return (
    <div className="join-container">
      <div className="sub-join-container-1">
        <h1 className="sub-join-heading">Join Our Team As A Professional</h1>
        <form className="join-form" onSubmit={handleData}>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Enter Name"
          />
          <input
            required
            type="number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter Mobile Number"
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="sub-join-container-2">
        <h1 className="process-heading">Easy Maid Alloting Process</h1>
        <div className="roadmap">
          <div className="step">
            <h3>Talk to Us!</h3>
            <p>
              Let us know what you need, and we'll find the right candidates
              for you to check out.
            </p>
          </div>
          <div className="step">
            <h3>Pick Your Favorite</h3>
            <p>
              Interview the candidates to choose the one you like the best. It's
              all about what you want!
            </p>
          </div>
          <div className="step">
            <h3>Get Started</h3>
            <p>
              The person you choose will start working for you at your place as
              soon as possible.
            </p>
          </div>
          <div className="step">
            <h3>We're Here to Help</h3>
            <p>
              We promise to support you all the way through. If you have any
              issues, just reach out, and we'll sort them out together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
