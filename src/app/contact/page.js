import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageTitle from "../components/ui/PageTitle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const title = "Contact";
const description = "Get in touch with LottoMetrics team";

export const metadata = {
  title: title,
  description: description,
};

export default function Contact() {
  return (
    <>
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: title },
        ]}
      />
      <section className="max-w-5xl mx-auto">
      <PageTitle title={title} description={description} />
      <section className="bg-gray-50 p-8">
        <p className="text-gray-600 font-semibold leading-relaxed">
          For now, please reach us via email: <a href="mailto:info@lottometrics.com" className="text-blue-600">info@lottometrics.com</a>
        </p>
      </section>
      </section>
      <Footer />  
    </>
  );
}