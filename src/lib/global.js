import { Activity,  ArrowRightLeft, BarChart3, ListChecks } from "lucide-react";

export const lotteries = [
    {slug: 'lotto6aus49', label: 'Lotto 6 aus 49' },
    {slug: 'powerball', label: 'Powerball' },
    {slug: 'euromillions', label: 'Euromillions' },
    {slug: 'megamillions', label: 'Mega Millions'},
    {slug: 'eurojackpot', label: 'EuroJackpot'},
    {slug: 'uknationallottery', label: 'UK National Lottery'},
];

export const parts = [
    {name: 'results', label: 'Results', icon: ListChecks, isInNav: false},
    {name: 'frequency', label: 'Frequency', icon: Activity, isInNav: true},
    {name: 'gaps', label: 'Gaps', icon: ArrowRightLeft, isInNav: true},
];

export function isLotteryExists(slug) {
    return lotteries.some(el => el.slug === slug);
}

export function isPartExists(part) {
    return parts.some(el => el.name === part);
}
