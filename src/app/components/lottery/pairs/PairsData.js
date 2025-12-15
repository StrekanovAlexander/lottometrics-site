"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import PairCard from "../../elements/cards/PairCard";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import { heatMapAsc } from "@/utils/lotteryUtils";

export default function PairsData({slug}) {
    const { setDrawsCount, period, lottery, setLottery, part, setPart } = useDashboard();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!lottery) {
        setLottery(slug);
    }

    if (!part) {
        setPart("pairs");
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(
                    `/api/dashboard/lotteries/${slug}/analysis/pairs?start=${period.startDate}&end=${period.endDate}`);
                const {recordCount, rows} = await res.json();
                setData(rows);
                setDrawsCount(recordCount); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
        }, [lottery, period, setDrawsCount]
    );

    if (error) return <Error message={error} />
    if (loading) return <Spinner /> 

    const main = data.filter(el => el.pair_count > 1).map(el => el.pair_count);
    const min = Math.min(...main);
    const max = Math.max(...main);
    
    return (
        <div className="grid grid-cols-10 gap-1">
            {data.filter(el => el.pair_count > 1).map((el, ix) => {
                const bgColor = heatMapAsc(el.pair_count, min, max);
                return (
                    <PairCard key={ix} item={el} bgColor={bgColor} />
                )
            })}
        </div>
        
    )
}