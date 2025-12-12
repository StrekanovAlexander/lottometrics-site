import LotteriesData from "@/app/components/lotteries/LotteriesData"
import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "800"],
});

export const metadata = {
    title: 'Lotteries Pair Analysis – Discover Number Combinations',
    description:
        'Explore pair analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. See which numbers most often appear together, uncover frequent pairs, and compare combinations across games.',
    alternates: { canonical: 'https://www.lottometrics.app/lotteries/analysis/pairs' },
    keywords: [
        'lotteries pair analysis',
        'lottery number pairs',
        'lottery combinations',
        'lottery statistics comparison',
        'Powerball pair analysis',
        'Euromillions pair analysis',
        'Mega Millions pair analysis',
        'EuroJackpot pair analysis',
        'UK National Lottery pair analysis',
        'Lotto 6 aus 49 pair analysis',
    ],
    openGraph: {
        title: 'Lotteries Pair Analysis – Discover Number Combinations',
        description:
        'Explore pair analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. See which numbers most often appear together, uncover frequent pairs, and compare combinations across games.',
        url: 'https://www.lottometrics.app/lotteries/analysis/pairs',
        siteName: 'LottoMetrics',
        type: 'website',
        // images: [
        // {
        //     url: 'https://www.lottometrics.app/og-pairs.png',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Lottery Pair Analysis Overview',
        // },
        // ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lotteries Pair Analysis – Discover Number Combinations',
        description:
        'Explore pair analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. See which numbers most often appear together, uncover frequent pairs, and compare combinations across games.',
        // images: ['https://www.lottometrics.app/og-pairs.png'],
    },
};

export default function LotteriesAnalysisPairs() {
    return (
        <>
            <Breadcrumbs items={[
                { label: "Home", href: "/"},
                { label: "Lotteries", href: "/lotteries"},
                { label: "Pairs Analysis"},
            ]} />    
            <div className="max-w-4xl mx-auto text-center">
                <section className="mb-12">
                    <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
                        Lotteries Pair Analysis – Discover Number Combinations
                    </h1>
                    <p class="mt-2 text-gray-700 text-sm">
                        Explore pair analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. See which numbers most often appear together, uncover frequent pairs, and select a lottery below for detailed statistics.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className={`${inter.className} text-xl font-bold text-graphite mb-6`}>
                        Select a lottery for pair analysis
                    </h2>
                    <LotteriesData partUrl={'/analysis/pairs'} />
                </section>
            </div>        
        </>
    )
}