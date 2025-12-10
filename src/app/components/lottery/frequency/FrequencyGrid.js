"use client";
import { useEffect, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import { heatMapAsc } from "@/utils/lotteryUtils";

export default function FrequencyGrid({slug}) {
    const { setDrawsCount, period, lottery, setLottery } = useDashboard();
    const [main, setMain] = useState([]);
    const [extra, setExtra] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSortMain, setIsSortMain] = useState(false);
    const [isSortExtra, setIsSortExtra] = useState(false);

    if (!lottery) {
        setLottery(slug)
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(
                    `/api/dashboard/lotteries/${slug}/analysis/frequency?start=${period.startDate}&end=${period.endDate}`);
                const {recordCount, rows} = await res.json();
                const mainNumbers = rows.filter(el => el.number_kind === 'main').map(el => ({
                    number: el.draw_number,
                    freq: el.frequency,
                }));
                const extraNumbers = rows.filter(el => el.number_kind === 'extra').map(el => ({
                    number: el.draw_number,
                    freq: el.frequency,
                }));
                setMain(mainNumbers);
                setExtra(extraNumbers);
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

    const freqsMain = main.map(f => f.freq);
    const minFreqMain = Math.min(...freqsMain);
    const maxFreqMain = Math.max(...freqsMain);

    const freqsExtra = extra.map(f => f.freq);
    const minFreqExtra = Math.min(...freqsExtra);
    const maxFreqExtra = Math.max(...freqsExtra);

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6">
                <div className="inline-block p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="py-2 text-sm text-left border-b flex justify-between items-center">
                        <h2>Main Numbers</h2>
                        <button
                            onClick={() => {
                                isSortMain ? main.sort((a, b) => a.number - b.number)
                                  : main.sort((a, b) => b.freq - a.freq);
                                setIsSortMain(!isSortMain);
                            }} 
                            className="px-2 py-1 border rounded-md shadow-md flex gap-1 items-center">
                            <ArrowUpDown size={12} />
                        </button>
                    </div>
                    <div className="grid grid-cols-10 gap-1 pt-2">
                        {main.map(({ number, freq }) => {
                            const bgColor = heatMapAsc(freq, minFreqMain, maxFreqMain);
                            return (
                            <div
                                key={number}
                                className={`${bgColor} min-w-8 flex flex-col gap-1 rounded-md items-center p-2`}
                            >
                                <span className="font-bold">{number}</span>
                                <span className="text-xs">{freq}</span>
                            </div>
                            );
                        })}
                    </div>
                </div>    
                <div className="inline-block p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="py-2 text-sm text-left border-b flex justify-between items-center">
                        <h2>Extra Numbers</h2>
                        <button
                            onClick={() => {
                                isSortExtra ? extra.sort((a, b) => a.number - b.number)
                                  : extra.sort((a, b) => b.freq - a.freq);
                                setIsSortExtra(!isSortExtra);
                            }} 
                            className="px-2 py-1 border rounded-md shadow-md flex gap-1 items-center">
                            <ArrowUpDown size={12} />
                        </button>
                    </div>
                    <div className="grid grid-cols-10 gap-1 pt-2">
                        {extra.map(({ number, freq }) => {
                            const bgColor = heatMapAsc(freq, minFreqExtra, maxFreqExtra);
                            return (
                            <div
                                key={number}
                                className={`${bgColor} min-w-8 flex flex-col gap-1 rounded-md items-center p-2`}
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
