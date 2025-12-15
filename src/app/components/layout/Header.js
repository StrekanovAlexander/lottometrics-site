"use client";
import NavMobile from "../../components/layout/NavMobile";
import SidebarMobile from "./SidebarMobile";
import { routes } from "@/lib/global";
import { Inter } from "next/font/google";
import { ChartPie } from "lucide-react";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function Header() {
  return (
    <header className="sticky top-0 p-4 bg-graphite-dark shadow-sm flex justify-between items-center z-50">
      <a href="/" className="text-yellow font-semibold flex items-center gap-2">
        <img src="/images/logo/Lottometrics_Logo_128.png" class="h-4 md:h-4 lg:h-6 w-auto" />
        LottoMetrics
      </a>
      {/* Desktop nav */}
      <ul className="hidden md:flex space-x-6">
        {routes.map(el => (
          <li key={el.href}>
            <a href={el.href} className="text-sm text-gray-100 hover:text-yellow">
              {el.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile buttons */}
      <div className="md:hidden flex">
        <SidebarMobile />
        <NavMobile />
      </div>
      {/* <div className="md:hidden flex space-x-2">
        <button
          className="p-2 rounded bg-teal-dark"
          // onClick={() => setIsSidebarMobileOpen(true)}
        >
          <Settings />
        </button>
        <button
          className="p-2 rounded bg-teal-dark"
          onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
        >
          <Menu />
        </button>
      </div> */}
      {/* {isNavMobileOpen ? (
  <NavMobile />
) : null} */}
    </header>
  );
}