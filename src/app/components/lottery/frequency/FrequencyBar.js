"use client";
import { useDashboard } from "@/context/DashboardContext";

export default function FrequencyBar({slug}) {
    const { part, setPart, lottery, setLottery, period, setPeriod, drawsCount } = useDashboard();

    if (!lottery) {
        setLottery(slug);
    }

    if (!part) {
        setPart('frequency');
    }

    return (
        <div className="inline-block mb-6 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-wrap items-center gap-6">
                {/* Start Date */}
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-700 whitespace-nowrap">Start Date:</label>
                    <input
                        type="date"
                        value={period.startDate}
                        onChange={(ev) => setPeriod({ ...period, startDate: ev.target.value })}
                        className="px-3 py-1 rounded-md border border-gray-300 
                            focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                    />
                </div>
                {/* End Date */}
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-700 whitespace-nowrap">End Date:</label>
                    <input
                        type="date"
                        value={period.endDate}
                        onChange={(ev) => setPeriod({ ...period, endDate: ev.target.value })}
                        className="px-3 py-1 rounded-md border border-gray-300 
                            focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                    />
                </div>
                {/* Records */}
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-700 whitespace-nowrap">Draws count:</label>
                    <input
                        type="number"
                        value={drawsCount}
                        readOnly={true}
                        min="1"
                        className="w-20 px-3 py-1 rounded-md border border-gray-300 font-semibold text-center 
                            focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender"
                        placeholder="e.g. 17"
                    />
                </div>
            </div>
        </div>
    )
}