"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import AnalysisReport from "./AnalysisReport";
import { getFreqCategory } from "@/utils/analysisUtils";

export default function AnalysisData({slug}) {
    const { lotterySlug, setLotterySlug,  setPeriod, windowSize, numberKind } = useDashboard();
    const [freqs, setFreqs] = useState([]);
    const [windowDraws, setWindowDraws] = useState([]);
    const [hits, setHits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    if (!lotterySlug) {
        setLotterySlug(slug);
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(`/api/dashboard/lotteries/${slug}/analysis?window_size=${windowSize}`);
                const {periodRange, freqRows, windowRows, hitsRows} = await res.json();
                setFreqs(freqRows);
                setWindowDraws(windowRows); 
                setHits(hitsRows);
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

    const filteredFreqs = freqs.filter(el => el.number_kind === numberKind);
    const filteredHits = hits.filter(el => el.number_kind === numberKind);

    const calculatedFreqs = filteredFreqs.map(el => {
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
        <AnalysisReport calculatedFreqs={calculatedFreqs} windowDraws={windowDraws} hits={filteredHits} />
    )
}