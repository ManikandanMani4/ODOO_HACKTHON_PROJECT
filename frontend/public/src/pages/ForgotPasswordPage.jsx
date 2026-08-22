import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reset password email:", email);

    setMessage(
      "Password reset instructions have been sent!"
    );
  };

  return (
    <div className="forgot-page">

      <div className="forgot-card">

        <h1>DayFlow</h1>

        <h2>Forgot Password?</h2>

        <p>
          Enter your email address and we will send
          you password reset instructions.
        </p>

        {message && (
          <div className="forgot-message">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <button type="submit">
            Send Reset Link
          </button>

        </form>

        <span
          className="back-login"
          onClick={() => navigate("/")}
        >
          ← Back to Login
        </span>

      </div>

    </div>
  );
}

export default ForgotPasswordPage;