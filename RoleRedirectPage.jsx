import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RoleRedirectPage.css";

function RoleRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Get logged-in user data
    const userData = localStorage.getItem("user");

    // If no user is found, go to login page
    if (!userData) {
      navigate("/");
      return;
    }

    const user = JSON.parse(userData);

    // Wait for 1.5 seconds and redirect based on role
    const timer = setTimeout(() => {
      if (user.role === "employee") {
        navigate("/employee-dashboard");
      } else if (user.role === "admin" || user.role === "hr") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="role-redirect-page">
      <div className="redirect-card">
        <div className="logo">
          <span className="logo-text">dayflow</span>
        </div>

        <div className="loader"></div>

        <h2>Please wait...</h2>

        <p>
          Checking your account and setting up
          <br />
          your workspace...
        </p>
      </div>
    </div>
  );
}

export default RoleRedirectPage;