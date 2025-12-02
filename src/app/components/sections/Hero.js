import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
    return (
        <section className="bg-gray-100 py-12 mb-10">
            <div className="mx-auto text-center px-10">
                <h1 className={`${anton.className} text-gray-900 text-3xl md:text-4xl font-extrabold mb-6`}>
                    LottoMetrics - Lottery Analytics Online
                </h1>
                <p className="text-lg md:text-lg text-gray-600 mx-10 font-semibold">
                    Analyze lottery results online with LottoMetrics. Access Powerball, Euromillions and 6 aus 49 archives,
                    check past draws, and discover number statistics. Our platform offers both online analytics
                    and a Windows offline version for professional lottery research.
                </p>
            </div>
        </section>
    )
}    