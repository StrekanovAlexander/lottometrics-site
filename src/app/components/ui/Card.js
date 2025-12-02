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
                        class="px-4 py-2 bg-white text-gray-800 font-medium rounded-md border border-gray-300 
                        shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    Details
                </Link>
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