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
            <div className="flex justify-start gap-5">
                <div className="inline-block max-w-[700px] p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="py-2 text-sm text-left font-semibold border-b flex gap-1 justify-between items-center">
                        <div>Main Numbers</div>
                        <button
                            onClick={() => {
                                isSortMain ? main.sort((a, b) => a.number - b.number)
                                  : main.sort((a, b) => b.freq - a.freq);
                                setIsSortMain(!isSortMain);
                            }} 
                            className="px-2 py-1 border rounded-md shadow-md flex gap-1 items-center">
                            <ArrowUpDown size={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-10 gap-2 pt-2">
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

                <div className="inline-block max-w-[700px] p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="py-2 text-sm text-left font-semibold border-b flex gap-1 justify-between items-center">
                        <div>Extra Numbers</div>
                        <button
                            onClick={() => {
                                isSortExtra ? extra.sort((a, b) => a.number - b.number)
                                  : extra.sort((a, b) => b.freq - a.freq);
                                setIsSortExtra(!isSortExtra);
                            }} 
                            className="px-2 py-1 border rounded-md shadow-md flex gap-1 items-center">
                            <ArrowUpDown size={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-5 gap-2 pt-2">
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
