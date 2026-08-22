import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveService from "../../services/LeaveService";

function ApplyLeavePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.startDate > formData.endDate) {
      setMessage("End date cannot be before start date.");
      return;
    }

    const result = LeaveService.applyLeave(formData);

    if (result.success) {
      setMessage("Leave request submitted successfully!");

      setFormData({
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
    }
  };

  return (
    <div>
      <h1>Apply Leave</h1>

      <button onClick={() => navigate("/attendance")}>
        Back to Attendance
      </button>

      <br />
      <br />

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>

        <div>
          <label>Leave Type</label>
          <br />

          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            required
          >
            <option value="">Select Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Personal Leave">Personal Leave</option>
            <option value="Vacation Leave">Vacation Leave</option>
          </select>
        </div>

        <br />

        <div>
          <label>Start Date</label>
          <br />

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>End Date</label>
          <br />

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Reason</label>
          <br />

          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter reason for leave"
            rows="5"
            required
          />
        </div>

        <br />

        <button type="submit">
          Submit Leave Request
        </button>

      </form>

      <br />

      <button onClick={() => navigate("/leave/history")}>
        View Leave History
      </button>
    </div>
  );
}

export default ApplyLeavePage;