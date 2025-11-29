export default function Software() {
    return (
        <section className="mt-10">
            <div className="mx-auto text-center px-6 mb-10">
                <h2 className="text-3xl md:text-3xl font-bold mb-6">
                    Software
                </h2>
                <p className="text-xl md:text-md text-gray-700 mx-10">
                    LottoMetrics is a transparent lottery analytics software designed for Windows. 
                    It helps players and researchers explore number frequency, analyze draws, 
                    and gain honest insights without hidden tricks.
                </p>
            </div>
            <div className="mb-10">
                <img
                    src="/images/lottometrics-main-screen.png"
                    alt="LottoMetrics Main Screen"
                    width={800}
                    height={600}
                    className="mx-auto"
                />
            </div>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Works seamlessly on Windows systems</li>
                    <li>Transparent analytics with no hidden tricks</li>
                    <li>Multilingual interface: English, German, Russian</li>
                    <li>Simple and intuitive user interface</li>
                    <li>Fast number frequency analysis</li>
                </ul>
            </div>
            <div className="text-center mb-10">
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
            <div className="text-center mb-10">
                <a href="/download" className="bg-gray-800 text-white px-6 py-3 rounded hover:no-underline">
                    Go to Downloads
                </a>
            </div>
        </section>
    )
}  
