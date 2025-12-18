import { useDashboard } from "@/context/DashboardContext";
import { heatMapAsc } from "@/utils/lotteryUtils";

export default function PageAnalysisGrid({data}) {
    const { numberKind } = useDashboard();

    const counts = data.filter(el => el.number_kind === numberKind).reduce((acc, item) => {
        acc[item.draw_number] = (acc[item.draw_number] || 0) + 1;
        return acc;
    }, {});

    const numbersPool = Object.entries(counts).map(([number, frequency]) => ({
        draw_number: Number(number),
        frequency
    })).sort((a, b) => b.frequency - a.frequency);

    const frequencies = numbersPool.map(f => f.frequency);
    const minFreq = Math.min(...frequencies);
    const maxFreq = Math.max(...frequencies);

    return (
        <>
            <h2 className="text-lg font-semibold text-graphite mb-4">
                Numbers Pool And Frequency For Period
            </h2>
            <div className="flex flex-wrap gap-2">
                {numbersPool.map(({draw_number, frequency}) => {
                    const bgColor = heatMapAsc(frequency, minFreq, maxFreq);
                    return (
                    <div className="flex flex-col">
                        <span
                            key={draw_number}
                            className={`${bgColor} w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold my-1`}
                        >
                            {draw_number}
                        </span>
                        <div className="flex justify-center">
                            <span className="w-6 h-6 flex items-center justify-center text-xs bg-white border rounded-full">
                                {frequency} 
                            </span>
                        </div>
                    </div>
                )})}
            </div>
        </>
    )
}