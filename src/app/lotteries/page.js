import Link from "next/link";
import Breadcrumbs from "@/app/components/layout/Breadcrumbs";

export const metadata = {
  title: 'Lotteries List - Official Archives | LottoMetrics',
  description:
    'Browse the list of supported lotteries including Powerball, EuroMillions, and Germany`s 6 aus 49. Access official archives of past draws and explore detailed statistics on each lottery.',
  keywords: [
    'lotteries list',
    'lottery archives',
    'official lottery results',
    'Powerball',
    'EuroMillions',
    '6 aus 49',
    'lotto metrics',
  ],
  openGraph: {
    title: 'Lotteries List - Official Archives | LottoMetrics',
    description:
      'Select from popular lotteries like Powerball, EuroMillions, and 6 aus 49 to view official archives and statistics.',
    url: 'https://lottometrics.app/lotteries',
    siteName: 'LottoMetrics',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Lotteries List - Official Archives | LottoMetrics',
    description:
      'Browse supported lotteries and access official archives with LottoMetrics.',
  },
};

export default async function LotteriesPage() {
    const response = await fetch(`${process.env.BASE_URL}/api/lotteries`, {cache: "no-store"} );
    if (!response.ok) {
        return <div>Error page</div>;
    }
    const data = await response.json();
    return (
      <>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Lotteries" },
          ]}
        />
        <h1 className="text-4xl font-bold mb-8">Lotteries</h1>
        <section className="bg-gray-50 py-12 px-6 text-center border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Explore Official Lottery Statistics
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Our service provides you with access to comprehensive statistical data from the world’s most popular lotteries, including national and international games such as Powerball, EuroMillions, and Germany’s 6 aus 49. 
              All datasets are sourced directly from official lottery operators and contain the complete archive of past draws. 
              Whether you are interested in frequency analysis, number gaps, or interval patterns, you will find transparent and reliable insights here.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              LottoMetrics is designed to help players, researchers, and enthusiasts explore lottery results with confidence. 
              By combining historical archives with modern analytics, we make it easy to understand trends and probabilities. 
              This page serves as your starting point to select a lottery and dive into detailed analysis.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-6 mt-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Cards */}
            {data.lotteries.map((el) => (
              <div key={el.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{el.lottery_name}</h3>
                  <p className="text-sm text-gray-500 text-center mb-1">{el.country} <span className="text-gray-700 text-sm">{el.description_short_en}</span></p>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href={`/lottery/${el.slug}`}
                    className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                    More details
                  </Link>  
                </div>
              </div>
            ))}
          </div>
        </section>  
    </>
  );
}