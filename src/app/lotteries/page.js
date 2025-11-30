import Link from "next/link";
import Breadcrumbs from "@/app/components/layout/Breadcrumbs";

export default async function LotteriesPage() {
    const response = await fetch(`${process.env.BASE_URL}/api/lotteries`, {cache: "no-store"} );
    if (!response.ok) {
        return <div>Error page</div>;
    }
    const data = await response.json();
    return (
      <section className="w-full">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Lotteries" },
          ]}
        />
        <h1 className="text-4xl font-bold mb-6 text-center">Lotteries</h1>
        {data.lotteries.map((el) => (
        <div key={el.id} className="mb-8">
          <h2 className="text-3xl font-semibold py-2">{el.lottery_name}</h2>
          <p className="text-gray-700 mb-2">{el.description_en}</p>
          <Link
            href={`/lottery/${el.slug}/analysis`}
            className="px-4 py-2 bg-black text-white rounded hover:no-underline hover:shadow-lg"
          >
            Analyze Lottery
          </Link>
        </div>
      ))}
    </section>
  );
}