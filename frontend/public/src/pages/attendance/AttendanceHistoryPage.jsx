import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";

function AttendanceHistoryPage() {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadAttendanceHistory();
  }, []);

  const loadAttendanceHistory = () => {
    const attendanceRecords = AttendanceService.getRecords();
    setRecords(attendanceRecords);
  };

  return (
    <div>
      <h1>Attendance History</h1>

      <button onClick={() => navigate("/attendance")}>
        Back to Attendance
      </button>

      <br />
      <br />

      {records.length === 0 ? (
        <h3>No attendance records found.</h3>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Working Hours</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>

                <td>
                  {record.checkIn
                    ? AttendanceService.formatTime(record.checkIn)
                    : "--"}
                </td>

                <td>
                  {record.checkOut
                    ? AttendanceService.formatTime(record.checkOut)
                    : "--"}
                </td>

                <td>{record.workingHours}</td>

                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AttendanceHistoryPage;