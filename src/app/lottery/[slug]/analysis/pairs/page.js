import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import { isLotteryExists, getLotteryLabel } from "@/lib/global";
import PairsBar from "@/app/components/lottery/pairs/PairsBar";
import PairsData from "@/app/components/lottery/pairs/PairsData";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export async function generateMetadata({ params }) {
    const { slug } = params;
    if (!slug || !isLotteryExists(slug)) {
        return {
            title: "Unknown Lottery Analysis - LottoMetrics",
            description: "Explore honest lottery analytics with LottoMetrics.",
            keywords: ["lottery analysis", "lotto metrics", "pairs analysis", "lottery statistics"],
        };
    } else {
        const lotteryLabel = getLotteryLabel(slug);
        const url = `https://www.lottometrics.app/lottery/${slug}/analysis/pairs`;
        return {
            title: `${lotteryLabel} Pair Analysis | LottoMetrics`,
            description: `Explore pair analysis for ${lotteryLabel}. Discover which numbers most often appear together in official draws and gain insights into lottery combinations and statistics.`,
            alternates: { canonical: url },
            keywords: [
                `${lotteryLabel} pair analysis`,
                'lottery number pairs',
                'lottery combinations',
                'lotto statistics',
                `${lotteryLabel} results`,
                'lotto metrics',
            ],
            openGraph: {
                title: `${lotteryLabel} Pair Analysis | LottoMetrics`,
                description: `Detailed pair analysis of ${lotteryLabel} draws. See which numbers frequently appear together and explore historical combination patterns.`,
                url: url,
                siteName: 'LottoMetrics',
                type: 'website',
                // images: [
                //   {
                //     url: 'https://www.lottometrics.app/og-pairs.png',
                //     width: 1200,
                //     height: 630,
                //     alt: `${lotteryLabel} Pair Analysis Preview`,
                //   },
                // ],
            },
            twitter: {
                card: 'summary_large_image',
                title: `${lotteryLabel} Pair Analysis | LottoMetrics`,
                description: `Explore pair analysis for ${lotteryLabel}. Discover which numbers most often appear together in official draws and gain insights into lottery combinations and statistics.`,
                // images: ['https://www.lottometrics.app/og-pairs.png'],
            },
        };
    }
}

export default function LotteryPairsPage({params}) {
    const { slug } = params;
    if (!isLotteryExists(slug)) {
        return <p>Select Lottery</p>;
    } else {
        const lotteryLabel = getLotteryLabel(slug);
        return (
            <>
                <Breadcrumbs items={[
                    { label: "Home", href: "/"},
                    { label: "Lotteries", href: "/lotteries"},
                    { label: lotteryLabel, href: `/lottery/${slug}`},
                    { label: "Analysis", href: `/lottery/${slug}/analysis`},
                    { label: "Pairs"},
                ]} />    
                
                <div className="max-w-4xl mx-auto text-center">
                    <section className="mb-6">
                        <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
                            {lotteryLabel} Lottery Pairs Analysis
                        </h1>
                        <p className="mt-2 text-gray-700 text-sm">
                            Pair Analysis shows which lottery numbers most often appear together in official draws. It highlights frequent pairs, rare combinations, and overall pairing activity, helping players and analysts explore lottery statistics and patterns with LottoMetrics.
                        </p>
                    </section>
                    <PairsBar slug={slug} />
                    <PairsData slug={slug} />
                </div>
            </>
        )
    }    
}