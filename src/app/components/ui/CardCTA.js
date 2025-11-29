import { formatDate } from "@/utils/formatDate"

export default function CardCTA({ lottery }) {
    return (
        <div className="bg-gray-50 rounded-lg p-10 text-center shadow-sm 
             hover:bg-gray-100 hover:shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {lottery.name}
            </h3>
            {/* Fake results block */}
            <div className="mb-6">
                <p className="text-gray-700 font-medium mb-6">
                    Last draw results: {formatDate(lottery.lastDrawDate)}
                </p>
                {/* Numbers */}
                <div className="flex justify-center space-x-3 mb-4">
                {/* Main numbers */}
                {lottery.mainNumbers.map(num => (
                    <span
                    key={num}
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black text-black font-semibold"
                    >
                    {num}
                    </span>
                ))}


                {/* {[5, 12, 23, 34, 41, 47].map(num => (
                    <span
                    key={num}
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black text-black font-semibold"
                    >
                    {num}
                    </span>
                ))} */}
                {/* Superzahl */}
                <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-700 text-red-700 font-semibold">
                    9
                </span>
                </div>
            </div>
            <button
                className="bg-gray-800 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-900 transition"
            >
                Analyze Lottery
            </button>
        </div>
    )
}