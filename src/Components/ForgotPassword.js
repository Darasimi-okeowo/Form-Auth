import React, { useRef, useState } from 'react'
import "./App.css";
import { useAuth } from "../context/AuthContext";
import {Link} from 'react-router-dom'

const ForgotPassword = () => {
    const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
        setMessage('')
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further info')
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }
  return (
    <div className="main">
      <form className="form" on onSubmit={handleSubmit}>
        
        <div className="form-items">
          <h4 className='name'> Password Reset </h4>
        </div>
        {error && <hi className='error'>{error}</hi>}
        <div className="form-items">
          <label>Email</label>
          <input type="email" ref={emailRef} required/>
        </div>
        
        <div className="form-items">
          <button disabled={loading} type='submit'>Reset Password</button>
        </div>
        <div className="form-items">
        <Link to='/login' className='forgot'>Log In</Link>
        </div>
      </form>
      <p className="par">Need an account?<Link to='/signup' style={{textDecoration: 'none'}}>Sign Up</Link></p>
    </div>
  );
};
export default ForgotPassword
