// /lottery/[slug]
import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import ResultsData from "@/app/components/lottery/results/ResultsData";
import { lotteries, isLotteryExists } from "@/lib/global";

export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!slug || !isLotteryExists(slug)) {
    return { title: "Lotteries | LottoMetrics" };
  }

  const lottery = lotteries.find(el => el.slug === slug);
  const lotteryName = lottery?.label ?? slug;
  
  return {
    title: `${lotteryName} Lottery Results | LottoMetrics`,
    description: `View official ${lotteryName} lottery results and archives with LottoMetrics. Explore past draws, winning numbers, and detailed statistics to better understand ${lotteryName} patterns.`,
    alternates: { canonical: `https://www.lottometrics.app/lottery/${slug}`},
    keywords: [
      `${lotteryName} results`,
      `${lotteryName} lottery results`,
      `${lotteryName} winning numbers`,
      `${lotteryName} draw archives`,
      "lottery statistics",
      "lotto metrics",
      "lottery analysis",
    ],
    openGraph: {
      title: `${lotteryName} Lottery Results | LottoMetrics`,
      description: `Discover official ${lotteryName} results, winning numbers, and historical draw archives with LottoMetrics.`,
      url: `https://lottometrics.app/lottery/${slug}`,
      siteName: "LottoMetrics",
      type: "website",
      // images: [
      // {
      //   url: "https://lottometrics.app/og-results.png",
      //   width: 1200,
      //   height: 630,
      //   alt: `${name} Lottery Results Preview`,
      // },
    // ],
    },
    twitter: {
      card: "summary",
      title: `${lotteryName} Lottery Results | LottoMetrics`,
      description: `Check official ${lotteryName} results, winning numbers, and archives with LottoMetrics.`,
    },
  };
}

export default function LotteryResultsPage({ params }) {
  const { slug } = params;
  if (!slug || !isLotteryExists(slug)) {
    return <p>Select a Lottery</p>;
  }

  const lottery = lotteries.find(el => el.slug === slug);
  const lotteryName = lottery?.label ?? slug;

  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Lotteries", href: "/lotteries"},
        { label: lotteryName},
      ]} /> 
      <ResultsData slug={slug} />
    </>  
  )
}
