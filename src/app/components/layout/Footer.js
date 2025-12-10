import { routes } from "@/lib/global";

export default function Footer() {
  return (
    <footer className="p-4 bg-graphite-dark text-yellow mt-auto">
      <div className="flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} LottoMetrics.</p>
        <ul className="flex space-x-4">
          {routes.map(el => (
            <li key={el.href}>
              <a href={el.href} className="text-sm text-white hover:text-yellow">
                {el.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
