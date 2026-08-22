import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";

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
    <div>
      <h1>Attendance Management</h1>

      <h2>Today's Attendance</h2>

      <p>
        <strong>Date:</strong>{" "}
        {new Date().toDateString()}
      </p>

      <hr />

      <p>
        <strong>Status:</strong>{" "}
        {todayRecord ? todayRecord.status : "Not Checked In"}
      </p>

      <p>
        <strong>Check In Time:</strong>{" "}
        {todayRecord
          ? AttendanceService.formatTime(todayRecord.checkIn)
          : "--"}
      </p>

      <button
        onClick={handleCheckIn}
        disabled={todayRecord}
      >
        Check In
      </button>

      <br />
      <br />

      <p>
        <strong>Check Out Time:</strong>{" "}
        {todayRecord && todayRecord.checkOut
          ? AttendanceService.formatTime(todayRecord.checkOut)
          : "--"}
      </p>

      <button
        onClick={handleCheckOut}
        disabled={!todayRecord || todayRecord.checkOut}
      >
        Check Out
      </button>

      <br />
      <br />

      <p>
        <strong>Working Hours:</strong>{" "}
        {todayRecord
          ? todayRecord.workingHours
          : "--"}
      </p>

      <hr />

      <button
        onClick={() => navigate("/attendance/history")}
      >
        Attendance History
      </button>

      <br />
      <br />

      <button
        onClick={() => navigate("/attendance/summary")}
      >
        Monthly Summary
      </button>
    </div>
  );
}

export default AttendancePage;