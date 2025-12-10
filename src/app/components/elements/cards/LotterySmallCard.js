export default function LotterySmallCard({lottery}) {
    return (
        <a
            href={`/lottery/${lottery.slug}`}
            className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
        >
            <h3 className="text-normal font-semibold text-gray-900">
                {lottery.label}
            </h3>
            <p className="text-sm text-gray-600">
                {lottery.shortText} - {lottery.country}
            </p>
        </a>
    )
}