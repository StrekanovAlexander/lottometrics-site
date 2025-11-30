"use client";
import { useState } from "react";
import { Calendar, BarChart3, FileText, TrendingUp, Clock } from "lucide-react";
import { formatDate, formatDateISO } from "@/utils/formatDate";

export default function Sidebar() {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const [startDate, setStartDate] = useState(formatDateISO(firstDayOfMonth));
    const [endDate, setEndDate] = useState(formatDateISO(today));
    const [activeMode, setActiveMode] = useState("records"); // default Records

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
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    placeholder="Start date"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    placeholder="End date"
                />
                </div>
                <div className="mt-3 text-sm text-gray-600 flex justify-between aling-items">
                    <span>Range</span>
                    <span className="font-bold">{formatDate(new Date(startDate))} - {formatDate(new Date(endDate))}</span>
                </div>    
            </div>
            {/* Records */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Records</h3>
                <ul className="space-y-2">
                    <li>
                        <button
                            onClick={() => setActiveMode("records")}
                            className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded font-medium text-gray-800
                            ${ activeMode === "records" ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800" }`}
                        >
                            <FileText className="w-4 h-4 text-gray-600" />
                            Records for Period
                        </button>
                    </li>
                </ul>
            </div>
            {/* Methods */}
            <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Analytics Methods</h3>
                <ul className="space-y-2">
                    <li>
                        <button 
                            onClick={() => setActiveMode("frequency")}
                            className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded font-medium text-gray-800
                            ${ activeMode === "frequency" ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800" }`}
                        >
                            <BarChart3 className="w-4 h-4 text-gray-600" />
                            Frequency
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => setActiveMode("gaps")}
                            className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded font-medium text-gray-800
                            ${ activeMode === "gaps" ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800" }`}
                        >
                            <TrendingUp className="w-4 h-4 text-gray-600" />
                            Gaps
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => setActiveMode("intervals")}
                            className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded font-medium text-gray-800
                            ${ activeMode === "intervals" ? "bg-gray-200" : "hover:bg-gray-200 text-gray-800" }`}    
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