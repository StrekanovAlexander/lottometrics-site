export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      {/* Заголовок */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Lottery Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Analytics Data
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Review</h2>
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <p className="text-gray-500">Metrics cards</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">Analytics section</h2>
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <p className="text-gray-500">Chart and tables</p>
        </div>
      </section>
    </main>
  );
}
