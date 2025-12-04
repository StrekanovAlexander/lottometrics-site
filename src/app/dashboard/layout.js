export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <header className="p-4 bg-blue-600 text-white shadow">
        <h1 className="text-2xl font-bold">LottoMetrics</h1>
      </header>

      <main className="flex-1 p-8">
        {children}
      </main>

      <footer className="p-4 bg-blue-600 text-white mt-8">
        <p className="text-sm">© 2025 LottoMetrics</p>
      </footer>
    </div>
  );
}
