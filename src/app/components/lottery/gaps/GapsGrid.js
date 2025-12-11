import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import { heatMapDesc } from "@/utils/lotteryUtils";
import GapCard from "../../elements/cards/GapCard"

export default function GapsGrid({data}) {
    const {sorting} = useDashboard();
    const [main, setMain] = useState(data.filter(el => el.number_kind === 'main'));
    const [extra, setExtra] = useState(data.filter(el => el.number_kind === 'extra'));
    const [isSortMain, setIsSortMain] = useState(false);
    const [isSortExtra, setIsSortExtra] = useState(false);

    const gapMain = main.map(el => el.current_gap);
    const minGapMain = Math.min(...gapMain);
    const maxGapMain = Math.max(...gapMain);

    const gapExtra = extra.map(el => el.current_gap);
    const minGapExtra = Math.min(...gapExtra);
    const maxGapExtra = Math.max(...gapExtra);

    return (
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 items-start">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="py-2 text-sm text-left flex justify-between items-center">
                    <h2>Main Numbers</h2>
                    <button
                        onClick={() => {
                            !isSortMain ? setMain(main.sort((a, b) => a.draw_number - b.draw_number))
                            : setMain(main.sort((a, b) => b.current_gap - a.current_gap));
                            setIsSortMain(!isSortMain);
                        }} 
                        className="px-2 py-1 border rounded-md shadow-sm flex gap-1 items-center">
                        <ArrowUpDown size={12} />
                    </button>
                </div>
                <div className="bg-gray-50 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 p-1 rounded-lg">
                    {main.map(el => {
                        const bgColor = heatMapDesc(el.current_gap, minGapMain, maxGapMain);
                        return (
                            <GapCard item={el} bgColor={bgColor} />
                        )
                    })}
                </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="py-2 text-sm text-left flex justify-between items-center">
                    <h2>Extra Numbers</h2>
                    <button
                        onClick={() => {
                            !isSortExtra ? setExtra(extra.sort((a, b) => a.draw_number - b.draw_number))
                            : setExtra(extra.sort((a, b) => b.current_gap - a.current_gap));
                            setIsSortExtra(!isSortExtra);
                        }} 
                        className="px-2 py-1 border rounded-md shadow-sm flex gap-1 items-center">
                        <ArrowUpDown size={12} />
                    </button>
                </div>
                <div className="bg-gray-50 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 p-1 rounded-lg">
                    {extra.map(el => {
                        const bgColor = heatMapDesc(el.current_gap, minGapExtra, maxGapExtra);
                        return (
                            <GapCard item={el} bgColor={bgColor} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}