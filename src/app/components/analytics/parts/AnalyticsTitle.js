import { formatDate } from "@/utils/formatDate"
import strings from "@/utils/strings"

export default function AnalyticsTitle({ mode, period}) {
    const isInvalidPeriod = (() => {
        const start = new Date(period.startDate).getTime();
        const end = new Date(period.endDate).getTime();
        return Number.isFinite(start) && Number.isFinite(end) && end < start;
    })();

    return (
        <div className="mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold text-gray-900">
                {strings.capitalize(mode)} Analytics
            </h2>
            <p className={`mt-1 text-sm flex justify-between ${isInvalidPeriod ? "text-red-600" : "text-gray-600"}`}>
                <span>{isInvalidPeriod ? "Wrong Period" : "Period:"}&nbsp;</span>
                {!isInvalidPeriod && (
                    <span>
                        {formatDate(new Date(period.startDate))} - {formatDate(new Date(period.endDate))}
                    </span>
                )}
            </p>
        </div>
    )
}