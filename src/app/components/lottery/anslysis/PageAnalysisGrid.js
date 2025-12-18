import { useDashboard } from "@/context/DashboardContext";
import { heatMapAsc } from "@/utils/lotteryUtils";

export default function PageAnalysisGrid({data, lotteryData}) {
    const { numberKind, selectedNumber, setSelectedNumber, sortBy } = useDashboard();

    const counts = data.filter(el => el.number_kind === numberKind).reduce((acc, item) => {
        acc[item.draw_number] = (acc[item.draw_number] || 0) + 1;
        return acc;
    }, {});

    const numbersPool = Object.entries(counts).map(([number, frequency]) => ({
        draw_number: Number(number),
        frequency
    }));
    
    if (sortBy === 'value') {
        numbersPool.sort((a, b) => b.frequency - a.frequency);    
    } else {
        numbersPool.sort((a, b) => a.draw_number - b.draw_number);
    }

    const frequencies = numbersPool.map(f => f.frequency);
    const minFreq = Math.min(...frequencies);
    const maxFreq = Math.max(...frequencies);

    const handleSelectedNumber = () => {

    }

    return (
        <>
            <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Lottery Number Frequency (Selected Period)
                </h2>
                <div className="flex flex-wrap gap-1">
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
            </div>
        </>
    )
}