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
      <body>{children}</body>
    </html>
  );
}
