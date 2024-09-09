import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div id="form">
      <h1>User Login</h1>
      <input type="text" placeholder="User name" />
      <input type="text" placeholder="Password" />
      <button>submit</button>
      <a href="/register/">Don't have an account</a>
    </div>
  );
}

export default Login