export const metadata = {
  title: 'LottoMetrics - Honest Lottery Analytics',
  description: 'Explore LottoMetrics — honest lottery analytics, number frequency statistics, and transparent insights.',
  keywords: ['lottery analysis', 'lotto metrics', 'number frequency', 'lottery statistics tool'],
};

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">LottoMetrics</h1>
      <p className="mb-6 text-gray-700">
        LottoMetrics is a transparent lottery analytics software designed for Windows. 
        It helps players and researchers explore number frequency, analyze draws, 
        and gain honest insights without hidden tricks.
      </p>
      <div className="mb-6">
        <img src="/images/lottometrics-main-screen.png" alt="LottoMetrics Main Screen" width={800} height={600} />
      </div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Works seamlessly on Windows systems</li>
          <li>Transparent analytics with no hidden tricks</li>
          <li>Multilingual interface: English, German, Russian</li>
          <li>Simple and intuitive user interface</li>
          <li>Fast number frequency analysis</li>
        </ul>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">How do I install LottoMetrics?</h3>
            <p>Simply download the installer from the Downloads page and follow the setup wizard.</p>
          </div>
          <div>
            <h3 className="font-semibold">Which operating systems are supported?</h3>
            <p>LottoMetrics is designed for Windows (Windows 10 and newer).</p>
          </div>
          <div>
            <h3 className="font-semibold">Is the program available in multiple languages?</h3>
            <p>Yes, the interface supports English, German, and Russian.</p>
          </div>
          <div>
            <h3 className="font-semibold">Can I analyze past lottery draws?</h3>
            <p>Yes, LottoMetrics allows you to import and analyze historical draw data.</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a href="/download" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700" >
          Go to Downloads
        </a>
      </div>
    </section>
  );
}
