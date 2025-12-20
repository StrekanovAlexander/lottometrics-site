import { useDashboard } from "@/context/DashboardContext";
import NumberHitsChart from "./NumberHitsChart";

export default function NumberHitsPart({numberHits, windowDraws}) {
    const { selectedNumber } = useDashboard();
    return (
        <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-md p-3">
            <h3 className="font-semibold text-sm my-2">Number {selectedNumber} Hits</h3>
            {numberHits.length > 0 && 
                <NumberHitsChart numberHits={numberHits} windowDraws={windowDraws} />
            }
        </div>
    )
}