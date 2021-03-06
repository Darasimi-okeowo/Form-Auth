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
            <h4 className='name'>Profile</h4>
          </div>
          
          {error && <hi className='error'>{error}</hi>}
         <p className="par">Email:{currentUser.email}</p>
          <div className="form-items">
          <p className="par"><button><Link to='/update-profile' style={{textDecoration: 'none'}}>Update Profile</Link></button></p> 
          </div>
        </form>
        <p className="par"><button onClick={handleLogOut}><Link to='/' style={{textDecoration: 'none'}}>Log Out</Link></button></p>
      </div>
    )
}

export default Dashboard
