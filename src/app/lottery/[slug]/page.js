// app/lottery/[slug]/page.js
import Link from "next/link";
import Breadcrumbs from "@/app/components/layout/Breadcrumbs";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const response = await fetch(`${process.env.BASE_URL}/api/lottery/${slug}`, {
    cache: "no-store",
  });
  const { data } = await response.json();

  if (!data || data.length === 0) {
    return {
      title: "Unknown Lottery Analysis - LottoMetrics",
      description: "Explore honest lottery analytics with LottoMetrics.",
      keywords: ["lottery analysis", "lotto metrics", "number frequency", "lottery statistics"],
    };
  }

  const lotteryName = data[0]?.lottery_name;
  const country = data[0]?.country;
  const descriptionShortEn = data[0]?.description_short_en;
  const descriptionEn = data[0]?.description_en;

  return {
    title: `${descriptionShortEn} ${lotteryName} ${country} - LottoMetrics`,
    description: `Explore ${descriptionShortEn} ${lotteryName} from ${country} with LottoMetrics - official archives and transparent statistics.`,
        keywords: [
            `${descriptionShortEn} ${lotteryName}`,
            `${descriptionShortEn} ${lotteryName} description`,
            `${lotteryName} ${country} results`,
            `${lotteryName} statistics`,
            "lotto metrics",
        ],
    };
}

export default async function LotteryPage({ params }) {
  const { slug } = params;

  const response = await fetch(`${process.env.BASE_URL}/api/lottery/${slug}`, {
    cache: "no-store",
  });
  const { data } = await response.json();

   if (!data || data.length === 0) {
    return (
      <section className="w-full">
        <Breadcrumbs
            items={[
                { label: "Home", href: "/" },
                { label: "Lotteries", href: "/lotteries" },
                { label: "Unknown Lottery" },
            ]}
        />
        <h1 className="text-2xl font-bold mb-6">Unknown Lottery</h1>
      </section>
    );
  }

  const lotteryName = data[0]?.lottery_name;
  const country = data[0]?.country;
  const descriptionShortEn = data[0]?.description_short_en;
  const descriptionEn = data[0]?.description_en;

  return (
    <>
        <Breadcrumbs
            items={[
                { label: "Home", href: "/" },
                { label: "Lotteries", href: "/lotteries" },
                { label: lotteryName },
            ]}
        />

        <section className="bg-gray-50 py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {lotteryName}
                </h1>
                <p className="text-sm text-gray-500 mb-4">
                    Country: {country}
                </p>
                <p className="text-gray-700 mb-4">
                    {descriptionShortEn}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                    {descriptionEn}
                </p>
                <div className="text-center">
                    <Link
                        href={`/lottery/${slug}/analysis`} 
                        className="inline-block px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                            Analyze Lottery
                    </Link>
                </div>
            </div>
        </section>
    </>
    );
}
