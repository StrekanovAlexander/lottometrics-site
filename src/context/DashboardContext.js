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
    const [lottery, setLottery] = useState(null);
    const [part, setPart] = useState(null);
    const [showZero, setShowZero] = useState(false);
    const [sorting, setSorting] = useState("desc");

    return (
        <DashboardContext.Provider
            value={{ 
                drawsCount, setDrawsCount,
                lottery, setLottery,
                part, setPart,
                period, setPeriod,
                showZero, setShowZero,
                sorting, setSorting
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
