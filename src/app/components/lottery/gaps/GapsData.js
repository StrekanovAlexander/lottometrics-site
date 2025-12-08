"use client";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import Spinner from "../../elements/messages/Spinner"
import Error from "../../elements/messages/Error";
import GapsTable from "./GapsTable";
import GapsBar from "./GapsBar";

export default function GapsData({slug}) {
    const { lottery, setLottery } = useDashboard();
    const [data, setData] = useState([]);
    const [filterZero, setFilterZero] = useState("nonzero");
    const [sort, setSort] = useState("down");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!lottery) {
        setLottery(slug)
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
    
    return (
        <>
            <GapsBar filterZero={filterZero} setFilterZero={setFilterZero} sort={sort} setSort={setSort} />
            <GapsTable data={data} sort={sort} filterZero={filterZero} />
        </>
    )
}