// DashboardContext.js
"use client";
import { createContext, useContext, useState } from "react";
import { formatDateISO } from "@/utils/formatDate";

const DashboardContext = createContext(null);
export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
    const today = new Date();
    const defaultStartDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);

    const [period, setPeriod] = useState({
        startDate: formatDateISO(defaultStartDate),
        endDate: formatDateISO(today),
    });

    const [drawsCount, setDrawsCount] = useState(0);
    const [windowSize, setWindowSize] = useState(20);
    const [selectedNumber, setSelectedNumber] = useState(null);
    
    const [lottery, setLottery] = useState(null); // to remove
    const [lotterySlug, setLotterySlug] = useState(null);
    
    const [numberKind, setNumberKind] = useState("main");
    const [part, setPart] = useState(null);
    const [sortBy, setSortBy] = useState('value');

    return (
        <DashboardContext.Provider
            value={{ 
                drawsCount, setDrawsCount,
                lottery, setLottery, // to remove
                lotterySlug, setLotterySlug,
                part, setPart,
                period, setPeriod,
                windowSize, setWindowSize,
                numberKind, setNumberKind,
                selectedNumber, setSelectedNumber,
                sortBy, setSortBy
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
