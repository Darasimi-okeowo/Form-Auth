import React from 'react'
import "./App.css";
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="main">
        <form className="form" >
          
          <div className="form-items">
            <h4>Profile</h4>
          </div>
        </form>
        <button><Link to='/'>Log Out</Link></button>
      </div>
    )
}

export default Dashboard
