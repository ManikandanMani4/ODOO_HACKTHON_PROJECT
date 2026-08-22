import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPasswordPage.css";

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Reset instructions have been sent to your email.");
  };

  return (
    <div className="forgot-page">

      {/* Floating background elements */}
      <div className="forgot-shape shape-one"></div>
      <div className="forgot-shape shape-two"></div>
      <div className="forgot-shape shape-three"></div>

      <div className="forgot-wrapper">

        {/* LEFT SIDE */}
        <div className="forgot-left">

          <div className="forgot-brand">

            <div className="brand-tag">
              ACCOUNT RECOVERY
            </div>

            <h1>DayFlow</h1>

            <h2>
              Don't worry.
              <br />
              We'll help you get back.
            </h2>

            <p>
              Securely reset your password and continue
              managing your work and daily activities.
            </p>

            {/* Recovery Steps */}
            <div className="recovery-steps">

              <div className="recovery-step active">
                <span>1</span>
                <div>
                  <strong>Enter Email</strong>
                  <small>Provide your registered email</small>
                </div>
              </div>

              <div className="recovery-line"></div>

              <div className="recovery-step">
                <span>2</span>
                <div>
                  <strong>Verify Account</strong>
                  <small>Check your email securely</small>
                </div>
              </div>

              <div className="recovery-line"></div>

              <div className="recovery-step">
                <span>3</span>
                <div>
                  <strong>Reset Password</strong>
                  <small>Create a new secure password</small>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="forgot-right">

          <div className="forgot-card">

            {/* CSS Security Icon */}
            <div className="security-icon">
              <div className="shield">
                <div className="lock"></div>
              </div>
            </div>

            <h2>Forgot Password?</h2>

            <p className="forgot-subtitle">
              Enter your registered email address and we'll send
              you instructions to reset your password.
            </p>

            {message && (
              <div className="success-message">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="forgot-input-group">

                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

              <button
                type="submit"
                className="send-button"
              >
                Send Reset Link
              </button>

            </form>

            <button
              className="back-button"
              onClick={() => navigate("/")}
            >
              ← Back to Login
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPasswordPage;