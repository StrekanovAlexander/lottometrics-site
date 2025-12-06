import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import { isLotteryExists, getLotteryLabel } from "@/lib/global";
import FrequencyBar from "@/app/components/lottery/frequency/FrequencyBar";
import FrequencyGrid from "@/app/components/lottery/frequency/FrequencyGrid";
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
            keywords: ["lottery analysis", "lotto metrics", "number frequency", "lottery statistics"],
        };
    } else {
        const lotteryLabel = getLotteryLabel(slug);
        return {
            title: `${lotteryLabel} Frequency Analysis | LottoMetrics`,
            description:
                `Explore frequency analysis for ${lotteryLabel}. Discover how often each number appears in official draws and gain insights into lottery statistics.`,
            keywords: [
                `${lotteryLabel} frequency analysis`,
                'lottery number frequency',
                'lotto statistics',
                `${lotteryLabel} results`,
                'lotto metrics',
            ],
            openGraph: {
                title: `${lotteryLabel} Frequency Analysis | LottoMetrics`,
                description:
                `Detailed frequency analysis of ${lotteryLabel} draws. See which numbers appear most often and explore historical patterns.`,
                url: `https://lottometrics.app/lottery/${lotteryLabel}/analysis/frequency`,
                siteName: 'LottoMetrics',
                type: 'website',
                // images: [
                // {
                //     url: 'https://lottometrics.app/og-frequency.png',
                //     width: 1200,
                //     height: 630,
                //     alt: `${lotteryLabel} Frequency Analysis Preview`,
                // },
                // ],
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
                    { label: lotteryLabel, href: `/lotteries/${slug}`},
                    { label: "Analysis", href: `/lotteries/${slug}/analysis`},
                    { label: "Frequency"},
                ]} />    
                <h1 className={`${inter.className} text-2xl md:text-3xl font-bold text-graphite mb-8`}>
                    Lottery "{lotteryLabel}" Frequency Analysis
                </h1>
                <FrequencyBar slug={slug} />
                <FrequencyGrid slug={slug} />
            </>
        )
    }    
}