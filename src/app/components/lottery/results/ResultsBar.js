"use client";
import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate";

export default function ResultsBar({slug}) {
    const { lottery, setLottery, period, setPeriod, drawsCount } = useDashboard();

    if (!lottery) {
        setLottery(slug);
    }
    
    return (
        <div className="inline-block mb-6 p-3 bg-white text-sm rounded-lg shadow-sm border border-gray-200">
            <div className="mb-2">
                <span className="text-gray-700">Period:</span>&nbsp; 
                <span className="font-semibold text-black">{formatDate(period.startDate)} - {formatDate(period.endDate)}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">    
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-700 whitespace-nowrap">Start:</label>
                    <input
                        type="date"
                        value={period.startDate}
                        onChange={(ev) => setPeriod({ ...period, startDate: ev.target.value })}
                        className="p-1 rounded-md border border-gray-300 text-gray-500"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-gray-700 whitespace-nowrap">End:</label>
                    <input
                        type="date"
                        value={period.endDate}
                        onChange={(ev) => setPeriod({ ...period, endDate: ev.target.value })}
                        className="p-1 rounded-md border border-gray-300 text-gray-500"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-gray-700">Draws:</label>
                    <input
                        type="number"
                        value={drawsCount}
                        readOnly={true}
                        min="1"
                        className="w-20 px-2 py-1 rounded-md border border-gray-300 text-center"
                    />
                </div>
            </div>
        </div>
    )
}