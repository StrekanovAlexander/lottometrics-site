export default function NumbersCard({title, numbers}) {
    return (
        <div
            className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
        >
            <h3 className="text-normal font-bold text-gray-900 text-center">
                {title}
            </h3>
            <div className="flex flex-wrap gap-1 justify-center my-4">
                {Array.isArray(numbers) && numbers.map((el, ix) => (
                    <span
                        key={ix}
                        className="w-8 h-8 flex items-center justify-center rounded-full 
                        bg-gray-200 text-sm font-semibold"
                    >
                        {el}
                    </span>
                ))}
            </div>
        </div>
    )
}