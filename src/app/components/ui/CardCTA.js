import Link from "next/link";
import { formatDate } from "@/utils/formatDate"
import { renderBalls } from "@/utils/lotteryUtils";

export default function CardCTA({ lottery }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden 
            border border-gray-200 w-full hover:shadow-xl hover:bg-gray-50">
            {/* Card Header */}
            <div className="bg-gray-800 text-white py-3 px-6 flex justify-between items-center">
                <h2 className="text-lg font-bold tracking-wide">{lottery.lotteryName}</h2>
                <p className="text-sm text-gray-100 text-right font-semibold">{lottery.country}</p>
            </div>
            <div className="text-sm font-semibold text-center py-1 mx-5">
                {lottery.descriptionShortEn}
            </div>
            {/* Card Body */}
            <div className="py-4 px-1 text-center">
                <p className="text-gray-700 mb-6 font-semibold">Last draw results: {formatDate(lottery.lastDrawDate)}</p>
                <div className="flex justify-center space-x-2">
                    {renderBalls(lottery.mainNumbers)}
                    {renderBalls(lottery.extraNumbers, true)}
                </div>
            </div>
            {/* Card Footer */}
            <div className="bg-gray-50 border-t border-gray-200 py-5 px-6 text-center">
                <Link
                    href={`/lottery/${lottery.slug}/analysis`} 
                    className="px-4 py-2 bg-gray-800 text-white text-base font-semibold rounded-md 
                    hover:bg-gray-700 hover:shadow-md transition">
                        Analyze Lottery
                </Link>
            </div>
        </div>        
    )
}