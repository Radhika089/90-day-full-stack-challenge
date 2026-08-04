import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#f8fafc] min-h-screen p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
