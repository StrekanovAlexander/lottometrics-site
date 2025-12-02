import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Card({ lottery }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden 
            border border-gray-200 w-full hover:shadow-xl">
            {/* Card Header */}
            <div className="text-center mx-2 py-4">
                <h2 className={`${anton.className} text-gray-900 text-center text-2xl`}>
                    {lottery.lottery_name}
                </h2>
                <div className="text-sm font-semibold">
                    {lottery.description_short_en} {lottery.country}
                </div>
            </div>
            {/* Card Footer */}
            <div className="bg-gray-50 border-t border-gray-200 py-5 px-6 text-center flex justify-between">
                <Link
                    href={`/lottery/${lottery.slug}`} 
                    className="px-6 py-2 bg-gray-800 text-white text-base font-semibold rounded-md 
                    hover:bg-gray-700 hover:shadow-md transition"
                >
                    Details
                </Link>
                <Link
                    href={`/lottery/${lottery.slug}/analysis`} 
                    className="px-6 py-2 bg-gray-800 text-white text-base font-semibold rounded-md 
                    hover:bg-gray-700 hover:shadow-md transition"
                >
                    Analyze
                </Link>
            </div>
        </div>        
    )
}