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
        <div>
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Lotteries" },
            ]} />    
             <section>
                <h1 className={`${inter.className} text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900`}>
                    Explore popular international lotteries on LottoMetrics
                </h1>
                <p className="my-6 text-base sm:text-lg text-gray-700">
                    Here you'll find the complete list of six major lotteries we cover. Each card leads you to
                    official results and winning numbers for your chosen game. From Powerball and Mega Millions to
                    EuroMillions, EuroJackpot, the UK National Lottery, and Germany's Lotto 6 aus 49 — all are
                    available in one place.
                </p>
            </section>

            <section className="py-4">
                <h2 className={`${inter.className} text-xl md:text-2xl font-bold text-gray-900`}>
                    Lottery results & winning numbers - Powerball, Mega Millions, EuroMillions, EuroJackpot, UK National Lottery, Lotto 6 aus 49
                </h2>
                <p className="my-4 text-gray-700">
                Discover official lottery results and winning numbers for six of the world's most popular
                lotteries. LottoMetrics provides direct access to Powerball results, Mega Millions winning
                numbers, EuroMillions draws, EuroJackpot archives, UK National Lottery results, and Germany's
                Lotto 6 aus 49.
                </p>
            </section>
            <LotteriesData />
        </div>
    )
}