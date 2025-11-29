import Hero from "./components/sections/Hero";
import LotteriesSection from "./components/sections/LotteriesSection";
import Software from "./components/sections/Software";
import PopularAnalytics from "./components/sections/PopularAnalytics";

export const metadata = {
  title: 'LottoMetrics - Honest Lottery Analytics',
  description: 'Explore LottoMetrics — honest lottery analytics, number frequency statistics, and transparent insights.',
  keywords: ['lottery analysis', 'lotto metrics', 'number frequency', 'lottery statistics tool'],
};

export default function Home() {
  return (
    <>
      <Hero />
      <LotteriesSection />
      <PopularAnalytics />
    </>
  );
}
