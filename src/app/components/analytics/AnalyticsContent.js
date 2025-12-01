"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import AnalyticsTitle from "./parts/AnalyticsTitle";
import LotteryTable from "./parts/LotteryTable";

export default function AnalyticsContent() {
    const { lotterySlug, mode, period } = useAnalytics();
    return (
        <div className="p-8">
            <AnalyticsTitle mode={mode} period={period} />
            <LotteryTable />
        </div>
    );
}
