import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RoleRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Temporary role for testing
    // Change this to "admin" to test Admin Dashboard
    const userRole = "employee";

    if (userRole === "admin") {
      navigate("/admin-dashboard");
    } else if (userRole === "employee") {
      navigate("/employee-dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.logo}>DayFlow</h1>

        <div style={styles.loader}></div>

        <h2 style={styles.title}>Loading...</h2>

        <p style={styles.text}>
          Redirecting you to your dashboard
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f9",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "400px",
    background: "#ffffff",
    padding: "50px 30px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  logo: {
    color: "#2563eb",
    fontSize: "32px",
    marginBottom: "30px",
  },

  title: {
    color: "#222",
    marginTop: "25px",
    marginBottom: "10px",
  },

  text: {
    color: "#777",
    fontSize: "15px",
  },

  loader: {
    width: "45px",
    height: "45px",
    margin: "auto",
    border: "5px solid #e5e7eb",
    borderTop: "5px solid #2563eb",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default RoleRedirectPage;