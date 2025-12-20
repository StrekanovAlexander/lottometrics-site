"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Settings, X } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import { lotteries, parts } from "@/lib/global"

export default function SidebarMobile() {
    const { part, setPart, lotterySlug, setLotterySlug, setSelectedNumber } = useDashboard();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    function handleLotteryClick(slug) {
        const selectedPart = "results";    
        setLotterySlug(slug);
        setPart(selectedPart);
        setSelectedNumber(null);
        setOpen(false);
        router.push(`/lottery/${slug}/analysis`);
    }

    function handlePartClick(name) {
        setPart(name); 
        setOpen(false); 
        router.push(`/lottery/${lottery}/analysis/${name}`);
    }

    return (
        <div className="flex justify-between">
            <button
                className="md:hidden p-2 rounded bg-graphite-dark text-yellow"
                onClick={() => setOpen(true)}
            >
                <Settings />
            </button>
            {open && (
                <div className="md:hidden fixed inset-0 z-50 flex">
                    <aside className="w-2/3 bg-graphite text-lightgray p-6">
                        <button
                            className="mb-4 text-right w-full"
                            onClick={() => setOpen(false)}
                        >
                            <X />
                        </button>
                        <h2 className="text-gray-50 mb-2 font-semibold">Lotteries</h2>
                        <ul className="flex flex-col">
                            {lotteries.map(({ slug, label }) => {
                                const isActive = slug === lotterySlug;
                                return (
                                    <li key={slug}>
                                        <button
                                            onClick={() => handleLotteryClick(slug)}
                                            className={`w-full flex items-center gap-3 mb-1 px-4 py-2 rounded-md transition-colors
                                            ${isActive 
                                                ? "text-yellow font-semibold" 
                                                : "hover:bg-graphite-light hover:text-graphite"}
                                            `}
                                        >
                                            <span className="text-sm">{label}</span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        {/* <h2 className="text-gray-50 my-3 font-semibold">Analytics</h2>         */}
                        {/* <ul className="flex flex-col">
                            {parts.filter(el => el.isInNav === true).map(({ name, label }) => {
                                const isActive = name === part;
                                return (
                                    <li key={name}>
                                        <button
                                            onClick={() => handlePartClick(name)}
                                            className={`w-full flex items-center gap-3 mb-1 px-4 py-2 rounded-md transition-colors
                                            ${isActive 
                                                ? "text-yellow font-semibold" 
                                                : "hover:bg-graphite-light hover:text-graphite"}
                                            `}
                                        >
                                            <span className="text-sm">{label}</span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul> */}
                    </aside>
                    <div
                        className="flex-grow bg-black bg-opacity-50"
                        onClick={() => setOpen(false)}
                    />
                </div>
            )}
        </div>
    );
}
