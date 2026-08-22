import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login
    console.log("Login Data:", formData);

    // After successful login
    navigate("/role-redirect");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        
        <div className="login-left">
          <h1>DayFlow</h1>
          <h2>Welcome Back!</h2>
          <p>
            Manage your work, attendance, tasks and daily activities
            all in one place.
          </p>
        </div>

        <div className="login-right">
          <div className="login-card">
            <h2>Login</h2>
            <p className="subtitle">
              Enter your details to access your account
            </p>

            <form onSubmit={handleSubmit}>
              
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Remember me
                </label>

                <span
                  className="forgot-password"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </span>
              </div>

              <button type="submit" className="login-button">
                Login
              </button>

            </form>

            <p className="signup-text">
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>
                Sign Up
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;