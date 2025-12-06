import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: 'LottoMetrics - Honest Lottery Analytics',
  description:
    'Explore LottoMetrics — honest lottery analytics, number frequency statistics, and transparent insights.',
  keywords: [
    'lottery analysis',
    'lotto metrics',
    'number frequency',
    'lottery statistics tool',
  ],
  openGraph: {
    title: 'LottoMetrics - Honest Lottery Analytics',
    description:
      'Explore LottoMetrics — honest lottery analytics, number frequency statistics, and transparent insights.',
    url: 'https://lottometrics.app',
    siteName: 'LottoMetrics',
    type: 'website',
    // images: [
    //   {
    //     url: 'https://lottometrics.app/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'LottoMetrics Preview',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LottoMetrics - Honest Lottery Analytics',
    description:
      'Explore LottoMetrics — honest lottery analytics, number frequency statistics, and transparent insights.',
    // images: ['https://lottometrics.app/og-image.png'],
  },
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`${inter.className} text-3xl md:text-4xl font-bold text-graphite mb-6`}>
          LottoMetrics – Lottery Analytics Online
        </h1>
        <p className="text-lg md:text-xl text-graphite font-semibold leading-relaxed">
          Analyze lottery results online with LottoMetrics. Access Powerball, Euromillions and 6 aus 49 archives,
          check past draws, and discover number statistics. Our platform offers both online analytics
          and a Windows offline version for professional lottery research.
        </p>
      </div>
    </div>
  );
}
