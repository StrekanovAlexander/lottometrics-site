"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import AnalysisReport from "./AnalysisReport";

export default function AnalysisData({slug}) {
    const { lotterySlug, setLotterySlug,  setPeriod, windowSize, numberKind } = useDashboard();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    if (!lotterySlug) {
        setLotterySlug(slug);
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(`/api/dashboard/lotteries/${slug}/analysis?window_size=${windowSize}`);
                const {periodRange, rows} = await res.json();
                setData(rows);
                setPeriod(periodRange);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
        }, [lotterySlug, windowSize]
    );
 
    if (error) return <Error message={error} />
    if (loading) return <Spinner /> 

    const filteredData = data.filter(el => el.number_kind === numberKind);

    const calculatedData = filteredData.map(el => {
        const avgFreq = windowSize * (el.numbers_count / el.number_finish - el.number_start + 1);  
        const frequency = el.hits_count ?? 0;
        const ratio = frequency / avgFreq;
        let category = "middle";
        if (ratio > 1.5) category = "hot";
        else if (ratio < 0.5) category = "cold";
        return {
            ...el,
            expected: avgFreq,
            frequency,
            ratio,
            category
        };
    });
     
    return (
        <AnalysisReport calculatedData={calculatedData} filteredData={filteredData} />
    )
}