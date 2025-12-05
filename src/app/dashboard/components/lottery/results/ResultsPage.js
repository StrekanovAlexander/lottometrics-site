import { lotteries } from "@/lib/global";
import Breadcrumbs from "../../../components/layout/Breadcrumb";
import ResultsBar from "./ResultsBar";
import ResultsTable from "./ResultsTable";

export default function ResultsPage({slug}) {
  const lottery = lotteries.filter(el => el.slug === slug)[0].label;

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Lotteries", href: "/dashboard/lotteries"},
        { label: `${lottery}`, href: `/dashboard/lottery/${slug}/results`},
        { label: "Results"},
      ]} />    

      <h1 className="text-2xl md:text-3xl font-extrabold text-graphite mb-8">
        Lottery "{lottery}" Results
      </h1>
      <ResultsBar />
      <ResultsTable />
    </div>
  )
}