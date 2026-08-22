import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RoleRedirectPage.css";

function RoleRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");

    // If user is not logged in, go back to login
    if (!userData) {
      navigate("/");
      return;
    }

    const user = JSON.parse(userData);

    // Wait for 1.5 seconds
    const timer = setTimeout(() => {
      // Redirect Employee
      if (user.role === "employee") {
        navigate("/employee-dashboard");
      }

      // Redirect Admin or HR
      else if (
        user.role === "admin" ||
        user.role === "hr"
      ) {
        navigate("/admin-dashboard");
      }

      // Invalid role
      else {
        navigate("/");
      }
    }, 1500);

    // Clear timer when page closes
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="role-redirect-page">
      <div className="redirect-card">
        <h1>DAYFLOW</h1>

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