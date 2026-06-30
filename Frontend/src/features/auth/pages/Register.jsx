import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import "../style/register.scss";
import { Link, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
const Register = () => {
  const { loading, handleRegister } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await handleRegister({ username, email, password });
      navigate("/home");
    } catch (submitError) {
      console.error(submitError);
      setError("Unable to create your account. Please try again.");
    }
  }
  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <FormGroup
            label="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FormGroup
            label="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormGroup
            label="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {error ? <p className="form-message form-message--error">{error}</p> : null}
          <button type="submit" className="button" disabled={loading}>
            {loading ? "Creating account..." : "Register"}
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
