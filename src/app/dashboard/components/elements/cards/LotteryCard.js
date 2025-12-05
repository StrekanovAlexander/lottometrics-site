import Link from "next/link";

export default function LotteryCard({lottery}) {
    return (
         <Link
            href={`/dashboard/lottery/${lottery.slug}/results`} 
            className="bg-graphite rounded-lg shadow-md p-6 
            border-l-4 border-teal hover:border-lavender 
            transition hover:shadow-lg cursor-pointer"
        >
            <h3 className="text-xl font-bold text-lightgray mb-2">
                {lottery.lottery_name}
            </h3>
            <p className="text-sm text-lightgray/80 mb-1">
                {lottery.description_short_en}
            </p>
            <span className="text-sm font-medium text-yellow">
                {lottery.country}
            </span>
        </Link>
    )
}