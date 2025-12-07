// /lotteries

import LotteriesData from "../components/lotteries/LotteriesData"
import Breadcrumbs from "../components/layout/Breadcrumb";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
    title: 'Lotteries List - Official Archives | LottoMetrics',
    description:
        'Browse the list of supported lotteries including Germany`s 6 aus 49, Powerball, EuroMillions, Mega Millions, EuroJackpot, and UK National Lottery. Access official archives of past draws and explore detailed statistics on each lottery.',
    alternates: 
        { canonical: `https://www.lottometrics.app/lotteries`},
    keywords: [
        'lotteries list',
        'lottery archives',
        'official lottery results',
        'Powerball',
        'EuroMillions',
        'Germany`s 6 aus 49',
        'Mega Millions',
        'EuroJackpot',
        'UK National Lottery',
        'lotto metrics',
    ],
    openGraph: {
        title: 'Lotteries List - Official Archives | LottoMetrics',
        description:
        'Select from popular lotteries like Powerball, EuroMillions, Mega Millions, EuroJackpot, UK National Lottery and Germany`s 6 aus 49 to view official archives and statistics.',
        url: 'https://lottometrics.app/lotteries',
        siteName: 'LottoMetrics',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Lotteries List - Official Archives | LottoMetrics',
        description:
        'Browse supported lotteries and access official archives with LottoMetrics.',
    },
};

export default function LotteriesPage() {
    return (
        <div>
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Lotteries" },
            ]} />    
            <h1 className={`${inter.className} text-xl md:text-2xl font-bold text-graphite mb-8`}>
                Lotteries List
            </h1>
            <LotteriesData />
        </div>
    )
}