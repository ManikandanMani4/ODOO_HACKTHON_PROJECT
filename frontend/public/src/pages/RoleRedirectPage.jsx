import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/RoleRedirectPage.css";

function RoleRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {

    const userRole =
      localStorage.getItem("userRole");

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
    <div className="redirect-page">

      <div className="redirect-card">

        <h1>DayFlow</h1>

        <div className="loader"></div>

        <h2>Loading...</h2>

        <p>
          Redirecting you to your dashboard
        </p>

      </div>

    </div>
  );
}

export default RoleRedirectPage;