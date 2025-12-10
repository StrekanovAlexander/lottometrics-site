import Image from "next/image";
import Breadcrumbs from "../components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: "LottoMetrics Documentation - Guides & Analytics",
  description:
    "Learn how to use LottoMetrics desktop software: frequency analysis, gaps, intervals, and flexible data updates.",
  alternates: { canonical: 'https://www.lottometrics.app/docs' },
  keywords: [
    "lottery documentation",
    "lottery frequency analysis",
    "lottery gaps analysis",
    "lottery interval analysis",
    "lottery software",
    "lotto metrics",
  ],
  openGraph: {
    title: "LottoMetrics Documentation - Guides & Analytics",
    description:
      "Explore LottoMetrics desktop app: frequency, gaps, and interval analysis with flexible data updates.",
    url: "https://www.lottometrics.app/docs",
    siteName: "LottoMetrics",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LottoMetrics Documentation - Guides & Analytics",
    description:
      "Guides for LottoMetrics desktop app: frequency, gaps, and interval analysis modules.",
  },
};

export default function Docs() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Docs"},
      ]} />   
        
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <section className="mb-8">
            <h1 className={`${inter.className} text-2xl font-bold text-graphite mb-6`}>
              LottoMetrics Documentation
            </h1>
            <p className="text-gray-600 leading-relaxed">
              The LottoMetrics desktop application provides clear tools for analyzing lottery results.
              Select the lottery you want to explore, apply filters by time period, and access modules
              designed for transparency and usability.
            </p>
          </section>
          <section className="mb-8 border rounded-xl bg-gray-50 p-6">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src="/images/lottometrics-frequency-analysis.png"
                  alt="LottoMetrics frequency analysis"
                  width={450}
                  height={300}
                  className="rounded shadow"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className={`${inter.className} text-left text-lg font-bold text-gray-900 mb-2`}>
                  Frequency Analysis
                </h2>
                <p className="text-gray-600 text-justify mb-2">
                  <strong>Frequency Analysis</strong> shows how often each number has appeared in past draws. It helps
                  identify hot numbers (frequently drawn) and cold numbers (rarely drawn), giving users
                  a clear view of historical trends.
                </p>
                <p className="text-gray-600 text-justify">
                  This module highlights long‑term patterns without predicting outcomes, empowering
                  players and researchers to make informed decisions.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-8 border rounded-xl bg-gray-50 p-6">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src="/images/lottometrics-gaps-analysis.png"
                  alt="LottoMetrics gaps analysis"
                  width={450}
                  height={300}
                  className="rounded shadow"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className={`${inter.className} text-left text-lg font-bold text-gray-900 mb-2`}>
                  Gaps Analysis
                </h2>
                <p className="text-gray-600 text-justify mb-2">
                  <strong>Gaps Analysis</strong> highlights how many draws have passed since each number last appeared.
                  It reveals delay patterns and shows how long specific numbers remain absent.
                </p>
                <p className="text-gray-600 text-justify">
                  This perspective complements frequency analysis, offering a transparent view of
                  lottery dynamics and absence trends.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-8 border rounded-xl bg-gray-50 p-6">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src="/images/lottometrics-interval-analysis.png"
                  alt="LottoMetrics intervals analysis"
                  width={450}
                  height={300}
                  className="rounded shadow"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className={`${inter.className} text-left text-lg font-bold text-gray-900 mb-2`}>
                  Number Rhythm Analysis
                </h2>
                <p className="text-gray-600 text-justify mb-2">
                  <strong>Rhythm Analysis</strong> focuses on intervals between appearances of each number. It highlights
                  the natural timing of returns and shows whether numbers follow stable cycles or
                  irregular patterns.
                </p>
                <p className="text-gray-600 text-justify">
                  This module helps compare short‑term fluctuations with long‑term rhythms, offering a
                  deeper perspective on lottery results.
                </p>
              </div>
            </div>
          </section>


          <section className="mb-8 border rounded-xl bg-gray-50 p-6">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src="/images/lottometrics-edit-draw.png"
                  alt="LottoMetrics intervals analysis"
                  width={450}
                  height={300}
                  className="rounded shadow"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className={`${inter.className} text-left text-lg font-bold text-gray-900 mb-2`}>
                  Flexible Data Input and Updates
                </h2>
                <p className="text-gray-600 text-justify mb-2">
                  LottoMetrics keeps analytics current with automatic updates from <strong>official draw</strong> results. If offline, you can manually add or edit data, ensuring continuity.
                </p>
                <ul className="space-y-2 text-gray-600 mb-4 list-disc list-inside text-left">
                  <li><span className="font-semibold">Manual entry:</span> add new draws with date and results.</li>
                  <li><span className="font-semibold">Editing:</span> correct mistakes in existing records.</li>
                  <li><span className="font-semibold">Validation:</span> built‑in checks prevent incorrect data.</li>
                  <li><span className="font-semibold">Auto‑sync:</span> manual changes synchronize once connectivity is restored.</li>
                </ul>
                <p className="text-gray-600 text-justify">
                  This guarantees analytics remain accurate and trustworthy, whether online or offline.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>    
    </>
  );
}
