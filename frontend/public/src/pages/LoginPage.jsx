import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }

    localStorage.setItem("userRole", role);

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    if (role === "hr") {
      navigate("/admin-dashboard");
    } else {
      navigate("/employee-dashboard");
    }
  };

  return (
    <div className="login-page">

      {/* Floating background shapes */}
      <div className="floating-shape shape-one"></div>
      <div className="floating-shape shape-two"></div>
      <div className="floating-shape shape-three"></div>

      <div className="login-wrapper">

        {/* LEFT SIDE */}
        <div className="login-left">
          <div className="brand-content">

            <div className="brand-badge">
              DAYFLOW
            </div>

            <h1>Work smarter.<br />Flow better.</h1>

            <p className="brand-description">
              Manage employees, attendance, tasks and daily work
              from one simple platform.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-dot"></span>
                Manage daily tasks
              </div>

              <div className="feature-item">
                <span className="feature-dot"></span>
                Track attendance easily
              </div>

              <div className="feature-item">
                <span className="feature-dot"></span>
                Manage your workforce
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="login-right">

          <div className="login-card">

            <div className="login-header">
              <div className="small-logo">DayFlow</div>

              <h2>Welcome back</h2>

              <p>
                Sign in to access your workspace
              </p>
            </div>


            <form onSubmit={handleLogin}>

              {/* ROLE BOXES */}
              <div className="role-section">

                <label className="section-label">
                  Choose your workspace
                </label>

                <div className="role-box-container">

                  <button
                    type="button"
                    className={`small-role-box ${
                      role === "employee" ? "active-role" : ""
                    }`}
                    onClick={() => setRole("employee")}
                  >
                    <div className="role-symbol">
                      E
                    </div>

                    <div className="role-content">
                      <strong>Employee</strong>
                      <span>My workspace</span>
                    </div>
                  </button>


                  <button
                    type="button"
                    className={`small-role-box ${
                      role === "hr" ? "active-role" : ""
                    }`}
                    onClick={() => setRole("hr")}
                  >
                    <div className="role-symbol">
                      HR
                    </div>

                    <div className="role-content">
                      <strong>HR</strong>
                      <span>Management</span>
                    </div>
                  </button>

                </div>
              </div>


              {/* EMAIL */}
              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>


              {/* PASSWORD */}
              <div className="input-group">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>


              {/* OPTIONS */}
              <div className="login-options">

                <label className="remember-option">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                  />

                  <span>Remember me</span>
                </label>

                <Link
                  to="/forgot-password"
                  className="forgot-link"
                >
                  Forgot password?
                </Link>

              </div>


              <button
                type="submit"
                className="login-button"
              >
                Sign In
              </button>

            </form>


            <div className="divider">
              <span></span>
              <p>New to DayFlow?</p>
              <span></span>
            </div>


            <p className="signup-text">
              <Link to="/signup">
                Create your account
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default LoginPage;