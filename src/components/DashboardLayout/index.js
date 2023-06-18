import React from "react";
import "./styles.scss";
import { Outlet } from "react-router";
import DashboardLayoutHeader from "../DashboardLayoutHeader";
import DashboardLayoutFooter from "../DashboardLayoutFooter";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <DashboardLayoutHeader />
      <Outlet />
      <DashboardLayoutFooter />
    </div>
  );
};

export default DashboardLayout;
