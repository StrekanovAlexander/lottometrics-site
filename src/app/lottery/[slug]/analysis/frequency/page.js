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
        const url = `https://www.lottometrics.app/lottery/${slug}/analysis/frequency`;
        return {
            title: `${lotteryLabel} Frequency Analysis | LottoMetrics`,
            description:
                `Explore frequency analysis for ${lotteryLabel}. Discover how often each number appears in official draws and gain insights into lottery statistics.`,
            alternates: { canonical: url},
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
                url: `https://www.lottometrics.app/lottery/${slug}/analysis/frequency`,
                siteName: 'LottoMetrics',
                type: 'website',
                images: [{
                    url: 'https://www.lottometrics.app/og-frequency.png',
                    width: 1200,
                    height: 630,
                    alt: `Frequency Analysis Preview for ${lotteryLabel}`
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
                    { label: "Frequency"},
                ]} /> 

                <div className="max-w-4xl mx-auto text-center">
                    <section className="mb-6">
                        <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
                            {lotteryLabel} Lottery Frequency Analysis
                        </h1>
                        <p class="mt-2 text-gray-700 text-sm">
                            Discover how often lottery numbers appear across draws. LottoMetrics Frequency Analysis reveals hot and cold numbers, helping you explore lottery statistics with clarity.
                        </p>
                    </section>    
                    <FrequencyBar slug={slug} />
                    <FrequencyGrid slug={slug} />
                </div>
            </>
        )
    }    
}