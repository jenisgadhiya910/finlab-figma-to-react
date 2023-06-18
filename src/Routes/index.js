import React from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import DashboardLayout from "../components/DashboardLayout";
import LoginPage from "../Pages/Login";
import ProductsPage from "../Pages/Products";
import RegisterPage from "../Pages/Register";
import SolutionPage from "../Pages/Solution";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={<Navigate to="/dashboard/solution" replace />}
        />
        <Route path="solution" element={<SolutionPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route
          path="*"
          element={<Navigate to="/dashboard/solution" replace />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
};

export default Routes;
