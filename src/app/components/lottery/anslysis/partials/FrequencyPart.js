import { useDashboard } from "@/context/DashboardContext";
import { heatMapAsc } from "@/utils/lotteryUtils";
import { hitsCountRange } from "@/utils/analysisUtils";
import { formatDate } from "@/utils/formatDate";

export default function FrequencyPart({freqData}) {
    const { selectedNumber, setSelectedNumber, numberKind, period } = useDashboard();
    const { minHitsCount, maxHitsCount } = hitsCountRange(freqData); 
    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm">
            <h2 className="text-md font-semibold text-gray-700 mb-4">
                Lottery Number Frequency: {formatDate(period.startDate)} - {formatDate(period.endDate)}. {numberKind === 'main' ? 'Main' : 'Extra'} Numbers
            </h2>
            <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-lg p-3 flex flex-wrap gap-1">
                {freqData.map(({draw_number, hits_count}) => {
                    const bgColor = draw_number === selectedNumber 
                        ? 'bg-heatmap-active' 
                        :  heatMapAsc(hits_count, minHitsCount, maxHitsCount);
                    const fontColor = draw_number === selectedNumber ? 'text-white' : 'text-gray-700';    
                    return (
                        <button
                            onClick={() => setSelectedNumber(draw_number)}
                            key={draw_number} 
                            className={`${bgColor} w-8 h-8 flex flex-col items-center justify-center rounded-full hover:bg-blue-400 transition`}>
                            <span className={`${fontColor} text-sm font-bold leading-none`}>{draw_number}</span>
                            <span className={`${fontColor} text-xxs leading-none`}>x{hits_count}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}