// LotteryTable.js
"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import { useEffect, useState } from "react";
import { renderTableBalls } from "@/utils/lotteryUtils";
import { formatDate } from "@/utils/formatDate";

export default function LotteryTable() {
  const { setRecordCount, lotterySlug, period } = useAnalytics();
  const [draws, setDraws] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          `/api/draws?slug=${lotterySlug}&start=${period.startDate}&end=${period.endDate}`, {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setDraws(data.draws || []);
        setRecordCount(data.draws?.length || 0); 
      } catch (err) {
        console.error("Error loading draws:", err);
      }
    }
    loadData();
  }, [lotterySlug, period, setRecordCount]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Numbers
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Extra
            </th>
          </tr>
        </thead>
        <tbody>
          {draws.map((row, i) => (
            <tr key={i} className="border-t border-gray-200">
              <td className="px-4 py-2 text-sm font-semibold text-gray-800">{formatDate(new Date(row.draw_date))}</td>
              <td className="px-4 py-2">
                <div className="flex flex-nowrap overflow-x-auto max-w-full gap-1">
                  {renderTableBalls(row.main_numbers)}
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex flex-nowrap overflow-x-auto max-w-full gap-1">
                  {renderTableBalls(row.extra_numbers, true)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}