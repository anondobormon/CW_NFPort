import React from "react";
import { Outlet } from "react-router-dom";
import "./AccountLayout.scss";
import Nav from "./Navbar/Nav";

export default function AccountLayout() {
  return (
    <div className="accountLayout">
      <Nav />
      <Outlet />
    </div>
  );
}
