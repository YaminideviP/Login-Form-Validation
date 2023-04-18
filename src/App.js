import './App.css';
import profile from "./images/login.jpg";
import email from "./images/email.jpg";
import pass from "./images/pass.jpg";
import React, { useState } from 'react';
import {emailValidator, passwordValidator} from "./regexValidator";

function App() {
const [input, setInput] = useState({email:'', password:''})   // initial state

//for error message
const[errorMessage, seterrorMessage] = useState('')
const[successMessage, setsuccessMessage] = useState('')

const handleChange = (event) =>{                  // to set a new state for input
  setInput({...input,[event.target.name]:event.target.value})
};

const formSubmitter = (event) =>{

  event.preventDefault()    //to avoid automatic refresh
  setsuccessMessage(" ")
  if(!emailValidator(input.email))
    return seterrorMessage("Please enter valid email id");
  if(!passwordValidator(input.password))
    return seterrorMessage("Password should have minimum 8 charaters with the combination of uppercase, lowercase, numbers and special character");
  setsuccessMessage("Successfully Validated")
};
  return (
    <div className="main">
      <div className="sub-main">
        <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>
          </div>
        </div>
        <div>
          <h1> Login Page</h1>
          <div>
{errorMessage.length > 0 && <div style={{marginBottom:"10px", color:'red'}}>{errorMessage}</div>}
{successMessage.length > 0 && <div style={{marginBottom:"10px", color:'green'}}>{successMessage}</div>}
            <img src={email} alt="email" className="email"/>
            <input type="text" name="email" placeholder ="Enter your Mail ID" onChange={handleChange} className="name"/ >
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" name="password" placeholder ="Enter your Password" onChange={handleChange} className="name"/ >
          </div>
          <div className="login-button">
            <button className="loginbtn" onClick={formSubmitter}>Login</button>
          </div>
            <p className="link">
              <a href="#"> Forgot password?</a> Or <a href ="#"> Sign Up </a>
            </p>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
