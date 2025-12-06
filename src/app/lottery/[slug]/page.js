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
    title: `${name} - Results | LottoMetrics`,
    description: `Official results and archives for ${name}.`,
    openGraph: {
      title: `${name} - Results | LottoMetrics`,
      description: `Explore draw archives and statistics for ${name}.`,
      url: `https://lottometrics.app/lottery/${slug}/results`,
      siteName: "LottoMetrics",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${name} — Results | LottoMetrics`,
      description: `Official results and archives for ${name}.`,
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
