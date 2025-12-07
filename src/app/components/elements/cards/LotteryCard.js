import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function LotteryCard({lottery}) {
    return (
        <Link
            href={`/lottery/${lottery.slug}`}
            className="inline-block max-w-[400px] rounded-lg border min-w-[200px]
              border-gray-300 p-6 shadow-md bg-graphite-light hover:shadow-lg transition cursor-pointer"
        >
            {/* Header */}
            <div className="mb-3 flex justify-between">
                <div>
                    <h2 className={`${inter.className} text-xl font-bold text-gray-800`}>
                        {lottery.lottery_name}
                    </h2>
                    <p className="text-sm font-medium text-gray-500">
                         {lottery.description_short_en}
                    </p>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    {lottery.country}                   
                </p>
            </div>
            {/* Data */}
            <div>
                <p className="text-sm font-semibold text-gray-700 my-6 text-center">
                    Last result: {formatDate(lottery.draw_date)}
                </p>
                <div className="flex flex-wrap gap-2 justify-center border-t border-gray-400 pt-4">
                    {lottery.main_numbers.split(",").map((el, ix) => 
                        <span
                            key={ix}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-ball-main2 text-ball-text text-sm font-semibold"
                        >
                           {el}
                        </span>
                    )}
                    {lottery.extra_numbers.split(",").map((el, ix) => 
                        <span
                            key={ix}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-ball-extra3 text-ball-text text-sm font-semibold"
                        >
                           {el}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    )
}