import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveService from "../../services/LeaveService";

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
    <div>
      <h1>Admin Leave Approval</h1>

      <button onClick={() => navigate("/admin-dashboard")}>
        Back to Admin Dashboard
      </button>

      <br />
      <br />

      {leaves.length === 0 ? (
        <h3>No pending leave requests.</h3>
      ) : (
        <table border="1" cellPadding="10">
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
                <td>{leave.status}</td>

                <td>
                  <button
                    onClick={() =>
                      handleStatus(leave.id, "Approved")
                    }
                  >
                    Approve
                  </button>

                  {" "}

                  <button
                    onClick={() =>
                      handleStatus(leave.id, "Rejected")
                    }
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />

      <button onClick={loadLeaves}>
        Refresh
      </button>
    </div>
  );
}

export default AdminLeaveApprovalPage;