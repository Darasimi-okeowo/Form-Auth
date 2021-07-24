import React, {useRef,useState} from "react";
import "./App.css";
import {useAuth} from '../context/AuthContext'

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value === passwordConfirmRef.current.value){
return setError('Passwords do not match')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
        } catch{
            setError('Failed to create an account')
        }
        setLoading(true)

    }
  return (
    <div className="main">
      <form className="form">
        <div className="form-items">
          <h4>Sign Up</h4>
        </div>
        <div className="form-items">
          <label>Email</label>
          <input type='email' ref={emailRef}/>
        </div>
        <div className="form-items">
          <label>Password</label>
          <input type='password' ref={passwordRef}/>
        </div>
        <div className="form-items">
          <label>Confirm Password</label>
          <input type='password' ref={passwordConfirmRef}/>
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
