import React, { useState } from "react";
import "../style/login.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  }
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <FormGroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            placeholder="Enter your email"
            type="email"
          />
          <FormGroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            placeholder="Enter your password"
            type="password"
          />
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
