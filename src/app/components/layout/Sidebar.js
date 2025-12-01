"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import { Calendar, BarChart3, FileText, TrendingUp, Clock } from "lucide-react";

export default function Sidebar({ slug }) {
    const { setLotterySlug, mode, setMode, period, setPeriod, recordCount } = useAnalytics();
    setLotterySlug(slug);
    return (
        <>
            {/* Period */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    Period
                </h3>
                <div className="space-y-2">
                <input
                    type="date"
                    value={period.startDate}
                    onChange={(e) => setPeriod({ ...period, startDate: e.target.value })}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    placeholder="Start date"
                />
                <input
                    type="date"
                    value={period.endDate}
                    onChange={(e) => setPeriod({ ...period, endDate: e.target.value })}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    placeholder="End date"
                />
                </div>
            </div>
            {/* Records */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Records</h3>
                <ul className="space-y-2">
                    <li>
                        <button
                            onClick={() => setMode("records")}
                            className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded font-medium text-gray-800
                            ${ mode === "records" ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800" }`}
                        >
                            <FileText className="w-4 h-4 text-gray-600" />
                            Records for Period
                        </button>
                    </li>
                </ul>
                <div className="flex items-center text-sm text-gray-700 my-2">
                    Selected records: {recordCount}
                </div>
            </div>
            {/* Methods */}
            <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Analytics Methods</h3>
                <ul className="space-y-2">
                    <li>
                        <button 
                            onClick={() => setMode("frequency")}
                            className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded font-medium text-gray-800
                            ${ mode === "frequency" ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800" }`}
                        >
                            <BarChart3 className="w-4 h-4 text-gray-600" />
                            Frequency
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => setMode("gaps")}
                            className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded font-medium text-gray-800
                            ${ mode === "gaps" ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800" }`}
                        >
                            <TrendingUp className="w-4 h-4 text-gray-600" />
                            Gaps
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => setMode("intervals")}
                            className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded font-medium text-gray-800
                            ${ mode === "intervals" ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800" }`}    
                        >
                            <Clock className="w-4 h-4 text-gray-600" />
                            Intervals
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}