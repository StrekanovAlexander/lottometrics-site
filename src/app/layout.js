import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: 'LottoMetrics',
    template: '%s | LottoMetrics',
  },
  description: 'Honest lottery analytics and number frequency statistics for players and researchers.',
  keywords: ['lottery analytics', 'number frequency', 'lotto statistics', 'lottery software'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-5xl mx-auto p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
