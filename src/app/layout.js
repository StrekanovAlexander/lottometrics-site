import Script from "next/script";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: 'LottoMetrics',
    template: '%s | LottoMetrics',
  },
  icons: {
    icon: '/favicon.png',
  },
  description: 'Honest lottery analytics and number frequency statistics for players and researchers.',
  keywords: ['lottery analytics', 'number frequency', 'lotto statistics', 'lottery software'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8MCJSXD9GG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8MCJSXD9GG');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-5xl mx-auto py-8 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
