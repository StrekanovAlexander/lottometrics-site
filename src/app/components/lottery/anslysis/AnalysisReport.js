import { Info } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import AnalysisBar from "./AnalysisBar";
import FrequencyPart from "./partials/FrequencyPart";
import GapsPart from "./partials/GapsPart";
import NumberAnalysisPart from "./partials/NumberAnalysisPart";

export default function AnalysisReport({calculatedFreqs, windowDraws, hits}) {
    const { sortBy, selectedNumber } = useDashboard();

    if (sortBy === 'value') {
        calculatedFreqs.sort((a, b) => b.hits_count - a.hits_count);    
    } else {
        calculatedFreqs.sort((a, b) => a.draw_number - b.draw_number);
    }

    const freqData = calculatedFreqs.filter(el => el.hits_count > 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <AnalysisBar/>
                <FrequencyPart freqData={freqData} />
                <GapsPart windowDraws={windowDraws} hits={hits} />
            </div>
            <div>
                {!selectedNumber && 
                    <div className="flex items-start gap-3 rounded-md border border-gray-300 bg-white p-3 shadow-sm">
                        <Info size={20} className="text-gray-500 text-red-700" />
                        <p className="text-gray-700 text-sm text-red-700">
                            Select a number to begin the analysis.
                        </p>
                    </div>
                }
                {selectedNumber && <NumberAnalysisPart hits={hits} windowDraws={windowDraws} />}
            </div>
        </div>
    )
}
