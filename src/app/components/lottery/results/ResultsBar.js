import { ChartColumn } from "lucide-react";
import ResultsPeriodPart from "./partials/ResultsPeriodPart"

export default function ResultsBar({slug}) {
    return (
        <div className="bg-gray-50 mb-6 border border-gray-300 rounded-md p-1 
            flex flex-col lg:flex-row justify-start lg:justify-between gap-2">
            <ResultsPeriodPart />
            <div>
                <a
                    href={`/lottery/${slug}/analysis`}
                    className="inline-block px-4 py-2 bg-graphite text-white text-sm border font-semibold 
                        rounded-md shadow-md hover:shadow-md hover:bg-graphite-dark transition"
                >
                    <span className="flex items-center gap-1">
                        <ChartColumn size={16} />
                        Analyse Lottery
                    </span>
                </a>
            </div>
        </div>
    )
}