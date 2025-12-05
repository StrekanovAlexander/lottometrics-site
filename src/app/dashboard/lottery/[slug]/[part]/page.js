// dashboard/lottery/[slug]/[part]
"use client";
import { redirect } from "next/navigation";
import { useDashboard } from "@/context/DashboardContext";
import Results from "@/app/dashboard/components/lottery/Results";

const parts = ["results", "frequency", "gaps"];
const slugs = ["lotto6aus49", "powerball", "euromillions", "megamillions", "eurojackpot", "uknationallottery"];

export default function LotteryPage({ params }) {
  const { setLottery, setPart } = useDashboard();
  const { slug, part } = params || {};
  
  if (!slug || !part || !slugs.includes(slug) || !parts.includes(part) ) {
    redirect(`/dashboard/lottery`);
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
