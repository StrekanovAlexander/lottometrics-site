import { Download } from "lucide-react";
import Breadcrumbs from "../components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: 'Download LottoMetrics Portable Application',
  description:
    'Get LottoMetrics as a portable Windows application - no installation required. Unpack the archive and start analyzing lottery results instantly.',
  alternates: { canonical: 'https://www.lottometrics.app/download' },
  keywords: [
    'lotto metrics download',
    'lottery analytics software',
    'portable application',
    'Windows lottery tool',
    'lottery statistics',
  ],
  openGraph: {
    title: 'Download LottoMetrics Portable Application',
    description:
      'LottoMetrics runs on Windows 10 and newer. Lightweight, fast, and safe — start analyzing lottery results immediately.',
    url: 'https://www.lottometrics.app/download',
    siteName: 'LottoMetrics',
    type: 'website',
    // images: [
    //   {
    //     url: 'https://lottometrics.app/og-download.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'LottoMetrics Portable App Preview',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download LottoMetrics Portable Application',
    description:
      'No installation required — unpack and start using LottoMetrics for professional lottery research.',
    // images: ['https://lottometrics.app/og-download.png'],
  },
};

export default function DownloadPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Download"},
      ]} />  

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <section className="mb-12">
            <h1 className={`${inter.className} text-2xl font-bold text-graphite mb-6`}>
              Download Software
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              LottoMetrics is delivered as a portable application. <strong>It does not require installation on your computer.</strong> 
              Simply unpack the archive and start working with the program.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              The software runs on Windows (Windows 10 and newer) and is lightweight, fast, and ready to use immediately. 
              The archive is clean and verified, ensuring a safe and reliable experience without hidden components.
            </p>
            <a
              href={`/files/LottoMetrics.zip`}
              className="inline-block px-4 py-2 bg-white text-graphite text-sm border 
                border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span  className="flex items-center gap-2">
                <Download size={16} />
                Download Archive
              </span>
            </a>
          </section>
        </div>
      </div>    
    </>
  );
}
