// /lotteries
import LotteriesData from "../components/lotteries/LotteriesData"
import Breadcrumbs from "../components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: 'Lotteries List - Official Archives | LottoMetrics',
  description:
    'Browse the list of supported lotteries including Germany`s 6 aus 49, Powerball, EuroMillions, Mega Millions, EuroJackpot, and UK National Lottery. Access official archives of past draws and view winning numbers for each lottery.',
  alternates: { canonical: `https://www.lottometrics.app/lotteries` },
  keywords: [
    'lotteries list',
    'lottery archives',
    'official lottery results',
    'Powerball',
    'EuroMillions',
    'Germany`s 6 aus 49',
    'Mega Millions',
    'EuroJackpot',
    'UK National Lottery',
    'lotto metrics',
  ],
  openGraph: {
    title: 'Lotteries List - Official Archives | LottoMetrics',
    description:
      'Select from popular lotteries like Powerball, EuroMillions, Mega Millions, EuroJackpot, UK National Lottery and Germany`s 6 aus 49 to view official archives and winning numbers.',
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

export default function LotteriesPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Lotteries" },
      ]} />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">   
          <section className="mb-12">
            <h1 className={`${inter.className} text-2xl font-bold text-graphite mb-6`}>
              Explore popular international lotteries on LottoMetrics
            </h1>
            <p className="text-graphite leading-relaxed">
              Here you'll find the complete list of six major lotteries we cover. Each card leads you to
              official results and winning numbers for your chosen game. From Powerball and Mega Millions to
              EuroMillions, EuroJackpot, the UK National Lottery, and Germany's Lotto 6 aus 49 — all are
              available in one place.
            </p>
          </section>
          <section className="mb-12">
            <h2 className={`${inter.className} text-xl font-bold text-graphite mb-6`}>
              Lottery results & winning numbers - Powerball, Mega Millions, EuroMillions, EuroJackpot, UK National Lottery, Lotto 6 aus 49
            </h2>
            <p className="my-4 text-gray-700">
              Discover official lottery results and winning numbers for six of the world's most popular
              lotteries. LottoMetrics provides direct access to Powerball results, Mega Millions winning
              numbers, EuroMillions draws, EuroJackpot archives, UK National Lottery results, and Germany's
              Lotto 6 aus 49.
            </p>
          </section>
          <section className="mb-12">
            <h2 className={`${inter.className} text-xl font-bold text-graphite mb-6`}>
              Lotteries List
            </h2>
            <LotteriesData />
          </section>
        </div>
      </div>
    </>
  )
}