import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageTitle from "../components/ui/PageTitle";

const title = "Contact";
const description = "Get in touch with LottoMetrics team";

export const metadata = {
  title: title,
  description: description,
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: title },
        ]}
      />
      <PageTitle title={title} description={description} />
      <section className="bg-gray-50 p-8">
        <p className="text-gray-600 font-semibold leading-relaxed">
          For now, please reach us via email: <a href="mailto:info@lottometrics.com" className="text-blue-600">info@lottometrics.com</a>
        </p>
      </section>  
    </>
  );
}