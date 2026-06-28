import React from "react";
import FormGroup from "../components/FormGroup";
import "../style/register.scss";
import { Link } from "react-router";
const Register = () => {
  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form className="register-form">
          <FormGroup label="username" placeholder="Enter your username" />
          <FormGroup
            label="email"
            placeholder="Enter your email"
            type="email"
          />
          <FormGroup
            label="password"
            placeholder="Enter your password"
            type="password"
          />
          <button type="submit" className="button">
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
