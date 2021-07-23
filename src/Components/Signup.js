import React from "react";
import "./App.css";

const Signup = () => {
  return (
    <div className="main">
      <form className="form">
        <div className="form-items">
          <h4>Sign Up</h4>
        </div>
        <div className="form-items">
          <label>Email</label>
          <input />
        </div>
        <div className="form-items">
          <label>Password</label>
          <input />
        </div>
        <div className="form-items">
          <label>Confirm Password</label>
          <input />
        </div>
        <div className="form-items">
          <button>Sign Up</button>
        </div>
      </form>
      <p>Already have an account? Log In</p>
    </div>
  );
};

export default Signup;
