// app/lottery/[slug]/analysis/page.js
import Breadcrumbs from "@/app/components/layout/Breadcrumbs";
import Sidebar from "@/app/components/layout/Sidebar";
import AnalysisContent from "@/app/components/analysis/AnalysisContent";
import SelectLotteryBtn from "@/app/components/ui/SelectLotteryBtn";
import { Anton } from "next/font/google";
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { slug } = params;
  const response = await fetch(`${process.env.BASE_URL}/api/lotteries/${slug}/analysis`, {
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
  const isoCode = data[0]?.iso_code;
  const description = data[0]?.description_en;

  return {
    title: `${lotteryName} Lottery Analysis - LottoMetrics`,
    description: description || `Explore ${lotteryName} analytics with LottoMetrics — number frequency and transparent insights.`,
    keywords: [
      `${lotteryName} analysis`,
      `${lotteryName} lottery statistics`,
      `number frequency ${lotteryName}`,
      "lotto metrics",
    ],
  };
}

export default async function LotteryAnalysisPage({ params }) {
  const { slug } = params;

  const response = await fetch(`${process.env.BASE_URL}/api/lotteries/${slug}/analysis`, {
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
  const isoCode = data[0]?.iso_code;
  const description = data[0]?.description_en;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Lotteries", href: "/lotteries" },
          { label: lotteryName, href: `/lottery/${slug}` },
          { label: "Analysis" },
        ]}
      />
      {/* Header */}
      <section className="flex justify-between items-center py-8 px-6 bg-gray-100 mb-8">
        <div>
          <h1 className={`${anton.className} text-3xl font-bold text-gray-800`}>
            {lotteryName} Lottery Analysis
          </h1>
          <p className="text-gray-600 font-semibold">
            Explore frequency, gaps, and interval statistics for your selected lottery.
          </p>
        </div>
        <SelectLotteryBtn />
      </section>
      {/* Container */} 
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-80 bg-gray-50 p-6 mb-6 md:mb-0">
          <Sidebar slug={slug} />
        </aside>
        <AnalysisContent />
      </div>
    </>
  );
}
