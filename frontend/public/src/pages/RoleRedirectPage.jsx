import "../styles/RoleRedirectPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RoleRedirectPage() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");

  const handleContinue = () => {
    if (!userRole) {
      alert("Please select your role");
      return;
    }

    // Save selected role
    localStorage.setItem("userRole", userRole);

    if (userRole === "admin") {
      navigate("/admin-dashboard");
    } else if (userRole === "employee") {
      navigate("/employee-dashboard");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.logo}>DayFlow</h1>

        <h2 style={styles.title}>Select Your Role</h2>

        <p style={styles.text}>
          Choose your role to continue to your dashboard
        </p>

        <div style={styles.roleContainer}>
          {/* Admin Radio Button */}
          <label
            style={{
              ...styles.roleOption,
              ...(userRole === "admin" ? styles.selectedRole : {}),
            }}
          >
            <input
              type="radio"
              name="role"
              value="admin"
              checked={userRole === "admin"}
              onChange={(e) => setUserRole(e.target.value)}
            />

            <div>
              <h3 style={styles.roleTitle}>Admin</h3>
              <p style={styles.roleText}>
                Manage employees, attendance and tasks
              </p>
            </div>
          </label>

          {/* Employee Radio Button */}
          <label
            style={{
              ...styles.roleOption,
              ...(userRole === "employee" ? styles.selectedRole : {}),
            }}
          >
            <input
              type="radio"
              name="role"
              value="employee"
              checked={userRole === "employee"}
              onChange={(e) => setUserRole(e.target.value)}
            />

            <div>
              <h3 style={styles.roleTitle}>Employee</h3>
              <p style={styles.roleText}>
                View your tasks, attendance and daily activities
              </p>
            </div>
          </label>
        </div>

        <button style={styles.button} onClick={handleContinue}>
          Continue
        </button>
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
    padding: "20px",
    background: "linear-gradient(135deg, #eaf2ff, #dbeafe)",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "480px",
    background: "#ffffff",
    padding: "45px 40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(37, 99, 235, 0.18)",
  },

  logo: {
    color: "#2563eb",
    fontSize: "36px",
    marginBottom: "20px",
  },

  title: {
    color: "#1e293b",
    fontSize: "26px",
    marginBottom: "10px",
  },

  text: {
    color: "#64748b",
    fontSize: "15px",
    marginBottom: "30px",
  },

  roleContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "30px",
  },

  roleOption: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    textAlign: "left",
    padding: "18px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
  },

  selectedRole: {
    border: "2px solid #2563eb",
    background: "#eff6ff",
  },

  roleTitle: {
    color: "#1e293b",
    margin: "0 0 5px 0",
    fontSize: "18px",
  },

  roleText: {
    color: "#64748b",
    margin: "0",
    fontSize: "13px",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default RoleRedirectPage;
