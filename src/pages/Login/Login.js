import React from "react"
import "../../App.css"
import "./Login.css"

function Login() {
  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login-logo">SigniSure</div>
        <h2 className="login-title">Sign in to your account</h2>
        <p className="login-subtext">Welcome back! Please enter your details to continue.</p>
        <form className="login-form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
          <div className="login-links">
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className="signup-text">
          Don&apos;t have an account?{" "}
          <a href="#" className="signup-link">
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
