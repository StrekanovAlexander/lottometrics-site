import { formatDate } from "@/utils/formatDate";

export default function ResultsTable({data}) {
    return (
        <table className="inline-block bg-white rounded-lg shadow-sm border border-gray-200">
            <thead>
                <tr className="border-b border-gray-200 text-sm text-gray-700 text-left">
                    <th className="px-4 py-2 font-normal">Date</th>
                    <th className="px-4 py-2 font-normal">Main Numbers</th>
                    <th className="px-4 py-2 font-normal">Extra</th>
                </tr>
            </thead>
            <tbody>
                {data.map(el =>
                <tr className="border-b border-gray-100">
                    <td className="px-4 py-1 text-sm text-gray-600 font-semibold">
                        {formatDate(new Date(el.draw_date))}
                    </td>
                    <td className="px-4 py-1">
                        <div className="flex flex-nowrap gap-2">
                            {el.main_numbers.split(",").map((el, ix) => (
                                <span
                                    key={ix}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-heatmap-cold text-sm font-bold"
                                >
                                    {el}
                                </span>
                            ))}
                        </div>
                    </td>
                    <td className="px-4 py-1">
                        <div className="flex flex-nowrap gap-2 text-gray-700">
                            {el.extra_numbers.split(",").map((el, ix) => (
                                <span
                                    key={ix}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-heatmap-middle text-sm font-bold"
                                >
                                    {el}
                                </span>
                            ))}
                        </div>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    )
}
