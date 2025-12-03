// AnalyticsContext.js
"use client";
import { createContext, useContext, useState } from "react";
import { formatDateISO } from "@/utils/formatDate";

const AnalyticsContext = createContext(null);
export const useAnalytics = () => useContext(AnalyticsContext);

export const AnalyticsProvider = ({ children }) => {
    const today = new Date();
    const defaultStartDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);

    const [lotterySlug, setLotterySlug] = useState("lotto6aus49");
    const [mode, setMode] = useState("records");
    const [period, setPeriod] = useState({
        startDate: formatDateISO(defaultStartDate),
        endDate: formatDateISO(today),
    });
    const [recordCount, setRecordCount] = useState(0);


    return (
        <AnalyticsContext.Provider
            value={{ lotterySlug, setLotterySlug, mode, setMode, period, setPeriod, recordCount, setRecordCount }}
        >
            {children}
        </AnalyticsContext.Provider>
    );
};
