import { formatDate } from "@/utils/formatDate"

export default function GapCard({item, bgColor}) {
    return ( 
        <div className="rounded-lg border bg-white flex flex-col items-center gap-1 shadow-sm">
            <div className={`${bgColor} rounded-lg text-gray-900 font-semibold text-sm w-full p-1`}>
                {item.draw_number}
            </div>
            <div className="text-xs text-gray-700 flex flex-col gap-1 px-2 py-1">
                <span>Gap</span>
                <span>{item.current_gap}</span>
            </div>
            {/* <div className="text-xs text-gray-500">
                {formatDate(new Date(item.last_hit_date))}
            </div> */}
        </div>
    )
}