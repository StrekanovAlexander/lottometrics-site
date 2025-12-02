import Link from "next/link";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageTitle from "../components/ui/PageTitle";

const title = "Download LottoMetrics";
const description = "Get the latest version of LottoMetrics software"; 

export const metadata = {
  title: title,
  description: description,
};

export default function Download() {
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
        <p className="text-gray-600 leading-relaxed py-2">
          LottoMetrics is delivered as a portable application. <strong>It does not require installation on your computer.</strong> Simply unpack the archive and start working with the program.    
        </p>
        <p className="text-gray-600 leading-relaxed py-2">
          The software runs on Windows (Windows 10 and newer) and is lightweight, fast, and ready to use immediately. The archive is clean and verified, ensuring a safe and reliable experience without hidden components.        
        </p>
        <div className="pt-8">
          <Link
            href={`/files/LottoMetrics.zip`} 
            class="px-4 py-2 bg-white text-gray-800 font-medium rounded-md border border-gray-300 
              shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Download Archive
          </Link>
        </div>
      </section>  
    </>
  );
}
