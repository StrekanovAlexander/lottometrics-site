"use client";
import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate";

export default function AnalysisBar() {
    const { period, windowSize, setWindowSize, numberKind, 
        setNumberKind, setSelectedNumber, sortBy, setSortBy } = useDashboard();
    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-2 mb-6 shadow-sm">
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <label>Window Size</label>
                    <input
                        type="number"
                        onChange={(ev) => setWindowSize(ev.target.value)}
                        value={windowSize}
                        className="border border-gray-300 rounded p-1 w-20 text-gray-700 font-semibold text-center"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <label>Period</label>
                    <div className="flex gap-1">
                        <input
                            type="text"
                            value={formatDate(period.startDate)}
                            readOnly={true}
                            className="border border-gray-300 rounded p-1 w-20 text-gray-700 font-semibold text-center"
                        />
                        <input
                            type="text"
                            value={formatDate(period.endDate)}
                            readOnly={true}
                            className="border border-gray-300 rounded p-1 w-20 text-gray-700 font-semibold text-center"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <label>Sort By</label>
                    <select
                        className="border border-gray-300 rounded p-1 text-gray-700 font-semibold"
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value);
                        }}
                    >
                        <option value="value">Frequency</option>
                        <option value="number">Numbers</option>
                    </select>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <label>Filter</label>
                    <select
                        className="border border-gray-300 rounded p-1 text-gray-700 font-semibold"
                        value={numberKind}
                        onChange={(e) => {
                            setNumberKind(e.target.value);
                            setSelectedNumber(null);
                        }}
                    >
                        <option value="main">Main numbers</option>
                        <option value="extra">Extra numbers</option>
                  </select>
                </div>
            </div>
        </div>
    )
} 