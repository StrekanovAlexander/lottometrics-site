import Breadcrumbs from "../components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with LottoMetrics team',
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: 'Contact' },
        ]}
      />
      <h1 className={`${inter.className} text-2xl md:text-3xl font-bold text-graphite mb-8`}>
        Contact
      </h1>
      <p className="text-gray-600 font-semibold leading-relaxed">
        For now, please reach us via email: <a href="mailto:info@lottometrics.com" className="text-blue-600">info@lottometrics.com</a>
      </p>
    </>
  );
}