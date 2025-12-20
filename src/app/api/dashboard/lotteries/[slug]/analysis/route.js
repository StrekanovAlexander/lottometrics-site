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

        const [freqRows] = await pool.query(`
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
        
        const [windowRows] = await pool.query(`
            SELECT id, draw_date
            FROM draws
            WHERE lottery_id = ? AND is_active = TRUE
            ORDER BY id DESC
            LIMIT ${windowSize}`, [lottery_id]
        );

        const windowIds = windowRows.map(r => r.id);
        const [hitsRows] = await pool.query(`
            SELECT DISTINCT
                nh.number_kind,
                nh.draw_number,
                nh.draw_id,
                nh.draw_date
            FROM number_hits nh
            WHERE nh.lottery_id = ?
              AND nh.draw_id IN (?)
            ORDER BY nh.number_kind, nh.draw_number, nh.draw_id
            `, [lottery_id, windowIds]
        );
        return NextResponse.json({periodRange, freqRows, windowRows, hitsRows});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}
