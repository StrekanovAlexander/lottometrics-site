import { formatDateISO } from "@/utils/formatDate";

export default function NumberHitsChart({numberHits, windowDraws}) {
    const timeline = windowDraws
        .map(el => ({ date: formatDateISO(new Date(el.draw_date)), hit: 0}))
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    const hitDates = numberHits.map(el => formatDateISO(new Date(el.draw_date)));
    const chartData = timeline.map(({date, hit}) => ({date, hit: hitDates.includes(date) ? 1 : 0}));

    return (
        <div>
            Number Hits Chart
        </div>
    )
}