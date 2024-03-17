import React, { useState } from 'react';
import './LoginSignup.css';

import email_icon from "../assets/email-icon.png";
import password_icon from "../assets/padlock.png";
import user_icon from "../assets/user.png";


const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");

  return (
  <div className='container'>

      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
      
      {action=='Login'?<div></div>:<div className='input'>
          <img src={user_icon} alt=''></img>
          <input type='text' placeholder='Name'/>
      </div>}
    
      <div className='input'>
          <img src={email_icon} alt=''></img>
          <input type='email' placeholder='Email Id'/>
      </div>
      <div className='input'>
          <img src={password_icon} alt=''></img>
          <input type='password' placeholder='Password'/>
      </div>
      </div>

      {action=="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click here!</span></div>}
      <div className='submit-container'>
        <div className={action=='Sign Up'?'submit':'submit gray'} onClick={()=>setAction('Sign Up')}>Sign Up</div>
        <div className={action=='Login'?'submit':'submit gray'} onClick={()=>setAction('Login')}>Login</div>
      </div>
  </div>
  )
}

export default LoginSignup;
