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
        const res = await fetch("/api/lotteries/latest", {
          // next: { revalidate: 60 }, 
        });
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
    <section className="mb-16 mx-5 md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {lotteries.map(lottery => (
          <CardCTA key={lottery.id} lottery={lottery} />
        ))}
      </div>
    </section>
  );
}
