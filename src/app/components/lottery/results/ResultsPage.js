import { lotteries } from "@/lib/global";
import Breadcrumbs from "../../../components/layout/Breadcrumb";
import ResultsBar from "./ResultsBar";
import ResultsTable from "./ResultsTable";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function ResultsPage({slug}) {
  const lottery = lotteries.filter(el => el.slug === slug)[0].label;

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Lotteries", href: "/lotteries"},
        { label: `${lottery}`, href: `/lottery/${slug}/results`},
        { label: "Results"},
      ]} />    

      <h1 className={`${inter.className} text-2xl md:text-3xl font-bold text-graphite mb-8`}>
        Lottery "{lottery}" Results
      </h1>
      <ResultsBar slug={slug} />
      <ResultsTable />
    </div>
  )
}