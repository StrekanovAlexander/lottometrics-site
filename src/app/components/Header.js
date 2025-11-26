export default function Header() {
  return (
    <header className="bg-gray-100 border-b border-gray-300 p-4">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <a href="/" className="text-xl hover:no-underline font-bold">LottoMetrics</a>
        <nav className="flex gap-6">
          <a href="/" className="text-blue-600 hover:underline">Home</a>
          <a href="/download" className="text-blue-600 hover:underline">Download</a>
          <a href="/docs" className="text-blue-600 hover:underline">Docs</a>
          <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}