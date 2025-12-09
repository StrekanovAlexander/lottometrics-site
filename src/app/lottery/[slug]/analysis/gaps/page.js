import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import { isLotteryExists, getLotteryLabel } from "@/lib/global";
import GapsData from "@/app/components/lottery/gaps/GapsData";
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
            keywords: ["lottery analysis", "lotto metrics", "number gaps", "lottery statistics"],
        };
    } else {
        const lotteryLabel = getLotteryLabel(slug);
        const url = `https://www.lottometrics.app/lottery/${slug}/analysis/gaps`;
        return {
            title: `${lotteryLabel} Gaps Analysis | LottoMetrics`,
            description:
                `Explore gaps analysis for ${lotteryLabel}. Discover how often each number appears in official draws and gain insights into lottery statistics.`,
            alternates: { canonical: url},
            keywords: [
                `${lotteryLabel} gaps analysis`,
                'lottery number gaps',
                'lotto statistics',
                `${lotteryLabel} results`,
                'lotto metrics',
            ],
            openGraph: {
                title: `${lotteryLabel} Gaps Analysis | LottoMetrics`,
                description:
                `Detailed gaps analysis of ${lotteryLabel} draws. See which numbers appear most often and explore historical patterns.`,
                url: `https://lottometrics.app/lottery/${slug}/analysis/gaps`,
                siteName: 'LottoMetrics',
                type: 'website',
                images: [
                {
                    url: 'https://lottometrics.app/og-frequency.png',
                    width: 1200,
                    height: 630,
                    alt: `${lotteryLabel} Frequency Analysis Preview`,
                },
                ],
            },
        }
    }
}

export default function LotteryFrequencyPage({params}) {
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
                    { label: "Gaps"},
                ]} />    
                <h1 className={`${inter.className} text-xl md:text-2xl font-semibold text-graphite mb-8`}>
                    {lotteryLabel} Lottery Gaps Analysis
                </h1>
                <p className="w-3/4 my-6 text-base text-gray-800 font-semibold border rounded-lg shadow-sm p-6 bg-gray-50">
                    <strong>Gap Analysis</strong> shows how many draws each lottery number has missed since its last appearance. 
                    It highlights long gaps, recent hits, and overall number activity, 
                    helping players and analysts explore lottery statistics and patterns with LottoMetrics.
                </p>
                <GapsData slug={slug} />
            </>
        )
    }    
}