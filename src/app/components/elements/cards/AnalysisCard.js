const analysisDescriptions = {
  gaps: "Explore intervals between drawn numbers and identify hidden patterns.",
  frequency: "Analyze how often numbers are drawn and uncover hot and cold trends.",
  pairs: "Analyze which numbers are drawn together and uncover frequent lottery pair patterns.",
};

export default function AnalysisCard({slug, lottery, part}) {
    const { name, label, icon: Icon } = part;
    return (
        <a
            href={`/lottery/${slug}/analysis/${name}`}
            className="block w-64 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
        >
            <div className="flex items-center gap-3">
                <span className="flex items-center justify-center min-w-10 h-10 bg-graphite-light rounded-full">
                    <Icon size={20} />
                </span>
                <h3 className="text-md font-bold text-gray-900">
                    {lottery} - {label} Analysis
                </h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
                {analysisDescriptions[name]}
            </p>
        </a>
    )
}