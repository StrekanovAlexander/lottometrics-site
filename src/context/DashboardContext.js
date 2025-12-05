// DashboardContext.js
"use client";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext(null);
export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
    const [lottery, setLottery] = useState(null);
    const [part, setPart] = useState(null);

    return (
        <DashboardContext.Provider
            value={{ 
                lottery, setLottery,
                part, setPart 
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
