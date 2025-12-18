import { useDashboard } from "@/context/DashboardContext";
import { heatMapAsc } from "@/utils/lotteryUtils";
import NumbersCard from "../../elements/cards/NumbersCard";

export default function PageAnalysisGrid({data, notDrawn}) {
    const { numberKind, selectedNumber, setSelectedNumber, sortBy } = useDashboard();

    const counts = data.filter(el => el.number_kind === numberKind).reduce((acc, item) => {
        acc[item.draw_number] = (acc[item.draw_number] || 0) + 1;
        return acc;
    }, {});

    const numbersPool = Object.entries(counts).map(([number, frequency]) => ({
        draw_number: Number(number),
        frequency
    }));

    const found = notDrawn.find(el => el.number_kind === numberKind);
    const numbersMissing = Array.isArray(found?.draw_numbers)
        ? found.draw_numbers
        : typeof found?.draw_numbers === 'string'
            ? found.draw_numbers.split(',').map(n => Number(n.trim()))
            : [];
    
    if (sortBy === 'value') {
        numbersPool.sort((a, b) => b.frequency - a.frequency);    
    } else {
        numbersPool.sort((a, b) => a.draw_number - b.draw_number);
    }

    const frequencies = numbersPool.map(f => f.frequency);
    const minFreq = Math.min(...frequencies);
    const maxFreq = Math.max(...frequencies);

    const hotNumbers = data
        .filter(el => el.number_kind === numberKind)
        .filter(el => el.category === 'hot')
        .map(el => el.draw_number);

    return (
        <>
            <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Lottery Number Frequency (Selected Period) - {numberKind === 'main' ? 'Main' : 'Extra'} Numbers
                </h2>
                <div className="flex flex-wrap gap-1 mb-8">
                {numbersPool.map(({draw_number, frequency}) => {
                    const bgColor = draw_number === selectedNumber 
                        ? 'bg-heatmap-11' 
                        : heatMapAsc(frequency, minFreq, maxFreq);
                    const fontColor = draw_number === selectedNumber ? 'text-white' : 'text-gray-700';    
                    return (
                        <button
                            onClick={() => setSelectedNumber(draw_number)}
                            key={draw_number} 
                            className={`${bgColor} w-8 h-8 flex flex-col items-center justify-center rounded-full hover:bg-blue-400 transition`}>
                            <span className={`${fontColor} text-sm font-bold leading-none`}>{draw_number}</span>
                            <span className={`${fontColor} text-xxs leading-none`}>x{frequency}</span>
                        </button>
                    )})}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {numbersMissing.length > 0 && 
                        <NumbersCard title={`Numbers Not Drawn`} numbers={numbersMissing} />
                    }
                    {/* <NumbersCard title={`Hot Numbers`} numbers={hotNumbers} /> */}
                        {/* <div className="bg-gray-200" >
                            <h3>Numbers Not Drawn</h3>
                            {numbersMissing.map(el => 
                                <span>{el}</span>
                        
                            )}
                        </div> */}
                        {/* <NumbersCard title="Title" numbers="" /> */}
                </div>
            </div>
        </>
    )
}