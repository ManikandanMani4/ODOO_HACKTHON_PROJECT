import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveService from "../../services/LeaveService";

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
    <div>
      <h1>Leave Status</h1>

      <button onClick={() => navigate("/leave/apply")}>
        Apply Leave
      </button>

      <br />
      <br />

      <h2>Leave Summary</h2>

      <p>
        <strong>Total Leave Requests:</strong> {leaves.length}
      </p>

      <p>
        <strong>Pending:</strong> {pendingLeaves}
      </p>

      <p>
        <strong>Approved:</strong> {approvedLeaves}
      </p>

      <p>
        <strong>Rejected:</strong> {rejectedLeaves}
      </p>

      <br />

      <button onClick={() => navigate("/leave/history")}>
        View Leave History
      </button>

      <br />
      <br />

      <button onClick={() => navigate("/attendance")}>
        Back to Attendance
      </button>
    </div>
  );
}

export default LeaveStatusPage;