"use client";
import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate";

export default function PageAnalysisBar() {
    const { period, windowSize, setWindowSize, numberKind, setNumberKind } = useDashboard();
    return (
        <div className="bg-white border border-gray-300 rounded p-2 mb-6 shadow-sm">
            <div className="flex gap-2 text-sm text-gray-500">
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <label>Window Size</label>
                    <input
                        type="number"
                        onChange={(ev) => setWindowSize(ev.target.value)}
                        value={windowSize}
                        className="border border-gray-300 rounded p-1 w-20"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <label>Period</label>
                    <div className="flex gap-1">
                        <input
                            type="text"
                            value={formatDate(period.startDate)}
                            readOnly={true}
                            className="border border-gray-300 rounded p-1 w-20"
                        />
                        <input
                            type="text"
                            value={formatDate(period.endDate)}
                            readOnly={true}
                            className="border border-gray-300 rounded p-1 w-20"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <label>Number kind</label>
                    <select
                        className="border border-gray-300 rounded p-1"
                        value={numberKind}
                        onChange={(e) => setNumberKind(e.target.value)}
                    >
                        <option value="main">Main numbers</option>
                        <option value="extra">Extra numbers</option>
                    </select>
                </div>
            </div>
        </div>
    )
} 