"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../../components/elements/messages/Spinner"
import Error from "../../../components/elements/messages/Error";


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
  const { period, drawsCount, setDrawsCount } = useDashboard();
  const [data, setData] = useState([]);
  const [lottery, setLottery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          `/api/dashboard/draws?slug=${slug}&start=${period.startDate}&end=${period.endDate}`
        );
        const {lott, draws} = await res.json();
        setLottery(lott || []);
        setData(draws || []);
        setDrawsCount(draws?.length || 0); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [slug, period, drawsCount]);

  if (error) return <Error message={error} />
  if (loading) return <Spinner />

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Lotteries", href: "/lotteries"},
        { label: `${lottery.lottery_name}`},
      ]} />  
      <section class="w-3/4">
        <h1 className={`${inter.className} text-xl md:text-2xl font-bold text-graphite`}>
          {lottery.lottery_name} Lottery
        </h1>
        <h2 className="font-semibold">
          {lottery.country} {lottery.description_short_en}
        </h2>
        <p class="mt-4 text-gray-700 leading-relaxed">
          {lottery.description_en}
        </p>
      </section>
      <h3 className={`${inter.className} my-6 text-xl font-bold`}>
          {lottery.lottery_name} Results & Winning Numbers
      </h3>
      <ResultsBar slug={slug} />
      <ResultsTable data={data} />
    </div>
  )
}