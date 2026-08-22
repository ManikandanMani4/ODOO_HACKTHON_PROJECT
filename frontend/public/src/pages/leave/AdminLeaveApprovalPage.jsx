import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveService from "../../services/LeaveService";
import "../../styles/Leave.css";

function AdminLeaveApprovalPage() {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = () => {
    const pendingLeaves = LeaveService.getPendingLeaves();
    setLeaves(pendingLeaves);
  };

  const handleStatus = (id, status) => {
    const result = LeaveService.updateLeaveStatus(id, status);

    if (result.success) {
      alert(`Leave ${status} successfully!`);
      loadLeaves();
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="leave-page">
      <div className="leave-container">
        <h1>Admin Leave Approval</h1>

        <p className="leave-description">
          Review and approve employee leave requests.
        </p>

        <button
          className="back-button"
          onClick={() => navigate("/admin-dashboard")}
        >
          ← Back to Dashboard
        </button>

        {leaves.length === 0 ? (
          <div className="leave-card empty-card">
            <h3>No Pending Leave Requests</h3>
            <p>
              There are currently no leave requests waiting
              for approval.
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
                  <th>Action</th>
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
                      <span className="leave-status status-pending">
                        {leave.status}
                      </span>
                    </td>

                    <td>
                      <div className="leave-approval-actions">
                        <button
                          className="approve-button"
                          onClick={() =>
                            handleStatus(
                              leave.id,
                              "Approved"
                            )
                          }
                        >
                          Approve
                        </button>

                        <button
                          className="reject-button"
                          onClick={() =>
                            handleStatus(
                              leave.id,
                              "Rejected"
                            )
                          }
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button
          className="refresh-button"
          onClick={loadLeaves}
        >
          Refresh Requests
        </button>
      </div>
    </div>
  );
}

export default AdminLeaveApprovalPage;