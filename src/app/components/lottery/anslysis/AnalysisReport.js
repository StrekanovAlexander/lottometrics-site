import { useDashboard } from "@/context/DashboardContext";
import AnalysisBar from "./AnalysisBar";
import FrequencyPart from "./partials/FrequencyPart";
import FrequencyCategoriesPart from "./partials/FrequencyCategoriesPart";

export default function AnalysisReport({calculatedData, filteredData}) {
    const { numberKind, sortBy } = useDashboard();

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
            </div>
            <div>
                <FrequencyCategoriesPart calculatedData={calculatedData} filteredData={filteredData} />
            </div>
        </div>
    )
}
