import Link from "next/link";
import { formatDate } from "@/utils/formatDate"
import Ball from "./Ball"

export default function CardCTA({ lottery }) {
    return (
        <div className="bg-white shadow-sm rounded-md px-5 pb-10 text-center border border-gray-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 py-3 border-b border-b-gray-300">
                {lottery.name} ({lottery.iso_code})
            </h3>
            <div className="mb-10">
                <p className="text-gray-700 font-medium mb-6">
                    <span className="text-gray-500">Last draw results:</span> <span className="font-bold">{formatDate(lottery.lastDrawDate)}</span>
                </p>
                {/* Numbers */}
                <div className="flex justify-center space-x-1 my-4">
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
            <Link
                href={`/lottery/${lottery.slug}/analysis`}
                className="px-4 py-2 bg-black text-white rounded hover:no-underline hover:shadow-lg"
            >
                Analyze Lottery
            </Link>
        </div>
    )
}