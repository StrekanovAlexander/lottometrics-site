export default async function LotteriesPage() {
    const res = await fetch(`${process.env.BASE_URL}/api/lotteries`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        return <div>Error page</div>;
    }
    const data = await res.json();
    
    return (
    <>
      <h1 className="text-2xl font-bold mb-4">Lotteries</h1>
        {data.lotteries.map((lottery) => (
          <>
            <h2 key={lottery.id}>
              {lottery.lottery_name}
            </h2>
            {lottery.lottery_description_en}
          </>
        ))}
    </>
  );
}