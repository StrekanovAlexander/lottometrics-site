import { Table2 } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import AnalysisPeriodPart from "./partials/AnalysisPeriodPart"

export default function AnalysisBar({slug}) {
    const { numberKind, setNumberKind, setSelectedNumber, sortBy, setSortBy } = useDashboard();
    return (
        <div className="bg-gray-50 mb-6 border border-gray-300 rounded-md p-1 
            flex flex-col lg:flex-row justify-start lg:justify-between gap-2">
            <div className="flex flex-col md:flex-row gap-2">
                <AnalysisPeriodPart />
                <div className="flex items-center text-xs gap-2">
                    <span>Sort By</span>
                    <select
                        className="border border-gray-300 rounded p-0.5 text-gray-700 font-semibold"
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value);
                        }}
                    >
                        <option value="value">Frequency</option>
                        <option value="number">Numbers</option>
                    </select>

                    <span>Filter</span>
                    <select
                        className="border border-gray-300 rounded p-0.5 text-gray-700 font-semibold"
                        value={numberKind}
                        onChange={(e) => {
                            setNumberKind(e.target.value);
                            setSelectedNumber(null);
                        }}
                    >
                        <option value="main">Main numbers</option>
                        <option value="extra">Extra numbers</option>
                    </select>    
                </div>
            </div>
            <div>
                <a
                    href={`/lottery/${slug}`}
                    className="inline-block px-4 py-2 bg-graphite text-white text-sm border font-semibold 
                        rounded-md shadow-md hover:shadow-md hover:bg-graphite-dark transition"
                >
                    <span className="flex items-center gap-1">
                        <Table2 size={16} />
                        Lottery Results
                    </span>
                </a>
            </div>
        </div>
    )
}
