import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import './App.css';
import Signup from './Signup'

function App() {
  return (
    <AuthProvider>
<div className="App">
      <Signup />
    </div>
    </AuthProvider>
    
  );
}

export default App;
