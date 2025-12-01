"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import AnalyticsTitle from "./parts/AnalyticsTitle";
import LotteryTable from "./parts/LotteryTable";
import FrequencyGrid from "./parts/FrequencyGrid";

export default function AnalyticsContent() {
    const { lotterySlug, mode, period } = useAnalytics();
    return (
        <div className="p-8">
            <AnalyticsTitle mode={mode} period={period} />
            {mode === 'records' && <LotteryTable />}
            {mode === 'frequency' && <FrequencyGrid />}
        </div>
    );
}
