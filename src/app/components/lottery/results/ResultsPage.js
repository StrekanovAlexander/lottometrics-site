"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../../components/elements/messages/Spinner"
import Error from "../../../components/elements/messages/Error";
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
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Lotteries", href: "/lotteries"},
        { label: `${lottery.lottery_name}`},
      ]} />  
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <section className="mb-6">
            <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
              {lottery.lottery_name} Lottery
            </h1>
            <h2 className="font-semibold">
              {lottery.country} {lottery.description_short_en}
            </h2>
            <p class="mt-2 text-gray-700 text-sm">
              {lottery.description_en}
            </p>
          </section>
          <h3 className={`${inter.className} my-6 text-lg font-semibold`}>
            {lottery.lottery_name} Results & Winning Numbers
          </h3>
          <ResultsBar slug={slug} />
          <ResultsTable data={data} />
        </div>
      </div>    
    </>
  )
}