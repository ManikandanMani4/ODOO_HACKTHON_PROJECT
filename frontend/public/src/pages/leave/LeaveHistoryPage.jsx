import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveService from "../../services/LeaveService";
import "../../styles/Leave.css";

function LeaveHistoryPage() {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = () => {
    const leaveRecords = LeaveService.getLeaves();
    setLeaves(leaveRecords);
  };

  const getStatusClass = (status) => {
    if (status === "Approved") {
      return "status-approved";
    }

    if (status === "Rejected") {
      return "status-rejected";
    }

    return "status-pending";
  };

  return (
    <div className="leave-page">
      <div className="leave-container">

        <h1>Leave History</h1>

        <p className="leave-description">
          View all your leave requests and their approval status.
        </p>

        <button
          className="back-button"
          onClick={() => navigate("/employee-dashboard")}
        >
          ← Back to Dashboard
        </button>

        <button
          className="refresh-button"
          onClick={() => navigate("/leave/apply")}
        >
          Apply New Leave
        </button>

        <br />
        <br />

        {leaves.length === 0 ? (
          <div className="leave-card empty-card">
            <h3>No Leave Requests Found</h3>

            <p>
              You have not submitted any leave requests yet.
            </p>
          </div>
        ) : (
          <div className="leave-table-container">
            <table className="leave-table">
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {leaves.map((leave) => (
                  <tr key={leave.id}>
                    <td>{leave.leaveType}</td>

                    <td>{leave.startDate}</td>

                    <td>{leave.endDate}</td>

                    <td>{leave.reason}</td>

                    <td>
                      <span
                        className={`leave-status ${getStatusClass(
                          leave.status
                        )}`}
                      >
                        {leave.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default LeaveHistoryPage;