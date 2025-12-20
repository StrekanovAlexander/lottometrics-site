"use client";
import { useRouter } from "next/navigation";
import { Dot } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import { lotteries, parts } from "@/lib/global"

export default function SidebarDesktop() {
    const { part, setPart, lotterySlug, setLotterySlug, setSelectedNumber } = useDashboard();
    const router = useRouter();

    function handleLotteryClick(slug) {
        const selectedPart = "results";    
        setLotterySlug(slug);
        setPart(selectedPart);
        setSelectedNumber(null);
        router.push(`/lottery/${slug}/analysis`); 
    }

    function handlePartClick(name) {
        setPart(name); 
        if (lotterySlug) {
            router.push(`/lottery/${lotterySlug}/analysis/${name}`);
        }    
        else {
            router.push(`/lotteries/analysis/${name}`);
        }         
    }

    return (
        <aside className="hidden md:flex md:flex-col w-64 flex-shrink-0 bg-graphite text-lightgray p-4 pt-8">
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
                                <Dot size={18} />
                                <span className="text-sm">{label}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
            {/* <h2 className="text-gray-50 my-3 font-semibold">Analytics</h2>         */}
            {/* <ul className="flex flex-col">
                {parts.filter(el => el.isInNav === true).map(({ name, label, icon: Icon }) => {
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
                                <Icon size={18} />
                                <span className="text-sm">{label}</span>
                            </button>
                        </li>
                    );
                })}
            </ul> */}
        </aside>
    )
}