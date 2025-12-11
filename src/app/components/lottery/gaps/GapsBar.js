import { useDashboard } from "@/context/DashboardContext";

export default function GapsBar() {
    const { showZero, setShowZero } = useDashboard();
    return (
        <label className="inline-flex items-center space-x-2 cursor-pointer mb-8">
            <input
                onChange={() => setShowZero(!showZero)}
                type="checkbox"
                className="form-checkbox h-4 w-4 accent-graphite bg-graphite-light border-graphite focus:ring-graphite rounded"
            />
            <span className="text-gray-700 text-sm">All Results</span>
        </label>
    )
}