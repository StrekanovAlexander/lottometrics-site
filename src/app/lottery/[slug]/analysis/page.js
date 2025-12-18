import { isLotteryExists, getLotteryLabel } from "@/lib/global";
import Breadcrumbs from "@/app/components/layout/Breadcrumb";
import PageAnalysisData from "@/app/components/lottery/anslysis/PageAnalysisData";
import AnalysisCard from "@/app/components/elements/cards/AnalysisCard";
import { parts } from "@/lib/global"
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
        const url = `https://www.lottometrics.app/lottery/${slug}/analysis`;
        return {
            title: `${lotteryLabel} Lottery Analysis | LottoMetrics`,
            description: `Comprehensive ${lotteryLabel} analytics with LottoMetrics. Explore frequency analysis, gap analysis, hot and cold numbers, and historical draw patterns to gain deeper insights into ${lotteryLabel} results.`,
            alternates: { canonical: url},
            keywords: [
                `${lotteryLabel} analysis`,
                `${lotteryLabel} frequency analysis`,
                `${lotteryLabel} gap analysis`,
                "lottery statistics",
                "lottery number patterns",
                "hot and cold numbers",
                "lotto metrics",
                "lottery analytics",
            ],
            openGraph: {
                title: `${lotteryLabel} Lottery Analysis | LottoMetrics`,
                description: `Discover ${lotteryLabel} frequency and gap analysis with LottoMetrics. Identify historical trends and number patterns.`,
                url: `https://lottometrics.app/lottery/${slug}/analysis`,
                siteName: "LottoMetrics",
                type: "website",
                images: [
                    {
                        url: "https://lottometrics.app/og-frequency.png",
                        width: 1200,
                        height: 630,
                        alt: `${lotteryLabel} Lottery Analysis Preview`,
                    },
                ],
            },
        }
    }
}

export default function LotteryAnalysis ({ params }) {
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
                    { label: "Analysis"},
                ]} />

                <section className="mb-6">
                    <h1 className={`${inter.className} text-xl font-semibold text-graphite`}>
                        {lotteryLabel} Lottery Analysis with LottoMetrics
                    </h1>
                    {/* <p class="mt-4 text-gray-700 leading-relaxed">
                        Discover comprehensive {lotteryLabel} analytics with LottoMetrics. On this page you can explore
                        detailed <span class="font-medium">Frequency Analysis</span> to see which numbers are drawn most
                        often, dive into <span class="font-medium">Gap Analysis</span> to understand intervals between
                        winning numbers, and access additional statistical insights. Our tools help you identify
                        historical patterns, track hot and cold numbers, and make data‑driven decisions for your
                        {lotteryLabel} strategy.
                    </p> */}
                </section>
                <PageAnalysisData slug={slug} /> 
                {/* <div className="max-w-4xl mx-auto text-center">
                    <section className="mb-6">
                        <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
                            {lotteryLabel} Lottery Analysis with LottoMetrics
                        </h1>
                        <p class="mt-4 text-gray-700 leading-relaxed">
                            Discover comprehensive {lotteryLabel} analytics with LottoMetrics. On this page you can explore
                            detailed <span class="font-medium">Frequency Analysis</span> to see which numbers are drawn most
                            often, dive into <span class="font-medium">Gap Analysis</span> to understand intervals between
                            winning numbers, and access additional statistical insights. Our tools help you identify
                            historical patterns, track hot and cold numbers, and make data‑driven decisions for your
                            {lotteryLabel} strategy.
                        </p>
                    </section>
                    <section className="my-8">
                        <div className="flex justify-start gap-6">
                            {parts.filter(el => el.isInNav === true).map((el, ix) => (
                                <AnalysisCard 
                                    key={ix}
                                    slug={slug}
                                    lottery={lotteryLabel} 
                                    part={el}
                                />
                            ))}
                        </div>
                    </section>
                </div> */}
            </>
        )
    }    
}