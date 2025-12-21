"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../../components/elements/messages/Spinner"
import Error from "../../../components/elements/messages/Error";
import ResultsBar from "./ResultsBar";
import ResultsTable from "./ResultsTable";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function ResultsData({slug}) {
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
      <h1 className={`${inter.className} text-md font-bold text-graphite`}>
        {lottery.lottery_name} Lottery Results
      </h1>
      <h2 className="text-sm mb-6">
        {lottery.country} {lottery.description_short_en}
      </h2>
      
      <ResultsBar slug={slug} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ResultsTable data={data} />
        </div>
        <div>
        </div>
      </div> 
      <p class="w-1/2 my-4 text-gray-500 text-sm text-justify">
        {lottery.description_en}
      </p> 
    </>
  )
}