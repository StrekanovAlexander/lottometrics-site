import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import { isLotteryExists, getLotteryLabel } from "@/lib/global";
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
            keywords: ["lottery analysis", "lotto metrics", "number precursors", "lottery statistics"],
        };
    } else {
        const lotteryLabel = getLotteryLabel(slug);
        const url = `https://www.lottometrics.app/lottery/${slug}/analysis/precursors`;
        return {
            title: `${lotteryLabel} Precursors Analysis | LottoMetrics`,
            description:
                `Explore precursor analysis for ${lotteryLabel}. Discover which numbers tend to precede others in official draws, uncover sequential patterns, and gain deeper insights into lottery statistics.`,
            alternates: { canonical: url },
            keywords: [
                `${lotteryLabel} precursors analysis`,
                'lottery sequential analysis',
                'lottery number progressions',
                'lotto statistics',
                `${lotteryLabel} results`,
                'lotto metrics',
            ],
            openGraph: {
                title: `${lotteryLabel} Precursors Analysis | LottoMetrics`,
                description:
                    `Detailed precursor analysis of ${lotteryLabel} draws. See which numbers most often precede others, explore continuation patterns, and uncover predictive links.`,
                url: `https://www.lottometrics.app/lottery/${slug}/analysis/precursors`,
                siteName: 'LottoMetrics',
                type: 'website',
                // images: [
                //     {
                //         url: 'https://www.lottometrics.app/og-precursors.png',
                //         width: 1200,
                //         height: 630,
                //         alt: `${lotteryLabel} Precursor Analysis Preview`,
                //     },
                // ],
            },
            twitter: {
                card: 'summary_large_image',
                title: `${lotteryLabel} Precursors Analysis | LottoMetrics`,
                description:
                    `Explore precursor analysis for ${lotteryLabel}. Discover sequential number patterns, predictive links, and deeper lottery insights with LottoMetrics.`,
                // images: ['https://lottometrics.app/og-precursors.png'],
            },
        }
    }
}

export default function LotteryPrecursorsPage({params}) {
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
                    { label: "Precursors"},
                ]} />    
                
                <div className="max-w-4xl mx-auto text-center">
                    <section className="mb-6">
                        <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
                            {lotteryLabel} Lottery Precursors Analysis
                        </h1>
                        <p className="mt-2 text-gray-700 text-sm">
                            Precursor Analysis shows which lottery numbers tend to precede others in recent draws.
                            It highlights sequential links, continuation patterns, and predictive relationships,
                            helping players and analysts explore lottery statistics and uncover deeper insights into number progressions with LottoMetrics.
                        </p>
                    </section>
                    {/* <GapsData slug={slug} /> */}
                </div>
            </>
        )
    }    
}