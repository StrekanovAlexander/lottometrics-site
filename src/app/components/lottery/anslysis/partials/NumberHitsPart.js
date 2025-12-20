import { useDashboard } from "@/context/DashboardContext";
import NumberHitsChart from "./NumberHitsChart";

export default function NumberHitsPart({numberHits, windowDraws}) {
    const { selectedNumber } = useDashboard();
    return (
        <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-md p-3">
            <h3 className="text-gray-900 text-sm font-semibold mb-4 flex items-center gap-1">
                Number 
                <span
                    className={`bg-heatmap-active w-6 h-6 flex items-center justify-center 
                        rounded-full text-sm font-bold`}
                >
                    {selectedNumber} 
                </span>
                
                <span className="text-gray-500">
                    Hit Rhythm and Timing Pattern
                </span>
            </h3>
            {numberHits.length > 0 && 
                <NumberHitsChart numberHits={numberHits} windowDraws={windowDraws} />
            }
        </div>
    )
}