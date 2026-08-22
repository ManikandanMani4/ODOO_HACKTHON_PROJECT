import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";
import "../../styles/Attendance.css";

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
    return (
      <div className="summary-page">
        <h2>Loading attendance summary...</h2>
      </div>
    );
  }

  return (
    <div className="summary-page">
      <div className="summary-container">

        <h1>Attendance Summary</h1>

        <button
          className="attendance-button"
          onClick={() => navigate("/attendance")}
        >
          Back to Attendance
        </button>

        <h2>Monthly Attendance Overview</h2>

        <div className="summary-grid">

          <div className="summary-card">
            <h3>Total Attendance Records</h3>
            <p>{summary.totalRecords}</p>
          </div>

          <div className="summary-card">
            <h3>Present Days</h3>
            <p>{summary.presentDays}</p>
          </div>

          <div className="summary-card">
            <h3>Completed Days</h3>
            <p>{summary.completedDays}</p>
          </div>

          <div className="summary-card">
            <h3>Attendance Percentage</h3>
            <p>{summary.attendancePercentage}%</p>
          </div>

        </div>

        <button
          className="attendance-button"
          onClick={loadSummary}
        >
          Refresh Summary
        </button>

      </div>
    </div>
  );
}

export default AttendanceSummaryPage;