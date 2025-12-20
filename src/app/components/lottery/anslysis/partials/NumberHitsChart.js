import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import { formatDateISO, formatDate } from "@/utils/formatDate";

export default function NumberHitsChart({numberHits, windowDraws}) {
    const timeline = windowDraws
        .map(el => (formatDateISO(new Date(el.draw_date))))
        .sort((a, b) => new Date(a) - new Date(b));

    const hitDates = numberHits.map(el => formatDateISO(new Date(el.draw_date)));

    let cumulative = 0;
    const chartData = timeline.map(date => {
        const hit = hitDates.includes(date) ? 1 : 0;
        cumulative += hit;
        return { date: formatDate(date), hit, cumulative };
    });

    return (
        <div style={{ width: "100%", height: 125 }}>
            <ResponsiveContainer>
                <LineChart 
                    data={chartData}
                    margin={{ left: 0, right: 10, top: 10, bottom: 0 }}
                >
                <XAxis
                    dataKey="date"
                    tick={{ fontSize: 10 }}
                    tickMargin={8}
                />
                <YAxis
                    width={24}
                    domain={[0, 1]}
                    ticks={[0, 1]}
                    tick={{ fontSize: 10 }}
                />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="hit"
                    stroke="#D9A07A"
                    strokeWidth={1}
                    dot={{ r: 2, fill: "#D9A07A" }}
                    activeDot={{ r: 4 }}
                />
                {/* <Line
                    type="monotone"
                    dataKey="cumulative"
                    stroke="#6B7280"
                    strokeWidth={2}
                    dot={false}
                /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}