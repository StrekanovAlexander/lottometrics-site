import Breadcrumbs from "../components/layout/Breadcrumb";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with LottoMetrics team',
  alternates: { canonical: 'https://www.lottometrics.app/contact' },
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
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`${inter.className} text-2xl font-bold text-graphite mb-4`}>
            Contact
          </h1>
          <p className="text-gray-600 font-semibold">
            For now, please reach us via email: <a href="mailto:info@lottometrics.com" className="text-blue-600">info@lottometrics.com</a>
          </p>
        </div>
      </div>    
    </>
  );
}