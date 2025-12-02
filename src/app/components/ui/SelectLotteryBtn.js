"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function SelectLotteryBtn() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    
    const handleSelect = (slug) => router.push(`/lottery/${slug}/analysis`);

    return (
    <div className="relative inline-block text-left">
        <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 
              bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
        >
            <ChevronDown className="w-5 h-5 mr-2" />
            Change Lottery
        </button>

        {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-300">
            <ul className="py-1 text-sm text-gray-700">
                <li>
                    <button
                        onClick={() => handleSelect("6-aus-49")}
                        className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                    >
                        6 aus 49
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleSelect("powerball")}
                        className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                    >
                        Powerball
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleSelect("euromillions")}
                        className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                    >
                        Euromillions
                    </button>
                </li>
            </ul>
        </div>
        )}
    </div>
    )
}
