export default function Software() {
    return (
        <section className="mt-16">
            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Popular Lottery Analytics Methods
            </h2>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Frequency Analysis */}
                <div className="bg-white shadow-sm rounded-lg p-6 text-center border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Frequency Analysis</h3>
                    <p className="text-gray-600">
                        Frequency analysis shows which lottery numbers appear most often across past draws. 
                        This method highlights “hot” and “cold” numbers, helping players identify statistical 
                        trends and make more informed choices. Keywords: lottery frequency analysis, number 
                        frequency statistics, hot and cold numbers.
                    </p>
                </div>

                {/* Skip Analysis */}
                <div className="bg-white shadow-sm rounded-lg p-6 text-center border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Skip Analysis</h3>
                    <p className="text-gray-600">
                        Skip analysis tracks how many draws have passed since a specific number last appeared. 
                        By visualizing these gaps, players can spot overdue numbers and understand the cyclical 
                        nature of lottery results. Keywords: lottery skip analysis, overdue numbers, number cycles.
                    </p>
                </div>

                {/* Interval Analysis */}
                <div className="bg-white shadow-sm rounded-lg p-6 text-center border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Interval Analysis</h3>
                    <p className="text-gray-600">
                        Interval analysis examines the spacing between occurrences of numbers in different draws. 
                        This approach uncovers patterns in timing and helps forecast possible combinations based 
                        on historical intervals. Keywords: lottery interval analysis, interval statistics, number prediction.
                    </p>
                </div>
            </div>
        </section>
    )
}