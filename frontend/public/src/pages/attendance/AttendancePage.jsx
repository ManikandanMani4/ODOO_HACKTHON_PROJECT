import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";
import "../../styles/Attendance.css";

function AttendancePage() {
  const navigate = useNavigate();
  const [todayRecord, setTodayRecord] = useState(null);

  useEffect(() => {
    loadTodayAttendance();
  }, []);

  const loadTodayAttendance = () => {
    const record = AttendanceService.getTodayRecord();
    setTodayRecord(record);
  };

  const handleCheckIn = () => {
    const result = AttendanceService.checkIn();

    if (result.success) {
      alert("Check In Successful!");
      loadTodayAttendance();
    } else {
      alert(result.message);
    }
  };

  const handleCheckOut = () => {
    const result = AttendanceService.checkOut();

    if (result.success) {
      alert("Check Out Successful!");
      loadTodayAttendance();
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="attendance-page">
      <div className="attendance-container">

        <h1>Attendance Management</h1>

        <p className="attendance-description">
          Manage your daily attendance and working hours.
        </p>

        <div className="attendance-card">
          <h2>Today's Attendance</h2>

          <p>
            <strong>Date:</strong>{" "}
            {new Date().toDateString()}
          </p>

          <div className="attendance-status">
            <strong>Status:</strong>{" "}
            {todayRecord
              ? todayRecord.status
              : "Not Checked In"}
          </div>

          <div className="attendance-details">
            <p>
              <strong>Check In Time:</strong>{" "}
              {todayRecord
                ? AttendanceService.formatTime(
                    todayRecord.checkIn
                  )
                : "--"}
            </p>

            <p>
              <strong>Check Out Time:</strong>{" "}
              {todayRecord && todayRecord.checkOut
                ? AttendanceService.formatTime(
                    todayRecord.checkOut
                  )
                : "--"}
            </p>

            <p>
              <strong>Working Hours:</strong>{" "}
              {todayRecord
                ? todayRecord.workingHours
                : "--"}
            </p>
          </div>

          <div className="attendance-actions">
            <button
              className="attendance-button"
              onClick={handleCheckIn}
              disabled={!!todayRecord}
            >
              Check In
            </button>

            <button
              className="attendance-button"
              onClick={handleCheckOut}
              disabled={
                !todayRecord || !!todayRecord.checkOut
              }
            >
              Check Out
            </button>
          </div>
        </div>

        <div className="attendance-card">
          <h2>Attendance Records</h2>

          <div className="attendance-actions">
            <button
              className="attendance-button"
              onClick={() =>
                navigate("/attendance/history")
              }
            >
              Attendance History
            </button>

            <button
              className="attendance-button"
              onClick={() =>
                navigate("/attendance/summary")
              }
            >
              Monthly Summary
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AttendancePage;