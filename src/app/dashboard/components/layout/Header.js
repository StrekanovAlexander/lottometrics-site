import { Menu, Settings } from "lucide-react";

export default function Header({isNavMobileOpen, setIsNavMobileOpen, setIsSidebarMobileOpen}) {
  return (
    <header className="sticky top-0 p-4 bg-teal text-white shadow flex justify-between items-center z-50">
      <a href="/dashboard" className="text-xl font-bold">LottoMetrics</a>
      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/dashboard" className="hover:text-white">Dashboard</a>
        <a href="/dashboard/lotteries" className="hover:text-white">Lotteries</a>
      </nav>
      {/* Mobile buttons */}
      <div className="md:hidden flex space-x-2">
        <button
          className="p-2 rounded bg-teal-dark"
          onClick={() => setIsSidebarMobileOpen(true)}
        >
          <Settings />
        </button>
        <button
          className="p-2 rounded bg-teal-dark"
          onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}