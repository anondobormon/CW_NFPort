import React from "react";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Task from "./Task";

export default function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="left"></div>
      <div className="right">
        <Navbar />
        <Outlet />
        <Task />
      </div>
    </div>
  );
}
