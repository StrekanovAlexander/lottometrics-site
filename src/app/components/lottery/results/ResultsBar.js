"use client";
import { ChartColumn } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate";

export default function ResultsBar({slug}) {
    const { lottery, setLottery, period, setPeriod, drawsCount } = useDashboard();

    if (!lottery) {
        setLottery(slug);
    }
    
    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-2 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:justify-between gap-1 text-gray-500">
                <div className="flex-1 flex flex-col md:flex-row gap-2 text-sm">
                    <div className="flex justify-start gap-2">
                        <div className="flex items-center gap-2">
                            <label>Period</label>
                            <div className="space-x-2">
                                <input
                                    type="text"
                                    value={formatDate(period.startDate)}
                                    readOnly={true}
                                    className="border border-gray-300 rounded p-1 w-24 text-gray-700 font-semibold text-center"
                                />
                                <input
                                    type="text"
                                    value={formatDate(period.endDate)}
                                    readOnly={true}
                                    className="border border-gray-300 rounded p-1 w-24 text-gray-700 font-semibold text-center"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <label>Draws</label>
                            <input
                                type="text"
                                value={drawsCount}
                                readOnly={true}
                                className="border border-gray-300 rounded p-1 w-16 text-gray-700 font-semibold text-center"
                            />
                        </div>
                    </div>
                    <div className="flex justify-start gap-2">
                        <div className="flex items-center gap-2">
                            <label>Start</label>
                            <div className="flex gap-1">
                                <input
                                    type="date"
                                    value={period.startDate}
                                    onChange={(ev) => setPeriod({ ...period, startDate: ev.target.value })}
                                    className="border border-gray-300 rounded p-1 text-gray-500 text-center"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <label>End</label>
                            <div className="flex gap-1">
                                <input
                                    type="date"
                                    value={period.endDate}
                                    onChange={(ev) => setPeriod({ ...period, endDate: ev.target.value })}
                                    className="border border-gray-300 rounded p-1 text-gray-500 text-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href={`/lottery/${slug}/analysis`}
                    className="inline-block px-4 py-2 bg-graphite text-white text-sm border font-semibold 
                        rounded-md shadow-md hover:shadow-md hover:bg-graphite-dark transition"
                >
                    <span className="flex justify-center items-center gap-2">
                        <ChartColumn size={16} />
                        Analyse Lottery
                    </span>
                </a>
            </div>
        </div>
    )
}