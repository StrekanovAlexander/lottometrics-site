import { useDashboard } from "@/context/DashboardContext";

export default function RhythmCard({item}) {
    const { selectedNumber, setSelectedNumber } = useDashboard();
    const bgClass = item.draw_number === selectedNumber ? 'bg-heatmap-active' : 'bg-gray-300';
    const borderClass = item.draw_number === selectedNumber ? 'border-heatmap-active' : 'border-gray-300';
    return (
        <div
            onClick={() => setSelectedNumber(item.draw_number)} 
            className={`bg-white border border-1 ${borderClass} rounded-md text-gray-900 flex flex-col items-center cursor-pointer`}
        >
            <div className={`${bgClass} w-full rounded-sm rounded-t-sm rounded-b-none text-gray-900 font-bold text-xs text-center p-1`}>
                {item.draw_number}
            </div>
            <div className={`text-xxs flex flex-col gap-1 px-2 py-1 text-center font-semibold`}>
                {item.gaps.join('-')}
            </div>
        </div>    
    )
}