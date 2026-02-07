import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://156.67.216.229/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          country_code: "+91",
          number: phone,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Store token
        localStorage.setItem("access_token", data.access_token);

        // ✅ Redirect to dashboard
        navigate("/dashboard");
      } else {
        alert("Invalid login credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="logo">
          <div className="logo-icon">C</div>
          <div className="logo-text">CouponMarket</div>
        </div>

        <h2>Welcome back</h2>
        <p className="subtitle">
          Enter your phone number and password to sign in
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <div className="form-row">
              <label>Password</label>
              <Link to="#" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="bottom-text">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
