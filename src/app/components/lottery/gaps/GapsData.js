"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import GapsGrid from "./GapsGrid";

export default function GapsData({slug}) {
    const { lottery, setLottery, part, setPart } = useDashboard();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!lottery) {
        setLottery(slug);
    }

    if (!part) {
        setPart("gaps");
    }

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(
                    `/api/dashboard/lotteries/${slug}/analysis/gaps`);
                const {rows} = await res.json();
                setData(rows);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
        }, [lottery]
    );

    if (error) return <Error message={error} />
    if (loading) return <Spinner /> 
    
    const dataMain = data.filter(el => el.number_kind === 'main');
    const dataExtra = data.filter(el => el.number_kind === 'extra');
    
    return (
        <GapsGrid dataMain={dataMain} dataExtra={dataExtra} />
    )
}