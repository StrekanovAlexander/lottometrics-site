// app/api/dashboare/lotteries/slug/analysis
import pool from '@/lib/db';
import { NextResponse } from "next/server";
import { formatDateISO } from '@/utils/formatDate';

export async function GET(request, { params }) {
    try {
        const { searchParams } = new URL(request.url);
        const { slug } = params;
        const windowSize = searchParams.get("window_size");

        const [lotteries] = await pool.query(`
            SELECT dr.lottery_id, MIN(dr.draw_date) AS start_date, MAX(dr.draw_date) AS end_date
            FROM (
                SELECT d.lottery_id, d.draw_date
                FROM draws d
                JOIN lotteries l ON l.id = d.lottery_id
                WHERE l.slug = ?
                ORDER BY d.draw_date DESC
                LIMIT ${windowSize}
            ) dr
            GROUP BY dr.lottery_id`, [slug]);

        const {lottery_id, start_date, end_date} = lotteries[0];
        const startDate = formatDateISO(new Date(start_date));
        const endDate = formatDateISO(new Date(end_date));
        const periodRange = {startDate, endDate};

        const [rows] = await pool.query(`
            SELECT 
                n.num AS draw_number,
                'main' AS number_kind,
                COALESCE(h.hits_count, 0) AS hits_count,
                l.main_count   AS numbers_count,
                l.main_start   AS number_start,
                l.main_finish  AS number_finish
            FROM numbers n
            JOIN lotteries l ON l.id = ?
            LEFT JOIN (
                SELECT nh.draw_number, COUNT(*) AS hits_count
                FROM number_hits nh
                WHERE nh.lottery_id = ?
                AND nh.number_kind = 'main'
                AND nh.draw_date BETWEEN ? AND ?
                GROUP BY nh.draw_number
            ) h ON h.draw_number = n.num
            WHERE n.num BETWEEN l.main_start AND l.main_finish
            UNION ALL
            SELECT 
                n.num AS draw_number,
                'extra' AS number_kind,
                COALESCE(h.hits_count, 0) AS hits_count,
                l.extra_count   AS numbers_count,
                l.extra_start   AS number_start,
                l.extra_finish  AS number_finish
            FROM numbers n
            JOIN lotteries l ON l.id = ?
            LEFT JOIN (
                SELECT nh.draw_number, COUNT(*) AS hits_count
                FROM number_hits nh
                WHERE nh.lottery_id = ?
                AND nh.number_kind = 'extra'
                AND nh.draw_date BETWEEN ? AND ?
                GROUP BY nh.draw_number
            ) h ON h.draw_number = n.num
            WHERE n.num BETWEEN l.extra_start AND l.extra_finish
            ORDER BY number_kind, draw_number`, 
            [lottery_id, lottery_id, startDate, endDate, lottery_id, lottery_id, startDate, endDate]  
        ); 
        
        const [gaps] = await pool.query(`
            SELECT 
                -- ngs.lottery_id,
                ngs.draw_number,
                ngs.number_kind,
                dr1.draw_date as draw_date_start, 
                -- dr2.draw_date as draw_date_end,
                ngs.series_length
            FROM number_gap_series ngs 
            INNER JOIN draws dr1 ON dr1.id = ngs.start_draw_id 
            INNER JOIN draws dr2 ON dr2.id = ngs.end_draw_id
            WHERE ngs.lottery_id = ? 
            AND dr1.draw_date BETWEEN ? AND ?
            AND dr2.draw_date BETWEEN ? AND ?
            ORDER BY ngs.draw_number, dr1.draw_date
        `, [lottery_id, startDate, endDate, startDate, endDate]); 
        return NextResponse.json({periodRange, rows, gaps});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}