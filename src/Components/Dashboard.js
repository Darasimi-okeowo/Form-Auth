import React, {useState} from 'react'
import "./App.css";
import { useAuth } from "../context/AuthContext";
import {Link,useHistory} from 'react-router-dom'

const Dashboard = () => {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogOut(){
setError('')

try{
await logout()
history.pushState('/login')
} catch{
    setError('Failed to logout')
}
    }
    return (
        <div className="main">
        <form className="form" >
          
          <div className="form-items">
            <h4>Profile</h4>
          </div>
          
          {error && <hi>{error}</hi>}
          <strong>Email:</strong>{currentUser.email}
          <div className="form-items">
            <button><Link to='/update-profile'>Update Profile</Link></button>
          </div>
        </form>
        <button onClick={handleLogOut}><Link to='/'>Log Out</Link></button>
      </div>
    )
}

export default Dashboard
