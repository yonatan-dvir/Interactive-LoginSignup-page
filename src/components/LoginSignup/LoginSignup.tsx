import React, { useState } from 'react';
import './LoginSignup.css';

import email_icon from "../assets/email-icon.png";
import password_icon from "../assets/padlock.png";
import user_icon from "../assets/user.png";

/**
 * LoginSignup Component
 * 
 * A responsive React component that toggles between Login and Signup forms.
 * The component allows the user to input their credentials to either create a new account (Sign Up)
 * or access an existing one (Login).
 *
 * Props: None
 * 
 * State:
 * - action (String): Determines the current action - 'Login' or 'Sign Up'. Defaults to 'Sign Up'.
 *
 * Behavior:
 * - Displays an input field for the user's name only when the action is 'Sign Up'.
 * - Provides input fields for email and password for both 'Login' and 'Sign Up' actions.
 * - Displays a 'Lost Password?' option only in the 'Login' view.
 * - Toggles between 'Login' and 'Sign Up' views when the respective buttons are clicked.
 */

const LoginSignup = () => {

  // State to toggle between 'Login' and 'Sign Up' forms.
  const [action,setAction] = useState("Sign Up");

  return (
  <div className='container'>

      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      {/* Conditional rendering based on the 'action' state */}
      <div className='inputs'>{
      action=='Login'?
      <div></div>:
      <div className='input'>
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

      {/* Action buttons to toggle between 'Login' and 'Sign Up' */}
      {action=="Sign Up"?
      <div></div>:
      <div className='forgot-password'>Lost Password? <span>Click here!</span></div>}
      <div className='submit-container'>
        <div className={action=='Sign Up'?'submit':'submit gray'} onClick={()=>setAction('Sign Up')}>Sign Up</div>
        <div className={action=='Login'?'submit':'submit gray'} onClick={()=>setAction('Login')}>Login</div>
      </div>
  </div>
  )
}

export default LoginSignup;
