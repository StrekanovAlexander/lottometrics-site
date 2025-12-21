import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate";

export default function ResultsPeriodPart() {
    const { period, setPeriod, drawsCount } = useDashboard();
    return (
        <div className="flex flex-col gap-2 lg:flex-row text-xs">
            <div className="flex gap-2">
                <div className="flex items-center gap-2">
                    <span className="w-8">Period</span>
                    <div className="bg-white font-semibold border rounded-md px-2 py-1">
                        {formatDate(period.startDate)}
                    </div>
                    <div className="bg-white font-semibold border rounded-md px-2 py-1">
                        {formatDate(period.endDate)}
                    </div>
                </div>
                <div className="flex items-center gap-2">    
                    <span className="w-8">Draws</span>
                    <div className="bg-white font-semibold border rounded-md px-4 py-1">{drawsCount}</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-8">Start</span>
                <input
                    type="date"
                    value={period.startDate}
                    onChange={ev => setPeriod({ ...period, startDate: ev.target.value })}
                    className="border border-gray-300 rounded p-1 text-gray-500 text-center"
                />
                <input
                    type="date"
                    value={period.endDate}
                    onChange={ev => setPeriod({ ...period, endDate: ev.target.value })}
                    className="border border-gray-300 rounded p-1 text-gray-500 text-center"
                />
            </div>
        </div>
    )
} 