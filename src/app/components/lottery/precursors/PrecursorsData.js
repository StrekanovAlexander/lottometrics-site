"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner";
import Error from "../../elements/messages/Error";
import { heatMap2Asc } from "@/utils/lotteryUtils";

function scaleToRange(val, oldMin = 0.01, oldMax = 0.1, newMin = 0.1, newMax = 1.0) {
    if (val <= oldMin) return newMin;
    if (val >= oldMax) return newMax;
    return newMin + ((val - oldMin) / (oldMax - oldMin)) * (newMax - newMin);
}

export default function PrecursorsData({ slug }) {
    const { lottery, setLottery, part, setPart } = useDashboard();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!lottery) setLottery(slug);
    if (!part) setPart("precursors");

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(
                    `/api/dashboard/lotteries/${slug}/analysis/precursors?window_size=50&precursor_kind=main&follower_kind=main`
                );
                const { pairs } = await res.json();
                setData(pairs ?? []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [lottery, slug]);

    if (error) return <Error message={error} />;
    if (loading) return <Spinner />;

    const xLabels = [...new Set(data.map(p => Number(p.precursor_value)))].sort((a, b) => a - b);
    const yLabels = [...new Set(data.map(p => Number(p.follower_value)))].sort((a, b) => a - b);

    const valueMap = new Map();
    for (const p of data) {
        const x = Number(p.precursor_value);
        const y = Number(p.follower_value);
        const val = Number(p.probability);
        valueMap.set(`${x}|${y}`, val);
    }

    return (
        <div className="overflow-x-auto">
            <table className="border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="border border-gray-300 p-1 text-xs"></th>
                    {xLabels.map(x => (
                    <th key={x} className="border border-gray-300 text-center text-xs p-1">
                        {x}
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {yLabels.map(y => (
                    <tr key={y}>
                    <th className="border border-gray-300 text-xs text-center p-1">{y}</th>
                    {xLabels.map(x => {
                        if (x === y) {
                        return (
                            <td key={`${x}-${y}`} className="border border-gray-300 p-2"></td>
                        );
                        }

                        const rawVal = valueMap.get(`${x}|${y}`);
                        if (rawVal === undefined) {
                        return (
                            <td key={`${x}-${y}`} className="border border-gray-300 p-2"></td>
                        );
                        }

                        let scaled = scaleToRange(rawVal, 0.01, 0.1, 0.1, 1.0).toFixed(2);
                        const bgClass = heatMap2Asc(scaled, 0.1, 1.0);
                        scaled = scaled === '1.00' ? '1.0' : '.' + scaled.split('.')[1];

                        return (
                        <td
                            key={`${x}-${y}`}
                            className={`${bgClass} border border-gray-300 p-2 text-[0.6rem] text-center text-gray-600`}
                        >
                            {scaled}
                        </td>
                        );
                    })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}