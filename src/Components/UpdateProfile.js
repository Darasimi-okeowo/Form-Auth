import React, { useState, useRef } from "react";
import "./App.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser,updateEmail,updatePassword } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = []
    setLoading(true);
    setError("");
    if(emailRef.current.value !== currentUser.email){
        promises.push(updateEmail(emailRef.current.value))
    }
    if(passwordRef.current.value){
        promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
        history.push('/')
    }).catch(() => {
        setError("Failed to update account");
    }).finally(() => {
        setLoading(false)
    })
  }
  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-items">
          <h4>Update Profile</h4>
        </div>
        {error && <hi>{error}</hi>}
        <div className="form-items">
          <label>Email</label>
          <input
            type="email"
            ref={emailRef}
            required
            defaultValue={currentUser.email}
          />
        </div>
        <div className="form-items">
          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Leave blank to leave the same"
          />
        </div>
        <div className="form-items">
          <label>Confirm Password</label>
          <input
            type="password"
            ref={passwordConfirmRef}
            placeholder="Leave blank to leave the same"
          />
        </div>
        <div className="form-items">
          <button disabled={loading} type="submit">
            Update{" "}
          </button>
        </div>
      </form>
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default UpdateProfile;
