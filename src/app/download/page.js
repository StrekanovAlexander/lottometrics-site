export const metadata = {
  title: 'Download',
  description: 'Get the latest version of LottoMetrics software.',
};

export default function Download() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Download LottoMetrics</h2>
      
      <p className="mb-6 text-gray-700">
        LottoMetrics is delivered as a portable application. 
        <strong>It does not require installation on your computer.</strong> 
        Simply unpack the archive and start working with the program.
      </p>

      <p className="mb-6 text-gray-700">
        The software runs on Windows (Windows 10 and newer) and is lightweight, fast, and ready to use immediately. 
        The archive is clean and verified, ensuring a safe and reliable experience without hidden components.
      </p>

      <a
        href="/files/LottoMetrics.zip"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Download Archive
      </a>
    </section>
  );
}
