"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import PageAnalysisBar from "./PageAnalysisBar";
import PageAnalysisGrid from "./PageAnalysisGrid";
import { formatDateISO } from "@/utils/formatDate";
import { generateRange } from "@/utils/lotteryUtils";

export default function PageAnalysisData({slug}) {
    const { lottery, period, setPeriod, setLottery, windowSize } = useDashboard();
    const [data, setData] = useState([]);
    const [lotteryData, setLotteryData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!lottery) {
        setLottery(slug);
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(`/api/dashboard/lotteries/${slug}/analysis?window_size=${windowSize}`);
                const {lott, rows} = await res.json();
                setData(rows);
                setLotteryData(lott);
                // console.log(rows);
                if (Array.isArray(rows) && rows.length) {
                    const dates = rows.map(el => new Date(el.draw_date));
                    const minDate = new Date(Math.min(...dates));
                    const maxDate = new Date(Math.max(...dates));
                    setPeriod({
                        startDate: formatDateISO(minDate),
                        endDate: formatDateISO(maxDate),
                    });
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
        }, [lottery, windowSize]
    );

    if (error) return <Error message={error} />
    if (loading) return <Spinner /> 

    const baseMain = generateRange(lotteryData.main_start, lotteryData.main_finish);
    const baseExtra = generateRange(lotteryData.extra_start, lotteryData.extra_finish);
    
    const dataMain = data.filter(el => el.number_kind === 'main').map(el => el.draw_number);
    const dataExtra = data.filter(el => el.number_kind === 'extra').map(el => el.draw_number);
    
    const missingMain = baseMain.filter(el => !dataMain.includes(el));
    const missingExtra = baseExtra.filter(el => !dataExtra.includes(el));
    const notDrawn = [
        {draw_numbers: missingMain, number_kind: 'main'}, 
        {draw_numbers: missingExtra, number_kind: 'extra'}, 
    ];

    const mainFreq = windowSize * (lotteryData.main_count / lotteryData.main_finish - lotteryData.main_start + 1);  
    const extraFreq = windowSize * (lotteryData.extra_count / lotteryData.extra_finish - lotteryData.extra_start + 1);
    const categorizedData = data.map(el => {
        const frequency = el.frequency ?? 0;
        const ratio = el.number_kind === 'main' ? frequency / mainFreq : frequency / extraFreq;
        let category = "middle";
        if (ratio > 1.5) category = "hot";
        else if (ratio < 0.5) category = "cold";
        return {
            ...el,
            expected: el.number_kind === 'main' ? mainFreq : extraFreq,
            frequency,
            ratio,
            category
        };
    });
     
    return (
        <>
            {/* {JSON.stringify(categorizedData)} */}
            <PageAnalysisBar lotteryData={lotteryData} />
            <PageAnalysisGrid data={categorizedData} notDrawn={notDrawn}/>
        </>
    )
}