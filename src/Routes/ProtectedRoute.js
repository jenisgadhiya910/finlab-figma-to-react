import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "../Component/MainLayout/MainLayout";

const ProtectedRoute = () => {
  const { token } = useSelector((state) => state?.auth);

  if (!token) {
    return <Navigate to={`/auth/login`} replace />;
  }

  return <MainLayout />;
};

export default ProtectedRoute;
