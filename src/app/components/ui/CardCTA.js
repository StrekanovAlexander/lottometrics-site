import { formatDate } from "@/utils/formatDate"
import Ball from "./Ball"

export default function CardCTA({ lottery }) {
    return (
        <div className="bg-white shadow-sm rounded-md p-10 py-12 text-center border border-gray-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {lottery.name}
            </h3>
            <div className="mb-10">
                <p className="text-gray-700 font-medium mb-6">
                    Last draw results: {formatDate(lottery.lastDrawDate)}
                </p>
                {/* Numbers */}
                <div className="flex justify-center space-x-2 my-4">
                    {/* Main numbers */}
                    {lottery.mainNumbers.map(num => (
                        <Ball num={num} textColor="text-black" />
                    ))}
                    {/* Superzahl */}
                    {lottery.extraNumbers.map(num => (
                        <Ball num={num} textColor="text-red-700" />
                    ))}
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