import Breadcrumbs from "../components/layout/Breadcrumb";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: 'Download LottoMetrics Portable Application',
  description:
    'Get LottoMetrics as a portable Windows application — no installation required. Unpack the archive and start analyzing lottery results instantly.',
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
    url: 'https://lottometrics.app/download',
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

export default function Download() {
  return (
    <div>
        <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Download"},
        ]} />   
        
        <h1 className={`${inter.className} text-2xl md:text-3xl font-bold text-center text-graphite mb-8`}>
            Download Software
        </h1>

        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                    LottoMetrics is delivered as a portable application. <strong>It does not require installation on your computer.</strong> 
                    Simply unpack the archive and start working with the program.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    The software runs on Windows (Windows 10 and newer) and is lightweight, fast, and ready to use immediately. 
                    The archive is clean and verified, ensuring a safe and reliable experience without hidden components.
                </p>
                <Link
                    href={`/files/LottoMetrics.zip`}
                    className="inline-block px-6 py-3 bg-yellow text-graphite font-semibold rounded-md 
                        shadow-md hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                    Download Archive
                </Link>
                </div>
            </div>
        </section>
    </div>
  );
}
