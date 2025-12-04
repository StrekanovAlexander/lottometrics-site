import Hero from "./components/sections/Hero";
import LotteriesSection from "./components/sections/LotteriesSection";
import PopularAnalytics from "./components/sections/PopularAnalytics";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: 'LottoMetrics - Honest Lottery Analytics',
  description: 'Explore LottoMetrics — honest lottery analytics, number frequency statistics, and transparent insights.',
  keywords: ['lottery analysis', 'lotto metrics', 'number frequency', 'lottery statistics tool'],
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto">
        <Hero />
        <LotteriesSection />
        <PopularAnalytics />
      </div>
      <Footer />
    </>
  );
}
