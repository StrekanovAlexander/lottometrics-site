import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate";

export default function AnalysisPeriodPart() {
    const {period, windowSize, setWindowSize} = useDashboard();
    return (
        <div className="flex flex-col gap-2 lg:flex-row text-xs">
            <div className="flex gap-2">
                <div className="flex items-center gap-2">
                    <span>Window Size</span>
                    <input
                        type="number"
                        onChange={(ev) => setWindowSize(ev.target.value)}
                        value={windowSize}
                        className="border border-gray-300 rounded p-1 w-20 text-gray-700 font-semibold text-center"
                    />
                    <div className="bg-white font-semibold border rounded-md px-2 py-1">
                        {formatDate(period.startDate)}
                    </div>
                    <div className="bg-white font-semibold border rounded-md px-2 py-1">
                        {formatDate(period.endDate)}
                    </div>
                </div>
            </div>
        </div>
    )
} 