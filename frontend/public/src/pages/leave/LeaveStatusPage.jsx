import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveService from "../../services/LeaveService";
import "../../styles/Leave.css";

function LeaveStatusPage() {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    loadLeaveStatus();
  }, []);

  const loadLeaveStatus = () => {
    const leaveRecords = LeaveService.getLeaves();
    setLeaves(leaveRecords);
  };

  const pendingLeaves = leaves.filter(
    (leave) => leave.status === "Pending"
  ).length;

  const approvedLeaves = leaves.filter(
    (leave) => leave.status === "Approved"
  ).length;

  const rejectedLeaves = leaves.filter(
    (leave) => leave.status === "Rejected"
  ).length;

  return (
    <div className="leave-page">
      <div className="leave-container">

        <h1>Leave Status</h1>

        <p className="leave-description">
          View the summary of all your leave requests.
        </p>

        <button
          className="back-button"
          onClick={() => navigate("/employee-dashboard")}
        >
          ← Back to Dashboard
        </button>

        <div className="leave-summary-grid">

          <div className="leave-summary-card">
            <h3>Total Requests</h3>
            <p>{leaves.length}</p>
          </div>

          <div className="leave-summary-card">
            <h3>Pending</h3>
            <p>{pendingLeaves}</p>
          </div>

          <div className="leave-summary-card">
            <h3>Approved</h3>
            <p>{approvedLeaves}</p>
          </div>

          <div className="leave-summary-card">
            <h3>Rejected</h3>
            <p>{rejectedLeaves}</p>
          </div>

        </div>

        <div className="leave-navigation-actions">

          <button
            className="leave-button"
            onClick={() => navigate("/leave/apply")}
          >
            Apply Leave
          </button>

          <button
            className="leave-button"
            onClick={() => navigate("/leave/history")}
          >
            View Leave History
          </button>

          <button
            className="leave-button"
            onClick={loadLeaveStatus}
          >
            Refresh Status
          </button>

        </div>

      </div>
    </div>
  );
}

export default LeaveStatusPage;