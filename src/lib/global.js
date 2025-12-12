import { Activity,  ArrowRightLeft, ListChecks, SquaresIntersect } from "lucide-react";

export const lotteries = [
    {slug: 'lotto6aus49', label: 'Lotto 6 aus 49', country: 'Germany', shortText: 'National Lottery'},
    {slug: 'powerball', label: 'Powerball', country: 'United States', shortText: 'Multi State Lottery'},
    {slug: 'euromillions', label: 'Euromillions', country: 'Europe', shortText: 'Transnational Lottery'},
    {slug: 'megamillions', label: 'Mega Millions', country: 'United States', shortText: 'Multi State Lottery'},
    {slug: 'eurojackpot', label: 'EuroJackpot', country: 'Europe', shortText: 'Transnational Lottery'},
    {slug: 'uknationallottery', label: 'UK National Lottery', country: 'United Kingdom', shortText: 'National Lottery'},
];

export const parts = [
    {   name: 'results', 
        label: 'Results', 
        icon: ListChecks, 
        fullLabel: 'Draw Results',
        description: 'Shows the latest lottery draw results with winning numbers and statistics, helping you track outcomes quickly', 
        isInNav: false},
    {   name: 'frequency', 
        label: 'Frequency', 
        icon: Activity, 
        fullLabel: 'Frequency Analysis', 
        description: 'Displays how often each lottery number has appeared across draws, revealing patterns and trends in lottery statistics',
        isInNav: true},
    {   name: 'gaps', 
        label: 'Gaps', 
        icon: ArrowRightLeft, 
        fullLabel: 'Gap Analysis',
        description: 'Highlights how many draws have passed since each number last appeared, making it easy to spot long gaps and recent hits', 
        isInNav: true},
    {   name: 'pairs', 
        label: 'Pairs', 
        icon: SquaresIntersect, 
        fullLabel: 'Pairs Analysis',
        description: 'Pair Analysis reveals which lottery numbers often appear together. Studying frequent pairs helps uncover patterns, compare combinations, and gain statistical insights', 
        isInNav: true},    
];

export const routes = [
    {label: 'Home', href: '/'},
    {label: 'Lotteries', href: '/lotteries'},
    {label: 'Download', href: '/download'},
    {label: 'Docs', href: '/docs'},
    {label: 'About', href: '/about'},
    {label: 'Contact', href: '/contact'},
];

export function isLotteryExists(slug) {
    return lotteries.some(el => el.slug === slug);
}

export function isPartExists(part) {
    return parts.some(el => el.name === part);
}

export function getLotteryLabel(slug) {
    const lottery = lotteries.find(el => el.slug === slug);
    return lottery.label;
}
