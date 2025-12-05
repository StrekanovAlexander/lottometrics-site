// dashboard/lotteries
"use client";
import { useEffect, useState } from "react";
import Spinner from "../components/elements/messages/Spinner"
import Error from "../components/elements/messages/Error";
import Breadcrumbs from "../components/layout/Breadcrumb";
import LotteryCard from "../components/elements/cards/LotteryCard";

export default function LotteriesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/dashboard/lotteries");
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
  
    return (
        <div>
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Lotteries" },
            ]} />    

            <h1 className="text-3xl md:text-4xl font-extrabold text-graphite mb-8">
                Lotteries Overview
            </h1>

            { loading && <Spinner />}    
                       
            <div className="grid gap-6 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-6"
            >
                {data.map((el) => (
                    <LotteryCard key={el.id} lottery={el} />
                ))} 
            </div>
        </div>
    )
}