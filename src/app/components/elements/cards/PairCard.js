export default function PairCard({item, bgColor}) {
    return (
        <div className="flex flex-col bg-white border border-gray-300 rounded-lg">
            <div className={`${bgColor} flex justify-center gap-2 text-sm font-semibold 
                rounded-lg text-gray-900 text-sm w-full bg-gray-200 py-1`}
            >
                <div>{item.draw_number1}</div>
                <div>{item.draw_number2}</div>
            </div>
            <div className="text-xs py-1">{item.pair_count}</div>
        </div>
    )
}