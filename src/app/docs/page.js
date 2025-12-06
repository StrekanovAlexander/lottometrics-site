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
    url: "https://lottometrics.app/docs",
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
    <div>
        <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Docs"},
        ]} />   
        
        <h1 className={`${inter.className} text-2xl md:text-3xl font-bold text-graphite text-center mb-8`}>
            LottoMetrics Documentation
        </h1>

        <section className="mx-auto max-w-4xl px-6 mb-8">
            <p className="text-gray-600 leading-relaxed">
                The LottoMetrics desktop application provides clear tools for analyzing lottery results.
                Select the lottery you want to explore, apply filters by time period, and access modules
                designed for transparency and usability.
            </p>
        </section>
        
              <section className="mx-auto max-w-4xl px-6 mb-8">
                <h2 className={`${inter.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Frequency Analysis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Image
                    src="/images/lottometrics-frequency-analysis.png"
                    alt="LottoMetrics frequency analysis"
                    width={600}
                    height={400}
                    className="rounded shadow mx-auto"
                  />
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Frequency Analysis</strong> shows how often each number has appeared in past draws. It helps
                      identify hot numbers (frequently drawn) and cold numbers (rarely drawn), giving users
                      a clear view of historical trends.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This module highlights long‑term patterns without predicting outcomes, empowering
                      players and researchers to make informed decisions.
                    </p>
                  </div>
                </div>
              </section>
        
              <section className="mx-auto max-w-4xl px-6 mb-8">
                <h2 className={`${inter.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Gaps Analysis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Image
                    src="/images/lottometrics-gaps-analysis.png"
                    alt="LottoMetrics gaps analysis"
                    width={600}
                    height={400}
                    className="rounded shadow mx-auto"
                  />
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Gaps Analysis</strong> highlights how many draws have passed since each number last appeared.
                      It reveals delay patterns and shows how long specific numbers remain absent.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This perspective complements frequency analysis, offering a transparent view of
                      lottery dynamics and absence trends.
                    </p>
                  </div>
                </div>
              </section>
        
              <section className="mx-auto max-w-4xl px-6 mb-8">
                <h2 className={`${inter.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Number Rhythm Analysis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Image
                    src="/images/lottometrics-interval-analysis.png"
                    alt="Number Rhythm Analysis"
                    width={600}
                    height={400}
                    className="rounded shadow mx-auto"
                  />
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Rhythm Analysis</strong> focuses on intervals between appearances of each number. It highlights
                      the natural timing of returns and shows whether numbers follow stable cycles or
                      irregular patterns.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This module helps compare short‑term fluctuations with long‑term rhythms, offering a
                      deeper perspective on lottery results.
                    </p>
                  </div>
                </div>
              </section>
        
              <section className="mx-auto max-w-4xl px-6 mb-8">
                <h2 className={`${inter.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Flexible Data Input and Updates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Image
                    src="/images/lottometrics-edit-draw.png"
                    alt="LottoMetrics: Flexible Data Input and Updates"
                    width={600}
                    height={400}
                    className="rounded shadow mx-auto"
                  />
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      LottoMetrics keeps analytics current with automatic updates from <strong>official draw</strong> results. If offline, you can manually add or edit data, ensuring continuity.
                    </p>
                    <ul className="space-y-2 text-gray-600 leading-relaxed mb-4 list-disc list-inside">
                      <li><span className="font-semibold">Manual entry:</span> add new draws with date and results.</li>
                      <li><span className="font-semibold">Editing:</span> correct mistakes in existing records.</li>
                      <li><span className="font-semibold">Validation:</span> built‑in checks prevent incorrect data.</li>
                      <li><span className="font-semibold">Auto‑sync:</span> manual changes synchronize once connectivity is restored.</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                      This guarantees analytics remain accurate and trustworthy, whether online or offline.
                    </p>
                  </div>
                </div>
              </section>

       
    </div>
  );
}
