import { formatDate } from "@/utils/formatDate"

export default function GapCard({item, bgColor}) {
    return ( 
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm px-1 py-2 flex flex-col items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full 
                ${bgColor} text-gray-900 font-semibold text-base mb-2`}>
                {item.draw_number}
            </div>
            <div className="text-xs text-gray-700 font-medium mb-1">
                Gap: <span className="font-bold">{item.current_gap}</span>
            </div>
            <div className="text-xs text-gray-500">
                {formatDate(new Date(item.last_hit_date))}
            </div>
        </div>
    )
}