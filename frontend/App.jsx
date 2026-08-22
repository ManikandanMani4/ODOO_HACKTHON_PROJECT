import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./src/pages/LoginPage";
import SignupPage from "./src/pages/SignupPage";
import RoleRedirectPage from "./src/pages/RoleRedirectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/role-redirect"
          element={<RoleRedirectPage />}
        />

        <Route
          path="/forgot-password"
          element={<h1>Forgot Password Page - Coming Soon</h1>}
        />

        <Route
          path="/employee-dashboard"
          element={<h1>Employee Dashboard</h1>}
        />

        <Route
          path="/admin-dashboard"
          element={<h1>Admin Dashboard</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;