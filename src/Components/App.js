import React from "react";
import { AuthProvider } from "../context/AuthContext";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
