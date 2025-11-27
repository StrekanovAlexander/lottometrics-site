import Image from "next/image";

export const metadata = {
  title: 'LottoMetrics Documentation',
  description: 'Learn how to use LottoMetrics software: interface, lottery selection, filtering, and analytics.',
};

export default function Docs() {
  return (
    <>
    <section className="mb-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Documentation</h1>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Working with LottoMetrics</h2>
        <p className="text-gray-700 mb-4">
          The interface of LottoMetrics is intuitive and user-friendly. 
          You can easily select the lottery you want to analyze and apply filters 
          to draws based on the chosen time period.
        </p>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Frequency Analysis</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/images/lottometrics-frequency-analysis.png"
            alt="LottoMetrics frequency analytics"
            width={600}
            height={400}
            className="rounded shadow mx-auto"
          />
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              The <strong>Frequency Analysis</strong> module in LottoMetrics shows how often each number 
              has appeared in past lottery draws. This visualization helps players and analysts quickly 
              identify <em>hot numbers</em> (frequently drawn) and <em>cold numbers</em> (rarely drawn).
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              By studying frequency patterns, users gain insights into historical distribution of winning 
              numbers, statistical trends across multiple draws, and potential repeating sequences. 
              This section is designed for clarity and scalability, optimized for multilingual audiences 
              and search engines with keywords such as <strong>lottery frequency analysis</strong>, 
              <strong>number occurrence statistics</strong>, and <strong>draw history patterns</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Frequency analysis is not about predicting the future, but about transparent analytics. 
              It empowers users to make informed decisions, track long‑term trends, and understand the 
              mathematics behind games of chance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Gaps Analysis</h2>
      <div className="max-w-6xl mx-auto">
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
              The <strong>Gaps Analysis</strong> module in LottoMetrics highlights the number of draws 
              that have passed since each number last appeared. This approach reveals 
              <em>delay patterns</em> and helps users understand how long specific numbers remain absent 
              from the results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              By examining gaps, players and analysts can track intervals between winning occurrences, 
              identify numbers with unusually long delays, and compare short‑term vs. long‑term absence 
              trends. This section is optimized for clarity and search engines with keywords such as 
              <strong>lottery gaps analysis</strong>, <strong>number delay statistics</strong>, and 
              <strong>draw interval patterns</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unlike frequency, which shows how often numbers appear, gaps analysis focuses on absence. 
              It provides a transparent view of lottery dynamics, empowering users to explore statistical 
              delays and understand the rhythm of draws.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Flexible Data Input and Updates</h2>
      <div className="max-w-6xl mx-auto">
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
              LottoMetrics includes a built‑in data update service that keeps your analytics current
              by automatically fetching new draw results. This ensures your frequency and gaps
              modules are always based on the latest information.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In case automatic updates are temporarily unavailable or you do not have Internet
              access, you can manually enter new draw data or edit existing records. Any changes
              are immediately reflected in the analytics, so your insights remain accurate and
              complete.
            </p>
            <ul className="space-y-2 text-gray-600 leading-relaxed mb-4 list-disc list-inside">
              <li><span className="font-semibold">Manual entry:</span> add new draws with date, draw number, and results.</li>
              <li><span className="font-semibold">Editing:</span> correct mistakes in existing records without losing history.</li>
              <li><span className="font-semibold">Validation:</span> built‑in checks help prevent incorrect or malformed data.</li>
              <li><span className="font-semibold">Auto‑sync:</span> once connectivity is restored, manual changes synchronize with the update service.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              This approach guarantees continuity: your analytics remain available and trustworthy,
              whether online or offline.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

