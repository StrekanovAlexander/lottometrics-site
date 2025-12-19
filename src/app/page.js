import LotterySmallCard from "./components/elements/cards/LotterySmallCard";
import { lotteries, parts } from "@/lib/global";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: 'LottoMetrics - Lottery Results & Analytics Online',
  description:
    'Analyze lottery results online with LottoMetrics. Access archives for Powerball, Euromillions, Mega Millions, EuroJackpot, UK National Lottery, and Lotto 6 aus 49. Explore number frequency, gap analysis, and transparent lottery statistics.',
  alternates: { canonical: 'https://www.lottometrics.app' },
  keywords: [
    'lottery results',
    'lottery analysis',
    'lotto metrics',
    'number frequency',
    'gap analysis',
    'frequency analysis',
    'lottery statistics tool',
    'Powerball results',
    'Euromillions statistics',
    'Mega Millions results',
    'EuroJackpot draws',
    'UK National Lottery results',
    'Lotto 6 aus 49 draws',
  ],
  openGraph: {
    title: 'LottoMetrics - Lottery Results & Analytics Online',
    description:
      'Analyze lottery results online with LottoMetrics. Access archives for Powerball, Euromillions, Mega Millions, EuroJackpot, UK National Lottery, and Lotto 6 aus 49. Explore number frequency, gap analysis, and transparent lottery statistics.',
    url: 'https://www.lottometrics.app',
    siteName: 'LottoMetrics',
    type: 'website',
    // images: [
    //   {
    //     url: 'https://lottometrics.app/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'LottoMetrics Preview',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LottoMetrics - Lottery Results & Analytics Online',
    description:
      'Analyze lottery results online with LottoMetrics. Access archives for Powerball, Euromillions, Mega Millions, EuroJackpot, UK National Lottery, and Lotto 6 aus 49. Explore number frequency, gap analysis, and transparent lottery statistics.',
    // images: ['https://lottometrics.app/og-image.png'],
  },
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <section className="mb-12">
          <h1 className={`${inter.className} text-2xl font-bold text-graphite mb-6`}>
            LottoMetrics - Lottery Analytics Online
          </h1>
          <p className="text-graphite leading-relaxed">
            Analyze lottery results online with LottoMetrics. Access archives for Lotto 6 aus 49, Powerball, Euromillions, Mega Millions, EuroJackpot, and the UK National Lottery. Explore past draws, number frequency, and gap analysis. LottoMetrics offers both online analytics and a Windows offline version for professional lottery research.
          </p>
        </section>
        <section className="mb-12">
          <h2
            className={`${inter.className} text-xl font-bold text-graphite mb-6`}
          >Lotteries for Analysis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {lotteries.map((el, ix) => 
              <LotterySmallCard key={ix} lottery={el}/>  
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2
            className={`${inter.className} text-xl font-bold text-graphite mb-6`}
          >
            Lottery Results and Analysis Methods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {parts.map((el, ix) => { 
              const {fullLabel, description, icon: Icon} = el;
              return (
                <div key={ix}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div className="flex justify-center">
                    <span className="flex items-center justify-center w-10 h-10 bg-graphite-light rounded-full">
                      <Icon size={24} />
                    </span>
                  </div>
                  <h3 className="text-normal font-semibold text-gray-900 my-3">
                    {fullLabel}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {description}
                  </p>  
                </div> 
              )
            } 
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
