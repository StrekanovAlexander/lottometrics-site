"use client";
import { useState } from "react";
import { DashboardProvider } from "@/context/DashboardContext";
import Header from "./components/layout/Header";
import NavMobile from "./components/layout/NavMobile";
import SidebarDesktop from "./components/layout/SidebarDesktop";
import SidebarMobile from "./components/layout/SidebarMobile";
import Footer from "./components/layout/Footer";

export default function DashboardLayout({ children }) {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false); 
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false); 

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <DashboardProvider>
        {/* Header */}
        <Header isNavMobileOpen={isNavMobileOpen} setIsNavMobileOpen={setIsNavMobileOpen} 
          setIsSidebarMobileOpen={setIsSidebarMobileOpen} />
        {/* Mobile nav dropdown */}
        {isNavMobileOpen && (
          <NavMobile />
        )}
        {/* Main container */}
        <div className="flex flex-grow">
          <SidebarDesktop />
          {/* Main content */}
          <main className="flex-grow p-8">
            {children}
          </main>
        </div>
        <Footer />
        {/* Mobile sidebar (off-canvas слева) */}
        {isSidebarMobileOpen && (
          <SidebarMobile setIsSidebarMobileOpen={setIsSidebarMobileOpen} />
        )}
      </DashboardProvider>
    </div>
  );
}
