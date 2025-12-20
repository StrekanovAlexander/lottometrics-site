import { useDashboard } from "@/context/DashboardContext";

export default function RhythmCard({item}) {
    const { selectedNumber, setSelectedNumber } = useDashboard();
    const bgActive = item.draw_number === selectedNumber ? 'bg-heatmap-active' : 'bg-gray-200';
    const bgColor = item.draw_number === selectedNumber ? 'bg-heatmap-3' : 'bg-white';
    return (
        <div
            onClick={() => setSelectedNumber(item.draw_number)} 
            className={`${bgColor} flex flex-col items-center rounded-lg border shadow-sm cursor-pointer`}
        >
            <div className={`${bgActive} w-full rounded-lg text-gray-900 font-semibold text-sm text-center`}>
                {item.draw_number}
            </div>
            <div className={`text-xs text-gray-700 flex flex-col gap-1 px-2 py-1 text-center`}>
                <div>rhythm</div>
                <div>[ {item.gaps.join('-')} ]</div>
            </div>
        </div>    
    )
}