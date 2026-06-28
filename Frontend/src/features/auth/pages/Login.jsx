import React from "react";
import "../style/login.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
const Login = () => {
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form className="login-form">
          <FormGroup label="email" placeholder="Enter your email" type="email" />
          <FormGroup label="password" placeholder="Enter your password" type="password" />
          <button type="submit" className="button">
            Login
          </button>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
