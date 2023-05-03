import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import logo from '../components/logoTecmeetups.png';

const Home = () => {
  return (
    <div className="home-page">
      <img src={logo} alt="Logo" className="logo" style={{marginBottom: "20px"}}/>
      <div className="register-form">
        <TextField id="outlined-basic" label="Name" variant="outlined" style={{marginRight: "10px"}}/>
        <TextField id="outlined-basic" label="Username" variant="outlined" style={{marginRight: "10px"}}/>
        <TextField id="outlined-basic" label="Password" variant="outlined"/>

      </div>|
      <div className = "button-blue" style={{marginBottom: "20px"}}>
        <Button variant="contained" color ="secondary" >Register</Button>
      </div>
      <div className = "Register">
        Already have an account?<br></br>
        <Link to="/" color="black">Click here to Login</Link>
      </div>

    </div>
  );
}

export default Home;
