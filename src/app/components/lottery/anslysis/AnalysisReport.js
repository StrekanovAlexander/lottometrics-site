import { ChartColumn } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import AnalysisBar from "./AnalysisBar";
import FrequencyPart from "./partials/FrequencyPart";
import GapsPart from "./partials/GapsPart";

export default function AnalysisReport({calculatedData, windowDraws, hits}) {
    const { sortBy, selectedNumber } = useDashboard();

    if (sortBy === 'value') {
        calculatedData.sort((a, b) => b.hits_count - a.hits_count);    
    } else {
        calculatedData.sort((a, b) => a.draw_number - b.draw_number);
    }

    const freqData = calculatedData.filter(el => el.hits_count > 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <AnalysisBar/>
                <FrequencyPart freqData={freqData} />
                <GapsPart windowDraws={windowDraws} hits={hits} />
            </div>
            <div>
                {!selectedNumber && 
                    <button
                        class="bg-graphite hover:bg-graphite-dark rounded-md shadow-md text-sm
                            font-semibold text-gray-100 hover:text-white hover:shadow-lg transition px-4 py-2
                            flex items-center gap-1"
                    >
                        <ChartColumn size={16} />
                        Select Number for Analysis
                    </button>
                }
                {/* <FrequencyCategoriesPart calculatedData={calculatedData} /> */}
            </div>
        </div>
    )
}
