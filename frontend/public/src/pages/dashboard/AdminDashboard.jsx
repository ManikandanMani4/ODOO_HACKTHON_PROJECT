import { useNavigate } from "react-router-dom";
import "../../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-brand">
          <h1>DayFlow</h1>
          <p>Admin Dashboard</p>
        </div>

        <button
          className="admin-logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <main className="admin-content">
        <section className="admin-welcome">
          <h2>Welcome, Admin 👋</h2>

          <p>
            Manage employees, attendance, leave requests and
            daily activities from one place.
          </p>
        </section>

        <section className="admin-dashboard-grid">

          <div
            className="admin-dashboard-card"
            onClick={() => navigate("/attendance")}
          >
            <div className="dashboard-icon">📅</div>

            <h3>Attendance</h3>

            <p>
              View and manage employee attendance records.
            </p>

            <button className="dashboard-action-button">
              Open Attendance
            </button>
          </div>

          <div
            className="admin-dashboard-card"
            onClick={() =>
              navigate("/admin/leave-approval")
            }
          >
            <div className="dashboard-icon">✅</div>

            <h3>Leave Approval</h3>

            <p>
              Approve or reject employee leave requests.
            </p>

            <button className="dashboard-action-button">
              Manage Leaves
            </button>
          </div>

          <div className="admin-dashboard-card">
            <div className="dashboard-icon">👥</div>

            <h3>Employees</h3>

            <p>
              Manage employee information and details.
            </p>

            <button className="dashboard-action-button">
              View Employees
            </button>
          </div>

          <div className="admin-dashboard-card">
            <div className="dashboard-icon">📋</div>

            <h3>Tasks</h3>

            <p>
              Create and manage employee daily tasks.
            </p>

            <button className="dashboard-action-button">
              Manage Tasks
            </button>
          </div>

        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;