import Script from "next/script";
import { DashboardProvider } from "@/context/DashboardContext";
import Header from "./components/layout/Header";
import SidebarDesktop from "./components/layout/SidebarDesktop";
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

export default function DashboardLayout({ children }) {
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
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
          <DashboardProvider>
            <Header />
            {/* Main container */}
            <div className="flex flex-grow">
              <SidebarDesktop />
              {/* Main content */}
              <main className="flex-grow p-8">
                {children}
              </main>
            </div>
            <Footer />
          </DashboardProvider>
        </div>
      </body>
    </html>
  );
}
