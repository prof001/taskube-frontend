import React from 'react'

const Login = () => {
  return (
    <form>
      <div className="form-group">
        <label>Email </label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label>Password </label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
      <button className="btn btn-lg btn-primary btnSubmit">Login</button>
    </form>
  )
};

export default Login
