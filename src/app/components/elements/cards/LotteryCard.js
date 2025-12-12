import { formatDate } from "@/utils/formatDate";

export default function LotteryCard({lottery, partUrl}) {
    const route = partUrl ? `/lottery/${lottery.slug}${partUrl}` : `/lottery/${lottery.slug}`;
    return (
        <a
            href={route}
            className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
        >
            <h3 className="text-normal font-semibold text-gray-900">
                {lottery.lottery_name}
            </h3>
            <p className="text-sm text-gray-600">
                {lottery.description_short_en} - {lottery.country}
            </p>
            <p className="text-xs font-semibold text-gray-500 my-2">
                Last result: {formatDate(lottery.draw_date)}
            </p>
            <div className="flex gap-1 justify-center">
                {lottery.main_numbers.split(",").map((el, ix) => 
                    <span
                        key={ix}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold"
                    >
                    {el}
                    </span>
                )}
                {lottery.extra_numbers.split(",").map((el, ix) => 
                    <span
                        key={ix}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm font-semibold"
                    >
                    {el}
                    </span>
                )}
            </div>
        </a>
    )
}