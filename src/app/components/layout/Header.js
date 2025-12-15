"use client";
import { usePathname } from 'next/navigation';
import NavMobile from "../../components/layout/NavMobile";
import SidebarMobile from "./SidebarMobile";
import { routes } from "@/lib/global";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 p-4 bg-graphite-dark shadow-sm flex justify-between items-center z-50">
      <a href="/" className="text-yellow font-semibold flex items-center gap-2">
        <img src="/images/logo/Lottometrics_Logo_128.png" class="h-4 md:h-4 lg:h-6 w-auto" />
        LottoMetrics
      </a>
      {/* Desktop nav */}
      <ul className="hidden md:flex space-x-6">
        {routes.map(el => {
          const isActive = pathname === el.href;
          return (
            <li key={el.href}>
              <a
                href={el.href}
                className={`text-sm hover:text-yellow ${
                  isActive ? 'text-yellow font-semibold' : 'text-gray-100'
                }`}
              >
                {el.label}
              </a>
            </li>
          )
        })}
      </ul>
      {/* Mobile buttons */}
      <div className="md:hidden flex">
        <SidebarMobile />
        <NavMobile />
      </div>
    </header>
  );
}