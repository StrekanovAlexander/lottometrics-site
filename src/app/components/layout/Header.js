"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anton } from "next/font/google";
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/lotteries", label: "Lotteries" },
    { href: "/download", label: "Download" },
    { href: "/docs", label: "Docs" },
    { href: "#about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 bg-gray-900 px-5 z-999 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className={`${anton.className} hover:no-underline text-gray-100`}>
            LottoMetrics
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 list-none">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  title={link.label}
                  className={
                    pathname === link.href
                      ? "text-gray-50 font-semibold hover:no-underline text-base"
                      : "text-gray-100 font-semibold hover:text-white hover:no-underline text-base"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple burger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"

            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4 list-none">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "block text-blue-600 font-semibold"
                      : "block text-gray-700 hover:text-blue-600"
                  }
                  onClick={() => setIsOpen(false)} // close menu after click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}