import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RoleRedirectPage.css";

function RoleRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Temporary role for testing
    const userRole = localStorage.getItem("userRole") || "employee";

    const timer = setTimeout(() => {
      if (userRole === "admin") {
        navigate("/admin-dashboard");
      } else if (userRole === "employee") {
        navigate("/employee-dashboard");
      } else {
        navigate("/");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="role-redirect-page">
      <div className="redirect-card">
        <h1>DayFlow</h1>

        <div className="loader"></div>

        <h2>Loading...</h2>

        <p>Redirecting you to your dashboard</p>
      </div>
    </div>
  );
}

export default RoleRedirectPage;