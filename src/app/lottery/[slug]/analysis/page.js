// app/lottery/[slug]/analysis/page.js
export default async function LotteryAnalysisPage({ params }) {
    const { slug } = params;

    const response = await fetch(`${process.env.BASE_URL}/api/lotteries/${slug}/analysis`, {
        cache: "no-store", 
    });
    
    const { data } = await response.json();
    
    if (!data || data.length === 0) {
        return (
            <section className="max-w-3xl mx-auto py-12">
                <h1 className="text-2xl font-bold mb-6">Unknown Lottery</h1>
            </section>
        );
    }

    const lotteryName = data[0]?.lottery_name;
    const isoCode = data[0]?.iso_code;
    const description = data[0]?.description_en;

    return (
        <section className="mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6 text-center">
                { lotteryName } ({ isoCode })
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
                { description }
            </p>
            <p className="mt-10 text-center">
                Data coming soon...
            </p>
        </section>
    );
}
