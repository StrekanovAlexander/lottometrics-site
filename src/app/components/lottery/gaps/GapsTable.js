"use client";
import { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { formatDate } from "@/utils/formatDate"
import { heatMapDesc } from "@/utils/lotteryUtils";

export default function GapsTable({data}) {
    const { showZero, sorting } = useDashboard();
    const [filtered, setFiltered] = useState([]);
    const [fMain, setFMain] = useState("current_gap");
    const [fExtra, setFExtra] = useState("current_gap");
    
    let main = data.filter(el => el.number_kind === 'main');
    let extra = data.filter(el => el.number_kind === 'extra');

    main = (sorting === "asc") 
        ? (fMain === "last_hit_date") 
            ? main.sort((a, b) => new Date(a[fMain]) - new Date(b[fMain])) 
            : main.sort((a, b) => a[fMain] - b[fMain]) 
        : (fMain === "last_hit_date") 
            ? main.sort((a, b) => new Date(b[fMain]) - new Date(a[fMain])) 
            : main.sort((a, b) => b[fMain] - a[fMain])
        ;

    extra = (sorting === "asc") 
        ?  (fExtra === "last_hit_date") 
           ? extra.sort((a, b) => new Date(a[fMain]) - new Date(b[fMain])) 
           : extra.sort((a, b) => a[fMain] - b[fMain]) 
        :  (fExtra === "last_hit_date") 
            ? extra.sort((a, b) => new Date(b[fMain]) - new Date(a[fMain])) 
            : extra.sort((a, b) => b[fMain] - a[fMain])
        ;
    ;    

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
                    <tr className="text-center font-semibold text-sm text-gray-700">
                        <th colSpan={4} className="px-2 py-1">Main Numbers</th>
                    </tr>
                    <tr className="border-b border-gray-200 text-center text-sm text-gray-700">
                        <th className="py-1">
                            <button
                                onClick={() => setFMain("draw_number")} 
                                className={`w-full border rounded px-1 py-1 shadow-sm
                                    ${ fMain === "draw_number" ? " font-semibold" : " font-normal"}    
                                `}
                            >
                                Number
                            </button>
                        </th>
                        <th className="py-1">
                            <button 
                                onClick={() => setFMain("current_gap")} 
                                className={`w-full border rounded px-1 py-1 shadow-sm
                                    ${ fMain === "current_gap" ? " font-semibold" : " font-normal"}    
                                `}
                                >
                                Current Gap
                            </button>    
                        </th>
                        {/* <th className="py-1">
                            <button 
                                onClick={() => setFMain("max_gap")} 
                                className={`w-full border rounded px-1 py-1 shadow-sm
                                    ${ fMain === "max_gap" ? " font-semibold" : " font-normal"}    
                                `}
                            >
                                Max Gap
                            </button> 
                        </th> */}
                        <th className="py-1">
                            <button 
                                onClick={() => setFMain("last_hit_date")} 
                                className={`w-full border rounded px-1 py-1 shadow-sm
                                    ${ fMain === "last_hit_date" ? " font-semibold" : " font-normal"}    
                                `}
                            >
                                Last Hit
                            </button> 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {main.map(el => {
                        const bgColor = heatMapDesc(el.current_gap, minGapMain, maxGapMain)
                        return (
                            <tr className={`${bgColor} border-b border-gray-100 text-center font-semibold text-sm`}>
                                <td className="px-2 py-1 text-center align-middle">
                                    <div className="flex items-center justify-center">
                                        <span
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-ball-main2 text-ball-text"
                                        >
                                        {el.draw_number}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-600 text-center">
                                    {el.current_gap}
                                </td>
                                {/* <td className="px-4 py-1 text-sm text-gray-600 font-semibold">
                                    {el.max_gap}
                                </td> */}
                                <td className="px-4 py-1 text-sm text-gray-600 font-semibold">
                                    {formatDate(new Date(el.last_hit_date))}
                                </td>
                            </tr>
                    )})}
                </tbody>
            </table>
            <table className="inline-block max-w-[700px] bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                    <tr className="text-center font-semibold text-sm text-gray-700">
                        <th colSpan={4} className="px-2 py-1">Extra Numbers</th>
                    </tr>
                    <tr className="border-b border-gray-200 text-center text-sm text-gray-700">
                        <th className="py-1">
                            <button
                                onClick={() => setFExtra("draw_number")} 
                                className={`w-full border rounded px-1 py-1 shadow-sm
                                    ${fExtra === "draw_number" ? " font-semibold" : " font-normal"}    
                                `}
                            >
                                Number
                            </button>
                        </th>
                        <th className="py-1">
                            <button 
                                onClick={() => setFExtra("current_gap")} 
                                className={`w-full border rounded px-1 py-1 shadow-sm
                                    ${fExtra === "current_gap" ? " font-semibold" : " font-normal"}    
                                `}
                                >
                                Current Gap
                            </button>    
                        </th>
                        {/* <th className="py-1">
                            <button 
                                onClick={() => setFExtra("max_gap")} 
                                className={`w-full border rounded px-1 py-1 shadow-sm
                                    ${fExtra === "max_gap" ? " font-semibold" : " font-normal"}    
                                `}
                            >
                                Max Gap
                            </button> 
                        </th> */}
                        <th className="py-1">
                            <button 
                                onClick={() => setFExtra("last_hit_date")} 
                                className={`w-full border rounded px-1 py-1 shadow-sm
                                    ${fExtra === "last_hit_date" ? " font-semibold" : " font-normal"}    
                                `}
                            >
                                Last Hit
                            </button> 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {extra.map(el => {
                        const bgColor = heatMapDesc(el.current_gap, minGapExtra, maxGapExtra)
                        return (
                            <tr className={`${bgColor} border-b border-gray-100 text-center font-semibold text-sm`}>
                                <td className="px-2 py-1 text-center align-middle">
                                    <div className="flex items-center justify-center">
                                        <span
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-ball-extra3 text-ball-text"
                                        >
                                        {el.draw_number}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-1 text-sm text-gray-600 text-center">
                                    {el.current_gap}
                                </td>
                                {/* <td className="px-4 py-1 text-sm text-gray-600 font-semibold">
                                    {el.max_gap}
                                </td> */}
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