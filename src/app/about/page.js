import Image from "next/image";
import Breadcrumbs from "../components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: 'About LottoMetrics - Verified Lottery Archives & Analytics',
  description:
    'Discover LottoMetrics: transparent lottery statistics, official archives of Powerball, EuroMillions, Mega Millions, EuroJackpot, UK National Lottery, and Germany’s 6 aus 49. Explore number frequency, hot and cold numbers, and winning strategies with modern analytics.',
  alternates: { canonical: 'https://www.lottometrics.app/about' },
  keywords: [
    'lottery statistics',
    'lottery results',
    'lottery archives',
    'official lottery data',
    'Powerball',
    'EuroMillions',
    'Mega Millions',
    'EuroJackpot',
    'UK National Lottery',
    'Lotto 6 aus 49',
    'lucky lottery numbers',
    'winning lottery strategies',
    'lotto metrics',
  ],
  alternates: { canonical: 'https://www.lottometrics.app/about' },
  openGraph: {
    title: 'About LottoMetrics - Verified Lottery Archives & Analytics',
    description:
      'Learn about LottoMetrics: trusted source for official lottery archives and modern analytics. Explore Powerball, EuroMillions, Mega Millions, EuroJackpot, UK National Lottery, and 6 aus 49 results with confidence.',
    url: 'https://www.lottometrics.app/about',
    siteName: 'LottoMetrics',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About LottoMetrics - Verified Lottery Archives & Analytics',
    description:
      'Explore LottoMetrics: official lottery archives, transparent statistics, and modern analysis tools.',
  },
};

export default function About() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "About"},
      ]} />   
        
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <section className="mb-8">
            <h1 className={`${inter.className} text-2xl font-bold text-graphite`}>
              About LottoMetrics
            </h1>
            <p className="text-gray-600">
              Verified data and modern lottery analysis methods
            </p>
          </section>
          <section className="mb-8 border rounded-xl bg-gray-50 p-6">
            <p class="text-gray-600 mb-2">
              LottoMetrics is built for players, researchers, and enthusiasts who want transparent, reliable <strong>lottery statistics</strong> and clear insights from <strong>lottery results</strong> and <strong>past lottery draws</strong>. Our platform combines historical archives with modern analytics to help you understand trends, probabilities, and the patterns behind winning numbers.
            </p>
          </section>
        
          <section className="mb-8 border rounded-xl bg-gray-50 p-6">
            <h2 class={`${inter.className} text-lg font-bold mb-4`}>Lottery archives from official sources</h2>
            <p class="text-gray-600 mb-4">
              We provide complete archives sourced directly from official lottery operators. Explore histories and <strong>Mega Millions winning numbers</strong>, <strong>EuroJackpot draws</strong>, and <strong>UK National Lottery results</strong> along with other major international games.
            </p>
            <ul class="inline-block list-disc pl-6 text-gray-800 space-y-2 text-left">
              <li><strong>Lotto 6 aus 49 (Germany):</strong> available from 1955</li>
              <li><strong>Powerball (USA):</strong> available from 1992</li>
              <li><strong>EuroMillions (Europe):</strong> available from 2004</li>
              <li><strong>Mega Millions (USA):</strong> available from 1996</li>
              <li><strong>EuroJackpot (Europe):</strong> available from 2012</li>
              <li><strong>UK National Lottery:</strong> available from 1994</li>
            </ul>
          </section>
          <section className="mb-8 border rounded-xl bg-gray-50 p-6">
            <h2 class={`${inter.className} text-lg font-bold mb-4`}>Analytics to explore number behavior</h2>
            <p class="text-gray-600 mb-4">
              Use our tools to run <strong>number frequency analysis</strong>, study <strong>lottery number gaps</strong>, identify <strong>hot and cold numbers</strong>, and examine interval patterns and pair relationships.
            </p>
            <ul class="inline-block list-disc pl-6 text-gray-800 space-y-2 text-left">
              <li><strong>Frequency analysis:</strong> see how often each number appears</li>
              <li><strong>Gaps and intervals:</strong> track skips and spacing between appearances</li>
              <li><strong>Hot and cold numbers:</strong> discover recent momentum vs. long-term dormancy</li>
              <li><strong>Pair analysis:</strong> find numbers that tend to occur together</li>
            </ul>
          </section>
          <section className="mb-8 border rounded-xl bg-gray-50 p-6">  
            <h2 class={`${inter.className} text-lg font-bold`}>Guidance for smarter selections</h2>
            <p class="text-gray-600">
              Whether you prefer <strong>lucky lottery numbers</strong> or data-driven choices, our insights can support <strong>winning lottery strategies</strong> and offer practical ideas on <strong>how to pick lottery numbers</strong>. Analytics do not guarantee outcomes, but they help you make informed decisions.
            </p>
          </section>
          <section className="mb-8 border rounded-xl bg-gray-50 p-6">  
            <h2 class={`${inter.className} text-lg font-bold mb-4`}>Trust, security, and international coverage</h2>
            <p class="text-gray-600">
              LottoMetrics aims to be your <strong>trusted lottery site</strong> with a focus on clarity and data integrity. We cover <strong>international lottery games</strong> and align with best practices around <strong>secure lottery tickets</strong>. If you play online, always choose reputable platforms and verify official sources.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
