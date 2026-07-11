import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/customer/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/customer/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";
import NotFound from "../pages/shared/NotFound";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import PublicRoute from "../components/auth/PublicRoute";
import RoleRoute from "../components/auth/RoleRoute";
import Unauthorized from "../pages/shared/Unauthorized";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

  <Route path="/" element={<Home />} />

 <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

  <Route
    path="/admin/dashboard"
    element={
      <RoleRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </RoleRoute>
    }
  />

</Route>

<Route element={<AuthLayout />}>

  <Route
    path="/login"
    element={
      <PublicRoute>
        <Login />
      </PublicRoute>
    }
  />

  <Route
    path="/register"
    element={
      <PublicRoute>
        <Register />
      </PublicRoute>
    }
  />

</Route>

<Route
  path="/unauthorized"
  element={<Unauthorized />}
/>

<Route
  path="*"
  element={<NotFound />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;