import AppSidebar from "@/components/dashboard/AppSidebar";
import Navbar from "@/components/dashboard/Navbar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          <div className="px-4">{children}</div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
