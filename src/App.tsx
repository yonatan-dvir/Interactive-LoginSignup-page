import React from 'react';
import './App.css';
import './index.css';
import LoginSignup from './components/LoginSignup/LoginSignup';

const App: React.FC = () => {
  return (
  <div className='App'>
    <span className='heading'>hello</span>
    <LoginSignup/>
  </div>
  )
}

export default App;
