import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RoleRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");

    if (userRole === "admin") {
      navigate("/admin-dashboard");
    } else if (userRole === "employee") {
      navigate("/employee-dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>DayFlow</h1>
      <h2>Loading...</h2>
      <p>Redirecting you to your dashboard</p>
    </div>
  );
}

export default RoleRedirectPage;