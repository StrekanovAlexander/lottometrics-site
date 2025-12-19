export default function NumbersCard({title, numbers, category}) {
    const bgColors = { hot: "bg-heatmap-1", middle: "bg-heatmap-5",
        cold: "bg-heatmap-10", missed: "bg-white"
    };

    return (
        <div
            className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-3"
        >
            <h3 className="text-gray-900 text-center text-sm mb-3">
                {title}
            </h3>
            <div className="flex flex-wrap gap-1 justify-center text-xs">
                { 
                    numbers.length === 0 
                    ? 'No data' 
                    : numbers.map((el, ix) => (
                        <span
                            key={ix}
                            className={`${bgColors[category]} w-6 h-6 flex items-center justify-center 
                                border rounded-full text-xs font-semibold`}
                        >
                            {el}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}