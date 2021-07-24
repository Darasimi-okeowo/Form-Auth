import React, { useRef, useState } from "react";
import "./App.css";
import { useAuth } from "../context/AuthContext";
import {Link, useHistory} from 'react-router-dom'

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/')
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <div className="main">
      <form className="form" on onSubmit={handleSubmit}>
        
        <div className="form-items">
          <h4>Sign Up</h4>
        </div>
        {error && <hi>{error}</hi>}
        <div className="form-items">
          <label>Email</label>
          <input type="email" ref={emailRef} required/>
        </div>
        <div className="form-items">
          <label>Password</label>
          <input type="password" ref={passwordRef} required/>
        </div>
        <div className="form-items">
          <label>Confirm Password</label>
          <input type="password" ref={passwordConfirmRef} required/>
        </div>
        <div className="form-items">
          <button disabled={loading} type='submit'>Sign Up</button>
        </div>
      </form>
      <p>Already have an account?<Link to='/login'>Log In</Link></p>
    </div>
  );
};

export default Signup;
