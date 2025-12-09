import { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { heatMapDesc } from "@/utils/lotteryUtils";
import GapCard from "../../elements/cards/GapCard"
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function GapsGrid({data}) {
    const {sorting} = useDashboard();
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
           ? extra.sort((a, b) => new Date(a[fExtra]) - new Date(b[fExtra])) 
           : extra.sort((a, b) => a[fExtra] - b[fExtra]) 
        :  (fExtra === "last_hit_date") 
            ? extra.sort((a, b) => new Date(b[fExtra]) - new Date(a[fExtra])) 
            : extra.sort((a, b) => b[fExtra] - a[fExtra])
        ;
    ;    

    const gapMain = main.map(el => el.current_gap);
    const minGapMain = Math.min(...gapMain);
    const maxGapMain = Math.max(...gapMain);

    const gapExtra = extra.map(el => el.current_gap);
    const minGapExtra = Math.min(...gapExtra);
    const maxGapExtra = Math.max(...gapExtra);

    return (
        <div className="flex flex-col md:flex-row gap-6">
            {main.length && (
                <div>
                    <h2 className={`${inter.className} text-xl font-semibold pb-4`}>
                        Main numbers
                    </h2>
                    <div className="inline-block">
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1">
                        {main.map(el => {
                            const bgColor = heatMapDesc(el.current_gap, minGapMain, maxGapMain);
                            return (
                                <GapCard item={el} bgColor={bgColor} />
                            )
                        })}
                        </div> 
                    </div>
                </div>
            )}

            {extra.length > 0 && (
                <div>
                    <h2 className={`${inter.className} text-xl font-semibold pb-4`}>
                        Extra numbers
                    </h2>
                    <div className="inline-block">
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1">
                        {extra.map(el => {
                            const bgColor = heatMapDesc(el.current_gap, minGapExtra, maxGapExtra);
                            return (
                                <GapCard item={el} bgColor={bgColor} />
                            )
                        })}
                        </div> 
                    </div>
                </div>
            )}
        </div>    
    )
}