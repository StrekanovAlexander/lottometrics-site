"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const lotteries = [
    {slug: 'lotto6aus49', name: 'Lotto 6 aus 49' },
    {slug: 'powerball', name: 'Powerball' },
    {slug: 'euromillions', name: 'Euromillions' },
    {slug: 'megamillions', name: 'Mega Millions'},
    {slug: 'eurojackpot', name: 'EuroJackpot'},
    {slug: 'uknationallottery', name: 'UK National Lottery'},
];

export default function SelectLotteryBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    
    function handleSelect (slug) {
        setIsOpen(false);
        router.push(`/dashboard/lottery/${slug}/results`);
    }    

    return (
    <div className="relative inline-block text-left">
        <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            class="
                w-full px-4 py-2 text-left
                bg-graphite-dark  
                text-lightgray 
                font-bold
                border border-gray-700 
                rounded-md 
                shadow-md 
                hover:shadow-lg  
                transition
                flex items-center gap-2"
        >
            <ChevronDown className="w-5 h-5" />
            Change Lottery
        </button>

        {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-300">
            <ul className="py-1 text-sm text-gray-700">
                {lotteries.map(el => (
                    <li key={el.slug}>
                        <button
                            onClick={() => handleSelect(el.slug)}
                            className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                        >
                        {el.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        )}
    </div>
    )
}