"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import { frequencyColor } from "@/utils/lotteryUtils";
import { formatDate } from "@/utils/formatDate";

export default function FrequencyGrid({slug}) {
    const { setDrawsCount, period, lottery, setLottery } = useDashboard();
    const [main, setMain] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!lottery) {
        setLottery(slug)
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(
                    `/api/dashboard/lotteries/${slug}/analysis/frequency?start=${period.startDate}&end=${period.endDate}`);
                const rows = await res.json();
                const mainNumbers = rows.map(el => ({
                    number: el.draw_number,
                    freq: el.frequency,
                }));
                setMain(mainNumbers);
                setDrawsCount(rows?.length || 0); 
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

    const freqs = main.map(f => f.freq);
    const minFreq = Math.min(...freqs);
    const maxFreq = Math.max(...freqs);

    return (
        <>
            { loading && <Spinner />} 
            <div className="flex justify-start">
                <div className="inline-block max-w-[700px] p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="py-2 text-sm text-left font-semibold border-b">
                        {formatDate(period.startDate)} - {formatDate(period.endDate)}
                    </div>
                    <div className="grid grid-cols-10 gap-2 pt-2">
                        {main.map(({ number, freq }) => {
                            const bgColor = frequencyColor(freq, minFreq, maxFreq);
                            return (
                            <div
                                key={number}
                                className={`${bgColor} flex flex-col gap-1 rounded-md items-center p-2`}
                            >
                                <span className="font-bold">{number}</span>
                                <span className="text-xs">{freq}</span>
                            </div>
                            );
                        })}
                    </div>
                </div>    
            </div>
        </>
    )
} 
