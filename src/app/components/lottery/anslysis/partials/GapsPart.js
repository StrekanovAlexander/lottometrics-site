import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate";
import { computeGaps } from "@/utils/analysisUtils";
import RhythmCard from "@/app/components/elements/cards/RhythmCard";

export default function GapsPart({windowDraws, hits}) {
    const { numberKind, period } = useDashboard();
    const gapsSeries = computeGaps(hits, windowDraws)

    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700">
                Lottery Number Gaps & Rhythm: {formatDate(period.startDate)} - {formatDate(period.endDate)} · {numberKind === 'main' ? 'Main' : 'Extra'} Numbers
            </h2>
            <p className="text-xs mb-4">
                These data show the number of skips between draws for the selected period
            </p>
            <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-lg p-3 flex flex-wrap gap-1">
                {gapsSeries.filter(el => el.gaps.length > 1).map((el, ix) => (
                    <RhythmCard key={ix} item={el} /> 
                ))}
            </div>
        </div>                
    )
}