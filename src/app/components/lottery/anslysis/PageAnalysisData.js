"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import PageAnalysisBar from "./PageAnalysisBar";
import PageAnalysisGrid from "./PageAnalysisGrid";
import { formatDateISO } from "@/utils/formatDate";

export default function PageAnalysisData({slug}) {
    const { lottery, period, setPeriod, setLottery, windowSize } = useDashboard();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!lottery) {
        setLottery(slug);
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(`/api/dashboard/lotteries/${slug}/analysis?window_size=${windowSize}`);
                const {rows} = await res.json();
                setData(rows);
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
    
    return (
        <>
            <PageAnalysisBar />
            <PageAnalysisGrid data={data} />
        </>
    )
}