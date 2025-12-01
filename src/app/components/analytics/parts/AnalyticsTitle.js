import { formatDate } from "@/utils/formatDate"
import strings from "@/utils/strings"

export default function AnalyticsTitle({ mode, period}) {
    return (
        <div className="mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold text-gray-900">
                {strings.capitalize(mode)} Analytics
            </h2>
            <p className="mt-1 text-sm text-gray-600 flex justify-between">
                <span>Period:&nbsp;</span>
                <span>{formatDate(new Date(period.startDate))} - {formatDate(new Date(period.endDate))}</span>
            </p>
        </div>
    )
}