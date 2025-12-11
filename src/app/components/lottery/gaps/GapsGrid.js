import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { heatMapDesc } from "@/utils/lotteryUtils";
import GapCard from "../../elements/cards/GapCard"

export default function GapsGrid({dataMain, dataExtra}) {
    const [main, setMain] = useState(dataMain);
    const [extra, setExtra] = useState(dataExtra);
    const [isSortMain, setIsSortMain] = useState(false);
    const [isSortExtra, setIsSortExtra] = useState(false);
    const [isMainAll, setIsMainAll] = useState(false);
    const [isExtraAll, setIsExtraAll] = useState(false);

    const gapMain = main.map(el => el.current_gap);
    const minGapMain = Math.min(...gapMain);
    const maxGapMain = Math.max(...gapMain);

    const gapExtra = extra.map(el => el.current_gap);
    const minGapExtra = Math.min(...gapExtra);
    const maxGapExtra = Math.max(...gapExtra);

    const mainFiltered = isMainAll ? main : main.filter(el => el.current_gap > 0); 
    const extraFiltered = isExtraAll ? extra : extra.filter(el => el.current_gap > 0);

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 items-start">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="py-2 text-sm text-left flex justify-between items-center">
                        <h2>Main Numbers</h2>
                        <div className="flex gap-4 items-center">
                            <label className="flex gap-1 items-center cursor-pointer">
                                <input
                                    onChange={(ev) => setIsMainAll(ev.target.checked)}    
                                    checked={isMainAll}     
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 accent-graphite bg-graphite-light border-graphite focus:ring-graphite rounded"
                                />
                                <span className="text-gray-700 text-sm">All</span>
                            </label>
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
                    </div>
                    <div className="bg-gray-50 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 p-1 rounded-lg">
                        {mainFiltered.map(el => {
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
                        <div className="flex gap-4 items-center">
                            <label className="flex gap-1 items-center cursor-pointer">
                                <input
                                    onChange={(ev) => setIsExtraAll(ev.target.checked)}    
                                    checked={isExtraAll}     
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 accent-graphite bg-graphite-light border-graphite focus:ring-graphite rounded"
                                />
                                <span className="text-gray-700 text-sm">All</span>
                            </label>
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
                    </div>
                    <div className="bg-gray-50 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 p-1 rounded-lg">
                        {extraFiltered.map(el => {
                            const bgColor = heatMapDesc(el.current_gap, minGapExtra, maxGapExtra);
                            return (
                                <GapCard item={el} bgColor={bgColor} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}