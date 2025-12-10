import { formatDate } from "@/utils/formatDate";

export default function ResultsTable({data}) {
    return (
        <div>
            <table className="inline-block max-w-[700px] bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                    <tr className="border-b border-gray-200 text-left">
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700">Date</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Main Numbers</th>
                        <th className="px-4 py-2 text-sm font-semibold text-gray-700 text-center">Extra</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(el =>
                    <tr className="border-b border-gray-100">
                        <td className="px-4 py-2 text-sm text-gray-600 font-semibold">
                            {formatDate(new Date(el.draw_date))}
                        </td>
                        <td className="px-4 py-2">
                            <div className="flex flex-nowrap gap-2">
                                {el.main_numbers.split(",").map((el, ix) => (
                                    <span
                                        key={ix}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold"
                                    >
                                        {el}
                                    </span>
                                ))}
                            </div>
                        </td>
                        <td className="px-4 py-2">
                            <div className="flex flex-nowrap gap-2">
                                {el.extra_numbers.split(",").map((el, ix) => (
                                    <span
                                        key={ix}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-sm font-semibold"
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
        </div>
    )
}
