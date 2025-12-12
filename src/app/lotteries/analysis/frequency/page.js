import LotteriesData from "@/app/components/lotteries/LotteriesData"
import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
    title: 'Lotteries Frequency Analysis – Compare Hot & Cold Numbers',
    description:
        'Explore frequency analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. Compare hot and cold numbers, discover number statistics, and select a lottery for detailed insights.',
    alternates: { canonical: 'https://www.lottometrics.app/lotteries/analysis/frequency' },
    keywords: [
        'lotteries frequency analysis',
        'lottery number frequency',
        'hot and cold numbers',
        'lottery statistics comparison',
        'Powerball frequency analysis',
        'Euromillions frequency analysis',
        'Mega Millions frequency analysis',
        'EuroJackpot frequency analysis',
        'UK National Lottery frequency analysis',
        'Lotto 6 aus 49 frequency analysis',
    ],
    openGraph: {
        title: 'Lotteries Frequency Analysis – Compare Hot & Cold Numbers',
        description:
        'Explore frequency analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. Compare hot and cold numbers, discover number statistics, and select a lottery for detailed insights.',
        url: 'https://www.lottometrics.app/lotteries/analysis/frequency',
        siteName: 'LottoMetrics',
        type: 'website',
        images: [
        {
            url: 'https://www.lottometrics.app/og-frequency.png',
            width: 1200,
            height: 630,
            alt: 'Lottery Frequency Analysis Overview',
        },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lotteries Frequency Analysis – Compare Hot & Cold Numbers',
        description:
        'Explore frequency analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. Compare hot and cold numbers, discover number statistics, and select a lottery for detailed insights.',
        images: ['https://www.lottometrics.app/og-frequency.png'],
    },
};

export default function LotteriesAnalysisFrequency() {
    return (
        <>
            <Breadcrumbs items={[
                { label: "Home", href: "/"},
                { label: "Lotteries", href: "/lotteries"},
                { label: "Frequency Analysis"},
            ]} />    
            <div className="max-w-4xl mx-auto text-center">
                <section className="mb-6">
                    <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
                        Lotteries Frequency Analysis - Choose Your Lottery
                    </h1>
                    <p class="mt-2 text-gray-700 text-sm">
                        Explore frequency analysis for Powerball, Euromillions, Mega Millions, EuroJackpot, UK National Lottery, and Lotto 6 aus 49. Select a lottery below to view detailed number statistics.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className={`${inter.className} text-xl font-bold text-graphite mb-6`}>
                        Lotteries List
                    </h2>
                    <LotteriesData partUrl={'/analysis/frequency'} />
                </section>
            </div>        
        </>
    )
}