import Script from "next/script";
import { AnalyticsProvider } from "@/context/AnalyticsContext";
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
        <AnalyticsProvider>
          <main className="flex-grow w-full">
            {children}
          </main>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
