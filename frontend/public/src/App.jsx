import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RoleRedirectPage from "./pages/RoleRedirectPage";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/" element={<LoginPage />} />

      {/* Signup */}
      <Route path="/signup" element={<SignupPage />} />

      {/* Forgot Password */}
      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />

      {/* Role Redirect */}
      <Route
        path="/role-redirect"
        element={<RoleRedirectPage />}
      />

      {/* Dashboards */}
      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/employee-dashboard"
        element={<EmployeeDashboard />}
      />

      {/* Unknown page */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default App;