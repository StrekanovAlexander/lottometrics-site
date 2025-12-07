"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../../components/elements/messages/Spinner"
import Error from "../../../components/elements/messages/Error";
import { formatDate } from "@/utils/formatDate";

export default function ResultsTable() {
    const { period, lottery, drawsCount, setDrawsCount } = useDashboard();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(
                    `/api/dashboard/draws?slug=${lottery}&start=${period.startDate}&end=${period.endDate}`
                );
                const draws = await res.json();
                setData(draws || []);
                setDrawsCount(draws?.length || 0); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [lottery, period, drawsCount]);

    if (error) return <Error message={error} />

    return (
        <div>
            { loading && <Spinner />} 
            <table className="inline-block max-w-[700px] bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                    <tr className="border-b">
                        <th colspan={3} className="px-4 py-2 text-sm text-left">
                            {formatDate(period.startDate)} - {formatDate(period.endDate)}
                        </th>
                    </tr>
                    <tr className="border-b border-gray-200 text-left">
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700">Date</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Main Numbers</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Extra</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(el =>
                    <tr className="border-b border-gray-100">
                        <td className="px-4 py-2 text-sm text-gray-600 font-semibold">
                            {formatDate(new Date(el.draw_date))}
                        </td>
                        <td className="px-4 py-2">
                            <div className="flex flex-nowrap gap-2">
                                {el.main_numbers.split(",").map((el, ix) => (
                                    <span
                                        key={ix}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-ball-main2 text-ball-text text-sm font-semibold"
                                    >
                                        {el}
                                    </span>
                                ))}
                            </div>
                        </td>
                        <td className="px-4 py-2">
                            <div className="flex flex-nowrap gap-2">
                                {el.extra_numbers.split(",").map((el, ix) => (
                                    <span
                                        key={ix}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-ball-extra3 text-ball-text text-sm font-semibold"
                                    >
                                        {el}
                                    </span>
                                ))}
                            </div>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )

}
