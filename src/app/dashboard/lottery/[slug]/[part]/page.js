// dashboard/lottery/[slug]/[part]
"use client";
import { redirect } from "next/navigation";
import { useDashboard } from "@/context/DashboardContext";
import { isLotteryExists, isPartExists } from "@/lib/global";
import Results from "@/app/dashboard/components/lottery/Results";

export default function LotteryPage({ params }) {
  const { setLottery, setPart } = useDashboard();
  const { slug, part } = params || {};
  
  if (!slug || !part || !isLotteryExists(slug) || !isPartExists(part) ) {
    redirect(`/dashboard/lotteries`);
  }

  setLottery(slug);
  setPart(part);

  switch (part) {
    case "results": 
      return <Results slug={slug} />;
    case "frequency":
      return <Frequency slug={slug} />;
    case "gaps":
      return <Gaps slug={slug} />;
    default:
      return <Results slug={slug} />;
  }
}
