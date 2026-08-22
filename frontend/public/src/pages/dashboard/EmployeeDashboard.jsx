import { useNavigate } from "react-router-dom";
import "../../styles/EmployeeDashboard.css";

function EmployeeDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <div className="employee-dashboard">
      <header className="employee-header">
        <div className="employee-brand">
          <h1>DayFlow</h1>
          <p>Employee Dashboard</p>
        </div>

        <button
          className="employee-logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <main className="employee-content">
        <section className="employee-welcome">
          <h2>Welcome Back 👋</h2>

          <p>
            Manage your attendance, leave and daily activities.
          </p>
        </section>

        <section className="employee-dashboard-grid">

          <div
            className="employee-dashboard-card"
            onClick={() => navigate("/attendance")}
          >
            <div className="employee-dashboard-icon">
              📅
            </div>

            <h3>My Attendance</h3>

            <p>
              Check in, check out and manage your attendance.
            </p>

            <button className="employee-action-button">
              Open Attendance
            </button>
          </div>

          <div
            className="employee-dashboard-card"
            onClick={() => navigate("/leave/apply")}
          >
            <div className="employee-dashboard-icon">
              📝
            </div>

            <h3>Apply Leave</h3>

            <p>
              Submit a new leave request to your administrator.
            </p>

            <button className="employee-action-button">
              Apply Now
            </button>
          </div>

          <div
            className="employee-dashboard-card"
            onClick={() => navigate("/leave/history")}
          >
            <div className="employee-dashboard-icon">
              📋
            </div>

            <h3>Leave History</h3>

            <p>
              View your previous leave requests and status.
            </p>

            <button className="employee-action-button">
              View History
            </button>
          </div>

          <div
            className="employee-dashboard-card"
            onClick={() =>
              navigate("/attendance/summary")
            }
          >
            <div className="employee-dashboard-icon">
              📊
            </div>

            <h3>Attendance Summary</h3>

            <p>
              View your attendance statistics and records.
            </p>

            <button className="employee-action-button">
              View Summary
            </button>
          </div>

        </section>
      </main>
    </div>
  );
}

export default EmployeeDashboard;