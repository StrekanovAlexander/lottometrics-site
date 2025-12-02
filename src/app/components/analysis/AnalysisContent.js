"use client";
import { useAnalytics } from "@/context/AnalyticsContext";
import AnalysisHeader from "./parts/AnalysisHeader";
import LotteryTable from "./parts/LotteryTable";
import FrequencyGrid from "./parts/FrequencyGrid";
import GapsData from "./parts/GapsData";

export default function AnalysisContent() {
    const { mode, period } = useAnalytics();
    return (
        <div className="w-full">
            <AnalysisHeader mode={mode} period={period} />
            <div className="flex justify-start">
                {mode === 'records' && <LotteryTable />}
                {mode === 'frequency' && <FrequencyGrid />}
                {mode === 'gaps' && <GapsData />}
            </div>
        </div>
    );
}
