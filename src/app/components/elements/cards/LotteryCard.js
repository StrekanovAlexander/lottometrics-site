import Link from "next/link";

export default function LotteryCard({lottery}) {
    return (
        <Link
            href={`/lottery/${lottery.slug}`}
            className="bg-graphite rounded-lg shadow-md p-6 border-t-2 border-yellow hover:shadow-lg
                transition cursor-pointer"
            >
            <h3 className="text-xl font-bold text-gray-200 mb-2">
                {lottery.lottery_name}
            </h3>
            <p className="text-sm text-gray-300 mb-1">
                {lottery.description_short_en}
            </p>
            <span className="text-sm font-medium text-yellow">
                {lottery.country}
            </span>
        </Link>
    )
}