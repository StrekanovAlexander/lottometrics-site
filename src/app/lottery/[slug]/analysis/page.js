import { isLotteryExists, getLotteryLabel } from "@/lib/global";

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
            title: `${lotteryLabel} - LottoMetrics`,
            description: "Explore honest lottery analytics with LottoMetrics.",
            keywords: ["lottery analysis", "lotto metrics", "number frequency", "lottery statistics"],
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
            <h1>Lottery "{lotteryLabel}" Analysis</h1>
        )
    }    
}