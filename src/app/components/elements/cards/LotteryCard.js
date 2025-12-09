import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function LotteryCard({lottery}) {
    return (
        <div className="flex flex-col items-start mb-4">
            <Link
                href={`/lottery/${lottery.slug}`}
                className="inline-block rounded-lg border
                p-4 shadow-lg bg-gray-50 hover:shadow-lg transition cursor-pointer min-w-[285px]"
            >
                <h2 className={`${inter.className} text-lg font-bold text-gray-800`}>
                    {lottery.lottery_name}
                </h2>
                <p className="text-sm font-medium text-gray-500">
                    {lottery.country} {lottery.description_short_en}
                </p>
                <p className="text-sm font-semibold text-gray-500">
                    Last result: {formatDate(lottery.draw_date)}
                </p>
                <div className="flex gap-1 justify-start mt-2">
                {lottery.main_numbers.split(",").map((el, ix) => 
                    <span
                        key={ix}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-heatmap-9 font-semibold"
                    >
                    {el}
                    </span>
                )}
                {lottery.extra_numbers.split(",").map((el, ix) => 
                    <span
                        key={ix}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-heatmap-8 font-semibold"
                    >
                    {el}
                    </span>
                )}
                </div>
            </Link>
        </div>
    )
}