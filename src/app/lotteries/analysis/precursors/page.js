import LotteriesData from "@/app/components/lotteries/LotteriesData"
import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "800"],
});

export const metadata = {
    title: 'Lotteries Precursor Analysis - Explore Sequential Patterns',
    description:
        'Explore precursor analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. See which numbers most often precede others, uncover sequential links, and gain deeper statistical insights into number progressions.',
    alternates: { canonical: 'https://www.lottometrics.app/lotteries/analysis/precursors' },
    keywords: [
        'lotteries precursor analysis',
        'lottery sequential analysis',
        'lottery number progressions',
        'lottery statistics sequences',
        'Powerball precursor analysis',
        'Euromillions precursor analysis',
        'Mega Millions precursor analysis',
        'EuroJackpot precursor analysis',
        'UK National Lottery precursor analysis',
        'Lotto 6 aus 49 precursor analysis',
    ],
    openGraph: {
        title: 'Lotteries Precursor Analysis – Explore Sequential Patterns',
        description:
        'Explore precursor analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. See which numbers most often precede others, uncover sequential links, and gain deeper statistical insights into number progressions.',
        url: 'https://www.lottometrics.app/lotteries/analysis/precursors',
        siteName: 'LottoMetrics',
        type: 'website',
        // images: [
        // {
        //     url: 'https://www.lottometrics.app/og-precursors.png',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Lottery Precursor Analysis Overview',
        // },
        // ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lotteries Precursor Analysis – Explore Sequential Patterns',
        description:
        'Explore precursor analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. See which numbers most often precede others, uncover sequential links, and gain deeper statistical insights into number progressions.',
        // images: ['https://www.lottometrics.app/og-precursors.png'],
    },
};

export default function LotteriesAnalysisPrecursors() {
    return (
        <>
            <Breadcrumbs items={[
                { label: "Home", href: "/"},
                { label: "Lotteries", href: "/lotteries"},
                { label: "Precursor Analysis"},
            ]} />    
            <div className="max-w-4xl mx-auto text-center">
                <section className="mb-12">
                    <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
                        Lotteries Precursor Analysis - Explore Sequential Patterns
                    </h1>
                    <p class="mt-2 text-gray-700 text-sm">
                        Precursor Analysis reveals which lottery numbers tend to precede others. Studying sequential pairs helps uncover continuation patterns, highlight predictive links, and provide deeper statistical insights into number progressions.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className={`${inter.className} text-xl font-bold text-graphite mb-6`}>
                        Select a lottery for precursor analysis
                    </h2>
                    <LotteriesData partUrl={'/analysis/precursors'} />
                </section>
            </div>        
        </>
    )
}