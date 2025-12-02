import Link from "next/link";
import { Anton } from "next/font/google";
import { formatDate } from "@/utils/formatDate"
import { renderBalls } from "@/utils/lotteryUtils";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function CardCTA({ lottery }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden 
            border border-gray-200 w-full hover:shadow-xl">
            {/* Card Header */}
            <div className="text-center mx-2 py-4 border-b-2 pb-2">
                <h2 className={`${anton.className} text-gray-900 text-center text-2xl`}>
                    {lottery.lotteryName}
                </h2>
                <div className="text-sm font-semibold">
                    {lottery.descriptionShortEn} {lottery.country}
                </div>
            </div>
            {/* Card Body */}
            <div className="px-1 py-6 text-center">
                <p className="mb-4 text-gray-700 font-semibold">Last draw results: {formatDate(lottery.lastDrawDate)}</p>
                <div className="flex justify-center space-x-2">
                    {renderBalls(lottery.mainNumbers)}
                    {renderBalls(lottery.extraNumbers, true)}
                </div>
            </div>
            {/* Card Footer */}
            <div className="bg-gray-50 border-t border-gray-200 py-5 px-6 text-center">
                <Link
                    href={`/lottery/${lottery.slug}/analysis`} 
                    class="px-4 py-2 bg-white text-gray-800 font-medium rounded-md border border-gray-300 
                    shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    Analyze
                </Link>
            </div>
        </div>        
    )
}