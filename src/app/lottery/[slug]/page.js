// app/lottery/[slug]/page.js
import Link from "next/link";
import Breadcrumbs from "@/app/components/layout/Breadcrumbs";
import PageTitle from "@/app/components/ui/PageTitle";

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
  const pageTitleDescription = descriptionShortEn + " " + country;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Lotteries", href: "/lotteries" },
          { label: lotteryName },
        ]}
      />

        <PageTitle title={lotteryName} description={pageTitleDescription} />
        <section className="bg-gray-50 p-8">
          <p className="text-gray-600 leading-relaxed mb-8">
            {descriptionEn}
          </p>
          <div>
            <Link
              href={`/lottery/${slug}/analysis`} 
              class="px-4 py-2 bg-white text-gray-800 font-medium rounded-md border border-gray-300 
                shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Analyze Lottery
            </Link>
          </div>
        </section>
      </>
    );
}
