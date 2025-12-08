// /lotteries
"use client";
import { useEffect, useState } from "react";
import Spinner from "../elements/messages/Spinner"
import Error from "../elements/messages/Error";
import LotteryCard from "../elements/cards/LotteryCard";

export default function LotteriesData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/dashboard/lotteries/latest");
                if (!res.ok) throw new Error("Failed to fetch lotteries");
                const lotteries = await res.json();
                setData(lotteries);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) return <Error message={error} />
    if (loading) return <Spinner />
  
    return (
        <div className="grid gap-2 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((el) => (
                <LotteryCard key={el.id} lottery={el} />
            ))} 
        </div>
    )
}
