import React from 'react'

const Register = () => {
  return (
    <div id="form">
      <h1>User registration</h1>
      <input type="text" placeholder="User name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Mobile no" />
      <input type="text" placeholder="Password" />
      <button>submit</button>
    </div>
  );
}

export default Register