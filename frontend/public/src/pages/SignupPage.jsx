import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.password !== formData.confirmPassword
    ) {
      setMessage("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", formData);

    setMessage("Account created successfully!");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="signup-page">

      <div className="signup-container">

        <div className="signup-left">

          <h1>DayFlow</h1>

          <h2>Join DayFlow!</h2>

          <p>
            Create your account and manage your work,
            attendance, tasks and daily activities all
            in one place.
          </p>

        </div>

        <div className="signup-right">

          <div className="signup-card">

            <h2>Create Account</h2>

            <p className="subtitle">
              Fill in your details to create your account
            </p>

            {message && (
              <p className="message">
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit}>

              <div className="input-group">

                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

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
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="input-group">

                <label>Confirm Password</label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

              </div>

              <button
                type="submit"
                className="signup-button"
              >
                Create Account
              </button>

            </form>

            <p className="login-text">

              Already have an account?{" "}

              <span onClick={() => navigate("/")}>
                Login
              </span>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SignupPage;