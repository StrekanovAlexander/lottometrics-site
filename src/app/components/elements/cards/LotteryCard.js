import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

export default function LotteryCard({lottery}) {
    return (
        <Link
            href={`/lottery/${lottery.slug}`}
            className="inline-block max-w-[700px] bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition cursor-pointer"
        >
            {/* Header */}
            <div className="mb-3 flex justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
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
                <div className="flex flex-wrap gap-2 justify-center border-t pt-4">
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