const analysisDescriptions = {
  gaps: "Explore intervals between drawn numbers and identify hidden patterns.",
  frequency: "Analyze how often numbers are drawn and uncover hot and cold trends.",
};

export default function AnalysisCard({slug, lottery, part}) {
    const { name, label, icon: Icon } = part;
    return (
        <a
            href={`/lottery/${slug}/analysis/${name}`}
            className="block w-64 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
        >
            <div className="flex items-center space-x-3">
                <Icon size={24} />
                <h3 className="text-lg font-semibold text-gray-900">
                    {lottery} - {label} Analysis
                </h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
                {analysisDescriptions[name]}
            </p>
        </a>
    )
}