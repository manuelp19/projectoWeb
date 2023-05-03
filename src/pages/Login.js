import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../components/logo.png';

const Login = () => {
  return (
    <div className ="Login" style={{marginBottom: "50px"}}>
      <img src={logo} alt="Logo" className="logo"/>
      <div className="Username" style={{marginBottom: "20px"}}>
        <TextField id="outlined-basic" label="Username" variant="outlined"/>
      </div>|
      <div className = "Password" style={{marginBottom: "20px"}}>
        <TextField id="outlined-basic" label="Password" variant="outlined"/>
      </div>
      <div className = "button-blue" style={{marginBottom: "20px"}}>
        <Button variant="contained" color ="secondary">Login</Button>
      </div>
      <div className = "Register">
        <Link to="/home" color="black">Click here to register</Link>
      </div>
    </div>
  );
}

export default Login;
