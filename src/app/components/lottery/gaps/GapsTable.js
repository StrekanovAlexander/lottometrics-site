import { formatDate } from "@/utils/formatDate"
import { heatMapDesc } from "@/utils/lotteryUtils";

export default function GapsTable({data}) {
    const main = data.filter(el => el.number_kind === 'main');
    const extra = data.filter(el => el.number_kind === 'extra');

    const gapMain = main.map(el => el.current_gap);
    const minGapMain = Math.min(...gapMain);
    const maxGapMain = Math.max(...gapMain);

    const gapExtra = extra.map(el => el.current_gap);
    const minGapExtra = Math.min(...gapExtra);
    const maxGapExtra = Math.max(...gapExtra);

    return (
        <div className="flex gap-5 items-start">
            <table className="inline-block max-w-[700px] bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                    <tr className="border-b border-gray-200 text-center font-semibold text-sm text-gray-700">
                        <th colSpan={4} className="px-2 py-1">Main Numbers</th>
                    </tr>
                    <tr className="border-b border-gray-200 text-center font-semibold text-sm text-gray-700">
                        <th className="px-2 py-1">Number</th>
                        <th className="px-2 py-1">Current Gap</th>
                        <th className="px-2 py-1">Max Gap</th>
                        <th className="px-2 py-1">Last Hit Date</th>
                    </tr>
                </thead>
                <tbody>
                    {main.map(el => {
                        const bgColor = heatMapDesc(el.current_gap, minGapMain, maxGapMain)
                        return (
                            <tr className={`${bgColor} border-b border-gray-100 text-center font-semibold text-sm`}>
                                <td className="px-2 py-1">
                                    <span
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-ball-main2 text-ball-text"
                                    >
                                        {el.draw_number}
                                    </span>
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-600 text-center">
                                    {el.current_gap}
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-600 font-semibold">
                                    {el.max_gap}
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-600 font-semibold">
                                    {formatDate(new Date(el.last_hit_date))}
                                </td>
                            </tr>
                    )})}
                </tbody>
            </table>
            <table className="inline-block max-w-[700px] bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                    <tr className="border-b border-gray-200 text-center font-semibold text-sm text-gray-700">
                        <th colSpan={4} className="px-2 py-1">Extra Numbers</th>
                    </tr>
                    <tr className="border-b border-gray-200 text-center font-semibold text-sm text-gray-700">
                        <th className="px-2 py-1">Number</th>
                        <th className="px-2 py-1">Current Gap</th>
                        <th className="px-2 py-1">Max Gap</th>
                        <th className="px-2 py-1">Last Hit Date</th>
                    </tr>
                </thead>
                <tbody>
                    {extra.map(el => {
                        const bgColor = heatMapDesc(el.current_gap, minGapExtra, maxGapExtra)
                        return (
                            <tr className={`${bgColor} border-b border-gray-100 text-center font-semibold text-sm`}>
                                <td className="px-2 py-1">
                                    <span
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-ball-extra3 text-ball-text"
                                    >
                                        {el.draw_number}
                                    </span>
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-600 text-center">
                                    {el.current_gap}
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-600 font-semibold">
                                    {el.max_gap}
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-600 font-semibold">
                                    {formatDate(new Date(el.last_hit_date))}
                                </td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}