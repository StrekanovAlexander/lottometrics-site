// FrequencyGrid.js
"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import { useEffect, useState } from "react";
import { getFrequencyColor } from "@/utils/lotteryUtils";

export default function FrequencyGrid() {
  const { setRecordCount, lotterySlug, period } = useAnalytics();
  const [frequencyData, setFrequencyData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          `/api/lotteries/${lotterySlug}/analysis/frequency?start=${period.startDate}&end=${period.endDate}`,          
          {
            cache: "no-store",
          }
        );
        const { rows } = await res.json();
        const formatted = rows.map(item => ({
          number: item.draw_number,
          freq: item.frequency,
        }));
        setFrequencyData(formatted);
        setRecordCount(rows?.length || 0); 
      } catch (err) {
        console.error("Error loading draws:", err);
      }
    }
    loadData();
  }, [lotterySlug, period, setRecordCount]);

  const freqs = frequencyData.map(f => f.freq);
  const minFreq = Math.min(...freqs);
  const maxFreq = Math.max(...freqs);

  return (
    <div className="grid grid-cols-10 gap-2">
      {frequencyData.map(({ number, freq }) => {
        const bgColor = getFrequencyColor(freq, minFreq, maxFreq);
        return (
          <div
            key={number}
            className={`flex flex-col items-center justify-center rounded-md py-2 px-3 ${bgColor}`}
          >
            <span className="font-bold">{number}</span>
            <span className="text-xs">{freq}</span>
          </div>
        );
      })}
    </div>
  );
}