export default function Footer() {
  return (
    <footer className="p-4 bg-graphite-dark text-lightgray mt-auto">
      <div className="flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} LottoMetrics.</p>
        <nav className="flex space-x-4">
          <a href="/about" className="hover:text-lavender">About</a>
          <a href="/contact" className="hover:text-mint">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
