import { TrendingUp } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import NumberHitsPart from "./NumberHitsPart";
import { formatDate } from "@/utils/formatDate";

export default function NumberAnalysisPart({hits, windowDraws}) {
    const { period, numberKind, selectedNumber } = useDashboard();
    const numberHits = hits.filter(el => el.draw_number === selectedNumber);
    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-300 
                    flex items-center justify-center shadow-sm"
                >
                    <TrendingUp size={16} className="text-gray-700" />
                </div>
                <div>
                    <h2 className="text-sm font-bold text-gray-700">
                        Selected Number Analysis: {formatDate(period.startDate)} - {formatDate(period.endDate)} · {numberKind === 'main' ? 'Main' : 'Extra'} Numbers
                    </h2>
                    <p className="text-xs">
                        These metrics highlight how often the chosen number appeared and how its intervals behaved during the selected timeframe.
                    </p>
                </div>
            </div>
            <NumberHitsPart numberHits={numberHits} windowDraws={windowDraws} />
        </div> 
    )
}