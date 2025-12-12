"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
// import GapsGrid from "./GapsGrid";

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
    
    return (
        <div className="grid grid-cols-10 gap-1">
            {data.filter(el => el.pair_count > 1).map((el, ix) => (
                <div key={ix} className="flex flex-col border border-gray-300 rounded-md p-1">
                    <div className="flex justify-center gap-2 font-semibold border-b border-gray-300 pb-1">
                        <div>{el.draw_number1}</div>
                        <div>{el.draw_number2}</div>
                    </div>
                    <div className="text-sm">{el.pair_count}</div>
                </div>
            ))}
        </div>
        
    )
}