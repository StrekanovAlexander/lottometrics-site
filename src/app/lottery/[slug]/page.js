// /lottery/[slug]

import ResultsPage from "@/app/components/lottery/results/ResultsPage";
import { lotteries, isLotteryExists } from "@/lib/global";

export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!slug || !isLotteryExists(slug)) {
    return { title: "Lotteries | LottoMetrics" };
  }
  const lottery = lotteries.find(el => el.slug === slug);
  const name = lottery?.label ?? slug;

  return {
    title: `${name} Lottery Results | LottoMetrics`,
    description: `View official ${name} lottery results and archives with LottoMetrics. Explore past draws, winning numbers, and detailed statistics to better understand ${name} patterns.`,
    alternates: { canonical: `https://www.lottometrics.app/lottery/${slug}`},
    keywords: [
      `${name} results`,
      `${name} lottery results`,
      `${name} winning numbers`,
      `${name} draw archives`,
      "lottery statistics",
      "lotto metrics",
      "lottery analysis",
    ],
    openGraph: {
      title: `${name} Lottery Results | LottoMetrics`,
      description: `Discover official ${name} results, winning numbers, and historical draw archives with LottoMetrics.`,
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
      title: `${name} Lottery Results | LottoMetrics`,
      description: `Check official ${name} results, winning numbers, and archives with LottoMetrics.`,
    },
  };
}

export default function LotteryResultsPage({ params }) {
  const { slug } = params;
  if (!slug || !isLotteryExists(slug)) {
    return <p>Select a Lottery</p>;
  }

  return (
    <ResultsPage slug={slug} />  
  )
}
