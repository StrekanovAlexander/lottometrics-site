export default async function LotteriesPage() {
    const res = await fetch(`${process.env.BASE_URL}/api/lotteries`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        return <div>Error page</div>;
    }
    const data = await res.json();
    return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lotteries</h1>
      <ul className="space-y-2">
        {data.lotteries.map((lottery) => (
          <li
            key={lottery.id}
            className="border rounded p-3 hover:bg-gray-50 transition"
          >
            <div className="font-semibold">{lottery.lottery_name}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}