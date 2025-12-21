import { useDashboard } from "@/context/DashboardContext";

export default function RhythmCard({item}) {
    const { selectedNumber, setSelectedNumber } = useDashboard();
    const bgClass = item.draw_number === selectedNumber ? 'bg-heatmap-active' : 'bg-gray-300';
    const borderClass = item.draw_number === selectedNumber ? 'border-heatmap-active' : 'border-gray-400';
    return (
        <div
            onClick={() => setSelectedNumber(item.draw_number)} 
            className={`bg-white text-gray-900 pt-1 px-1 flex flex-col items-center cursor-pointer`}
        >
            <span
                onClick={() => setSelectedNumber(item.draw_number)} 
                className={`${bgClass} w-8 h-8 flex items-center justify-center 
                    rounded-full text-sm font-bold cursor-pointer`}
            >
                {item.draw_number}
            </span>
            <div className={`text-xxs text-center font-semibold 
                border border-1 ${borderClass} rounded-md px-1 my-2`}
            >
                {item.gaps.join('-')}
            </div>
        </div>    
    )
}