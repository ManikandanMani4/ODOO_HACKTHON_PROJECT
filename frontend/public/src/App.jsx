import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import AdminDashboard from "./pages/dashboard/AdminDashboard";
import EmployeeDashboard from "./pages/dashboard/EmployeeDashboard";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/"
          element={<LoginPage />}
        />


        <Route
          path="/signup"
          element={<SignupPage />}
        />


        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />


        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />


        <Route
          path="/employee-dashboard"
          element={<EmployeeDashboard />}
        />


      </Routes>

    </BrowserRouter>

  );

}

export default App;