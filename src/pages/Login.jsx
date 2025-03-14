import { SignIn } from '@clerk/clerk-react';
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='login-container'>
      <SignIn />
    </div>
  );
}

export default Login;