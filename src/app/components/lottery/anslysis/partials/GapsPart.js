import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate";
import { buildGapsSeries } from "@/utils/analysisUtils";
import RhythmCard from "@/app/components/elements/cards/RhythmCard";

export default function GapsPart({gaps}) {
    const { numberKind, period } = useDashboard();
    const gapsSeries = buildGapsSeries(gaps);

    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700">
                Lottery Number Gaps & Rhythm: {formatDate(period.startDate)} - {formatDate(period.endDate)} · {numberKind === 'main' ? 'Main' : 'Extra'} Numbers
            </h2>
            <p className="text-xs mb-4">
                These data show the number of skips between draws for the selected period
            </p>
            <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-lg p-3 flex flex-wrap gap-1">
                {gapsSeries.map((el, ix) => (
                    <RhythmCard key={ix} item={el} /> 
                ))}
            </div>
        </div>                
    )
}