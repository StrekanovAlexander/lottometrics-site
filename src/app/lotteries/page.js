import Link from "next/link";
import Breadcrumbs from "@/app/components/layout/Breadcrumbs";
import Card from "../components/ui/Card";
import { Anton } from "next/font/google";
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

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
        <section className="bg-gray-100 mb-8 px-8 p-6">
          <h1 className={`${anton.className} text-gray-900 text-2xl md:text-3xl font-extrabold`}>
            Lotteries
          </h1>
          <p className="text-gray-600 font-semibold">
            Explore Official Lottery Statistics
          </p>
        </section>  
        
        <div class="flex flex-col md:flex-row gap-8 bg-white">
          <div class="md:w-1/2">
            <p class="text-gray-800 text-justify leading-relaxed">
              Our service provides access to comprehensive statistical data from the world's most popular lotteries, including national and international games such as <strong>Powerball</strong>, <strong>EuroMillions</strong>, and <strong>Germany's 6 aus 49</strong>. All datasets are sourced directly from <strong>official lottery operators</strong> and contain the complete archive of past draws. Whether you are interested in <strong>frequency analysis</strong>, <strong>number gaps</strong>, or <strong>interval patterns</strong>, you will find transparent and reliable insights here.
            </p>
          </div>
          <div class="md:w-1/2">
            <p class="text-gray-800 text-justify leading-relaxed">
              <strong>LottoMetrics</strong> is designed to help <strong>players</strong>, <strong>researchers</strong>, and <strong>enthusiasts</strong> explore lottery results with confidence. By combining <strong>historical archives</strong> with <strong>modern analytics</strong>, we make it easy to understand <strong>trends</strong> and <strong>probabilities</strong>. This page serves as your starting point to select a lottery and dive into detailed analysis. <strong>Clear insights empower smarter choices</strong>.
            </p>
          </div>
        </div>
        <section className="my-12 mx-5 md:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.lotteries.map((lottery) => (
              <Card key={lottery.id} lottery={lottery} />
            ))}
          </div>
        </section>  
    </>
  );
}