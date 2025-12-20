import { BarChart2 } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import { heatMapAsc } from "@/utils/lotteryUtils";
import { hitsCountRange } from "@/utils/analysisUtils";
import { formatDate } from "@/utils/formatDate";

export default function FrequencyPart({freqData}) {
    const { selectedNumber, setSelectedNumber, numberKind, period } = useDashboard();
    const { minHitsCount, maxHitsCount } = hitsCountRange(freqData); 
    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm mb-6">
            <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-300 
                    flex items-center justify-center shadow-sm"
                >
                    <BarChart2 size={16} className="text-gray-700" />
                </div>
                <div>
                    <h2 className="text-sm font-bold text-gray-700">
                        Lottery Number Frequency: {formatDate(period.startDate)} - {formatDate(period.endDate)} · {numberKind === 'main' ? 'Main' : 'Extra'} Numbers
                    </h2>
                    <p className="text-xs">
                        These data show how often each number appeared during the selected period
                    </p>
                </div>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-md p-3 flex flex-wrap gap-1">
                {freqData.map(({draw_number, hits_count}) => {
                    const bgColor = draw_number === selectedNumber 
                        ? 'bg-heatmap-active' 
                        :  heatMapAsc(hits_count, minHitsCount, maxHitsCount);
                    const fontColor = 'text-gray-700';    
                    return (
                        <button
                            onClick={() => setSelectedNumber(draw_number)}
                            key={draw_number} 
                            className={`${bgColor} w-8 h-8 flex flex-col items-center justify-center rounded-full hover:bg-heatmap-active transition`}>
                            <span className={`${fontColor} text-sm font-bold leading-none`}>{draw_number}</span>
                            <span className={`${fontColor} text-xxs leading-none`}>x{hits_count}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}