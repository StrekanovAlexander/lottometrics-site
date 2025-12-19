"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import AnalysisReport from "./AnalysisReport";
import { getFreqCategory } from "@/utils/analysisUtils";

export default function AnalysisData({slug}) {
    const { lotterySlug, setLotterySlug,  setPeriod, windowSize, numberKind } = useDashboard();
    const [data, setData] = useState([]);
    const [gaps, setGaps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    if (!lotterySlug) {
        setLotterySlug(slug);
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(`/api/dashboard/lotteries/${slug}/analysis?window_size=${windowSize}`);
                const {periodRange, rows, gaps} = await res.json();
                setData(rows);
                setGaps(gaps);
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
    const filteredGaps = gaps.filter(el => el.number_kind === numberKind);

    const calculatedData = filteredData.map(el => {
        const N = el.number_finish - el.number_start + 1;
        const avgFreq = windowSize * (el.numbers_count / N);
        const ratio = el.hits_count > 0 ? el.hits_count / avgFreq : 0;
        const category = getFreqCategory(el.hits_count, ratio);

        return {
            ...el,
            expected: avgFreq,
            frequency: el.hits_count,
            ratio,
            category
        };
    });
     
    return (
        <div>
            <AnalysisReport calculatedData={calculatedData} gaps={filteredGaps} />
        </div>
    )
}