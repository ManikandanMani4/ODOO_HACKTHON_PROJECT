import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RoleRedirectPage from "./pages/RoleRedirectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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

        {/* Temporary dashboard */}
        <Route
          path="/admin-dashboard"
          element={<h1>Admin Dashboard - Coming Soon</h1>}
        />

        <Route
          path="/employee-dashboard"
          element={<h1>Employee Dashboard - Coming Soon</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;