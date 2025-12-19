import { useDashboard } from "@/context/DashboardContext";
import NumbersCard from "../../elements/cards/NumbersCard";
import { heatMapAsc } from "@/utils/lotteryUtils";
import { hitsCountRange } from "@/utils/analysisUtils";

export default function AnalysisGrid({data}) {
    const { numberKind, selectedNumber, setSelectedNumber, sortBy } = useDashboard();

    if (sortBy === 'value') {
        data.sort((a, b) => b.hits_count - a.hits_count);    
    } else {
        data.sort((a, b) => a.draw_number - b.draw_number);
    }

    const freqData = data.filter(el => el.hits_count > 0);
    const { minHitsCount, maxHitsCount } = hitsCountRange(freqData); 

    const missedNumbers = data.filter(el => el.hits_count === 0).map(el => el.draw_number);
    const hotNumbers = data.filter(el => el.category === 'hot').map(el => el.draw_number);
    const coldNumbers = data.filter(el => el.category === 'cold').map(el => el.draw_number);
    const middleNumbers = data.filter(el => el.category === 'middle').map(el => el.draw_number);

    return (
        <>
            <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Lottery Number Frequency (Selected Period) - {numberKind === 'main' ? 'Main' : 'Extra'} Numbers
                </h2>
                <div className="flex flex-wrap gap-1 mb-8">

                {freqData.map(({draw_number, hits_count}) => {
                    const bgColor = draw_number === selectedNumber 
                        ? 'bg-heatmap-11' 
                        : heatMapAsc(hits_count, minHitsCount, maxHitsCount);
                    const fontColor = draw_number === selectedNumber ? 'text-white' : 'text-gray-700';    
                    return (
                        <button
                            onClick={() => setSelectedNumber(draw_number)}
                            key={draw_number} 
                            className={`${bgColor} w-8 h-8 flex flex-col items-center justify-center rounded-full hover:bg-blue-400 transition`}>
                            <span className={`${fontColor} text-sm font-bold leading-none`}>{draw_number}</span>
                            <span className={`${fontColor} text-xxs leading-none`}>x{hits_count}</span>
                        </button>
                    )})}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <NumbersCard title={`Numbers Not Drawn`} numbers={missedNumbers} />
                    <NumbersCard title={`Hot Numbers`} numbers={hotNumbers} />
                    <NumbersCard title={`Cold Numbers`} numbers={coldNumbers} />
                    <NumbersCard title={`Middle Numbers`} numbers={middleNumbers} />
                </div>
            </div>
        </>
    )
}
