import React, { useRef, useState } from 'react'
import "./App.css";
import { useAuth } from "../context/AuthContext";
import {Link, useHistory} from 'react-router-dom'

const Login = () => {
    const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/')
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }
  return (
    <div className="main">
      <form className="form" on onSubmit={handleSubmit}>
        
        <div className="form-items">
          <h4>Log In</h4>
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
          <button disabled={loading} type='submit'>Log In</button>
        </div>
        <div className="form-items">
        <Link to='/forgot-password'>Forgot Password</Link>
        </div>
      </form>
      <p>Need an account?<Link to='/signup'>Sign Up</Link></p>
    </div>
  );
};
export default Login
