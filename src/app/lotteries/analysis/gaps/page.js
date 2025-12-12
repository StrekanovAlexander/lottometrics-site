import LotteriesData from "@/app/components/lotteries/LotteriesData"
import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
    title: 'Lotteries Gap Analysis – Track Number Intervals',
    description:
        'Explore gap analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. Discover how many draws have passed since each number last appeared and compare long‑term intervals.',
    alternates: { canonical: 'https://www.lottometrics.app/lotteries/analysis/gaps' },
    keywords: [
        'lotteries gap analysis',
        'lottery number gaps',
        'lottery intervals',
        'lottery statistics comparison',
        'Powerball gap analysis',
        'Euromillions gap analysis',
        'Mega Millions gap analysis',
        'EuroJackpot gap analysis',
        'UK National Lottery gap analysis',
        'Lotto 6 aus 49 gap analysis',
    ],
    openGraph: {
        title: 'Lotteries Gap Analysis – Track Number Intervals',
        description:
        'Explore gap analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. Discover how many draws have passed since each number last appeared and compare long‑term intervals.',
        url: 'https://www.lottometrics.app/lotteries/analysis/gaps',
        siteName: 'LottoMetrics',
        type: 'website',
        // images: [
        // {
        //     url: 'https://www.lottometrics.app/og-gaps.png',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Lottery Gap Analysis Overview',
        // },
        // ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lotteries Gap Analysis – Track Number Intervals',
        description:
        'Explore gap analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. Discover how many draws have passed since each number last appeared and compare long‑term intervals.',
        // images: ['https://www.lottometrics.app/og-gaps.png'],
    },
};

export default function LotteriesAnalysisGaps() {
    return (
        <>
            <Breadcrumbs items={[
                { label: "Home", href: "/"},
                { label: "Lotteries", href: "/lotteries"},
                { label: "Gaps Analysis"},
            ]} />    
            <div className="max-w-4xl mx-auto text-center">
                <section className="mb-6">
                    <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
                        Lotteries Gap Analysis - Identify Number Intervals

                    </h1>
                    <p class="mt-2 text-gray-700 text-sm">
                        Explore gap analysis across six major lotteries: Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and UK National Lottery. Discover how many draws have passed since each number last appeared, compare long‑term intervals, and select a lottery below for detailed statistics.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className={`${inter.className} text-xl font-bold text-graphite mb-6`}>
                        Lotteries List
                    </h2>
                    <LotteriesData partUrl={'/analysis/gaps'} />
                </section>
            </div>        
        </>
    )
}