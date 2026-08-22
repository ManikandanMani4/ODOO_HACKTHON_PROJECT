import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RoleRedirectPage from "./pages/RoleRedirectPage";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Default Page */}
        <Route path="/" element={<LoginPage />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        {/* Role Redirect Page */}
        <Route
          path="/role-redirect"
          element={<RoleRedirectPage />}
        />

        {/* Employee Dashboard */}
        <Route
          path="/employee-dashboard"
          element={<EmployeeDashboard />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;