export const metadata = {
  title: 'Contact',
  description: 'Get in touch with LottoMetrics team.',
};

export default function Contact() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700">
        For now, please reach us via email: <a href="mailto:info@lottometrics.com" className="text-blue-600">info@lottometrics.com</a>
      </p>
    </section>
  );
}