import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveService from "../../services/LeaveService";

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

  return (
    <div>
      <h1>Leave History</h1>

      <button onClick={() => navigate("/leave/apply")}>
        Apply New Leave
      </button>

      <br />
      <br />

      {leaves.length === 0 ? (
        <h3>No leave requests found.</h3>
      ) : (
        <table border="1" cellPadding="10">
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
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />

      <button onClick={() => navigate("/attendance")}>
        Back to Attendance
      </button>
    </div>
  );
}

export default LeaveHistoryPage;