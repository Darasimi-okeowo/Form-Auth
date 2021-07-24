import React from "react";
import { AuthProvider } from "../context/AuthContext";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard}/>
          <PrivateRoute  path='/update-profile' component={UpdateProfile}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/forgot-password' component={ForgotPassword}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
