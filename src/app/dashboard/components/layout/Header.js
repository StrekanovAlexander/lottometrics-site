import { Menu, Settings } from "lucide-react";

export default function Header({isNavMobileOpen, setIsNavMobileOpen, setIsSidebarMobileOpen}) {
  return (
    <header className="p-4 bg-teal text-white shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">LottoMetrics Dashboard</h1>
      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-lavender">Home</a>
        <a href="/dashboard" className="hover:text-mint">Dashboard</a>
        <a href="/lottery" className="hover:text-yellow">Lotteries</a>
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