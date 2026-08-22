import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RoleRedirectPage from "./pages/RoleRedirectPage";

import AttendancePage from "./pages/attendance/AttendancePage";
import AttendanceHistoryPage from "./pages/attendance/AttendanceHistoryPage";
import AttendanceSummaryPage from "./pages/attendance/AttendanceSummaryPage";

import ApplyLeavePage from "./pages/leave/ApplyLeavePage";
import LeaveHistoryPage from "./pages/leave/LeaveHistoryPage";
import LeaveStatusPage from "./pages/leave/LeaveStatusPage";
import AdminLeaveApprovalPage from "./pages/leave/AdminLeaveApprovalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        <Route
          path="/role-redirect"
          element={<RoleRedirectPage />}
        />


        {/* Dashboards */}
        <Route
          path="/admin-dashboard"
          element={<h1>Admin Dashboard - Coming Soon</h1>}
        />

        <Route
          path="/employee-dashboard"
          element={<h1>Employee Dashboard - Coming Soon</h1>}
        />


        {/* Attendance Management */}
        <Route
          path="/attendance"
          element={<AttendancePage />}
        />

        <Route
          path="/attendance/history"
          element={<AttendanceHistoryPage />}
        />

        <Route
          path="/attendance/summary"
          element={<AttendanceSummaryPage />}
        />


        {/* Leave Management */}
        <Route
          path="/leave/apply"
          element={<ApplyLeavePage />}
        />

        <Route
          path="/leave/history"
          element={<LeaveHistoryPage />}
        />

        <Route
          path="/leave/status"
          element={<LeaveStatusPage />}
        />


        {/* Admin Leave Approval */}
        <Route
          path="/admin/leave-approval"
          element={<AdminLeaveApprovalPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;