import { BrowserRouter, Routes, Route } from "react-router-dom";


// Authentication Pages
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import EmployeeManagement from "./pages/employees/EmployeeManagement";
import TaskManagement from "./pages/tasks/TaskManagement";

// Dashboard Pages
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import EmployeeDashboard from "./pages/dashboard/EmployeeDashboard";


// Attendance Pages
import AttendancePage from "./pages/attendance/AttendancePage";
import AttendanceHistoryPage from "./pages/attendance/AttendanceHistoryPage";
import AttendanceSummaryPage from "./pages/attendance/AttendanceSummaryPage";


// Leave Pages
import ApplyLeavePage from "./pages/leave/ApplyLeavePage";
import LeaveHistoryPage from "./pages/leave/LeaveHistoryPage";
import LeaveStatusPage from "./pages/leave/LeaveStatusPage";
import AdminLeaveApprovalPage from "./pages/leave/AdminLeaveApprovalPage";



function App() {


  return (

    <BrowserRouter>

      <Routes>


        {/* ================= LOGIN ================= */}

        <Route
          path="/"
          element={<LoginPage />}
        />
<Route
path="/employees"
element={<EmployeeManagement />}
/>


<Route
path="/tasks"
element={<TaskManagement />}
/>


        {/* ================= AUTH ================= */}

        <Route
          path="/signup"
          element={<SignupPage />}
        />


        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />





        {/* ================= DASHBOARD ================= */}


        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />


        <Route
          path="/employee-dashboard"
          element={<EmployeeDashboard />}
        />






        {/* ================= ATTENDANCE ================= */}


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






        {/* ================= LEAVE ================= */}


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



        {/* ADMIN LEAVE APPROVAL */}

        <Route
          path="/admin/leave-approval"
          element={<AdminLeaveApprovalPage />}
        />



      </Routes>


    </BrowserRouter>

  );

}


export default App;