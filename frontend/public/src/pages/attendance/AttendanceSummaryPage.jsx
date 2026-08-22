import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";

function AttendanceSummaryPage() {
  const navigate = useNavigate();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = () => {
    const attendanceSummary = AttendanceService.getSummary();
    setSummary(attendanceSummary);
  };

  if (!summary) {
    return <h2>Loading attendance summary...</h2>;
  }

  return (
    <div>
      <h1>Attendance Summary</h1>

      <button onClick={() => navigate("/attendance")}>
        Back to Attendance
      </button>

      <hr />

      <h2>Monthly Attendance Overview</h2>

      <p>
        <strong>Total Attendance Records:</strong>{" "}
        {summary.totalRecords}
      </p>

      <p>
        <strong>Present Days:</strong>{" "}
        {summary.presentDays}
      </p>

      <p>
        <strong>Completed Days:</strong>{" "}
        {summary.completedDays}
      </p>

      <hr />

      <button onClick={loadSummary}>
        Refresh Summary
      </button>
    </div>
  );
}

export default AttendanceSummaryPage;