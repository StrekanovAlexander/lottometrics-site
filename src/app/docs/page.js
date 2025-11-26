import Image from "next/image";

export const metadata = {
  title: 'LottoMetrics Documentation',
  description: 'Learn how to use LottoMetrics software: interface, lottery selection, filtering, and analytics.',
};

export default function Docs() {
  return (
    <>
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Documentation</h1>

      {/* Работа с программой */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Working with LottoMetrics</h2>
        <p className="text-gray-700 mb-4">
          The interface of LottoMetrics is intuitive and user-friendly. 
          You can easily select the lottery you want to analyze and apply filters 
          to draws based on the chosen time period.
        </p>
      </div>

      {/* Аналитика */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
        <p className="text-gray-700 mb-4">
          LottoMetrics provides powerful frequency analysis tools. 
          You can explore statistics for:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Single balls</li>
          <li>Pairs of balls</li>
          <li>Triplets of balls</li>
          <li>Bonus numbers</li>
        </ul>
      </div>
    </section>

    <section className="max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Screenshots</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Image
            src="/images/lottometrics-main-screen.png"
            alt="Main window of LottoMetrics"
            width={600}
            height={400}
            className="rounded shadow mx-auto"
          />
        </div>
        <div>
          <Image
            src="/images/lottometrics-frequency-screen-1.png"
            alt="Frequency analysis of pairs"
            width={600}
            height={400}
            className="rounded shadow mx-auto"
          />
        </div>
        <div>
          <Image
            src="/images/lottometrics-frequency-screen-2.png"
            alt="Frequency analysis of triplets"
            width={600}
            height={400}
            className="rounded shadow mx-auto"
          />
        </div>
        <div>
          <Image
            src="/images/lottometrics-edit-draw-screen.png"
            alt="Adding a Draw to the System"
            width={600}
            height={400}
            className="rounded shadow mx-auto"
          />
        </div>
      </div>
    </section>
    </>
  );
}

