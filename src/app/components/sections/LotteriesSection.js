"use client";

import { useEffect, useState } from "react";
import CardCTA from "../ui/CardCTA";

export default function LotteriesSection() {
  const [lotteries, setLotteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLotteries = async () => {
      try {
        const res = await fetch("/api/lotteries/latest");
        if (!res.ok) {
          throw new Error("Failed to fetch lotteries");
        }
        const data = await res.json();
        setLotteries(data.lotteries);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLotteries();
  }, []);

  if (loading) {
    return <p className="text-center">Loading lotteries...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  return (
    <section id="lotteries">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {lotteries.map(lottery => (
          <CardCTA key={lottery.id} lottery={lottery} />
        ))}
      </div>
    </section>
  );
}
