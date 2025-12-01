import { BarChart3, TrendingUp, Clock } from "lucide-react";

export default function PopularAnalyticsMetods() {
    return (
        <section className="bg-gray-50 border-t border-gray-200 py-16 px-6">
            {/* Заголовок блока */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Popular Lottery Analytics Methods
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Explore the most common ways to analyze lottery numbers - from frequency to intervals.
                </p>
            </div>
            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Frequency */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-800 text-gray-100 
                        rounded-full flex items-center justify-center font-bold hover:bg-gray-600 transition">
                        <BarChart3 className="w-6 h-6 text-gray-100" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Frequency Analysis</h3>
                    <p className="text-gray-600 text-sm">
                        See how often each number appears in past draws.
                    </p>
                </div>
                {/* Gaps */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-800 text-gray-100 
                        rounded-full flex items-center justify-center font-bold hover:bg-gray-600 transition">
                        <TrendingUp className="w-6 h-6 text-gray-100" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Gap Analysis</h3>
                    <p className="text-gray-600 text-sm">
                        Discover the spacing between number appearances.
                    </p>
                </div>
                {/* Intervals */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-800 text-gray-100 
                        rounded-full flex items-center justify-center font-bold hover:bg-gray-600 transition">
                        <Clock className="w-6 h-6 text-gray-100" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Interval Analysis</h3>
                    <p className="text-gray-600 text-sm">
                        Track cycles and patterns in number intervals.
                    </p>
                </div>
            </div>
        </section>
    )
}