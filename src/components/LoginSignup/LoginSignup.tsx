import React from 'react';
import './LoginSignup.css';


const LoginSignup = () => {
  return (
  <div className='container'>

      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
      <div className='input'>
          <img src='' alt=''></img>
          <input type='text' placeholder='Name'/>
      </div>
      <div className='input'>
          <img src='' alt=''></img>
          <input type='email' placeholder='Email Id'/>
      </div>
      <div className='input'>
          <img src='' alt=''></img>
          <input type='password' placeholder='Password'/>
      </div>
      </div>
      <div className='forgot-password'>Losr Password? <span>Click here!</span></div>
      <div className='submit-container'>
        <div className='submit'>Sign Up</div>
        <div className='submit'>Login</div>
      </div>
  </div>
  )
}

export default LoginSignup;
