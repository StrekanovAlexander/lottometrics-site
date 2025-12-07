import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { searchParams } = new URL(request.url);
        const { slug } = params;
        const startDate = searchParams.get("start");
        const endDate = searchParams.get("end");

        const [[{ recordCount }]] = await pool.query(`
            SELECT COUNT(*) AS recordCount
            FROM draws d
            JOIN lotteries l ON d.lottery_id = l.id
            WHERE l.slug = ?
            AND d.draw_date BETWEEN ? AND ?
            `, [slug, startDate, endDate]);

        const [rows] = await pool.query(`
            SELECT
                n.num AS draw_number,
                kind.number_kind,
                COALESCE(COUNT(dn.draw_number), 0) AS frequency
                FROM (
                SELECT 'main' AS number_kind, l.main_start AS start_val, l.main_finish AS finish_val
                FROM lotteries l WHERE l.slug = ?
                UNION ALL
                SELECT 'extra', l.extra_start, l.extra_finish
                FROM lotteries l WHERE l.slug = ?
                ) kind
                JOIN numbers n ON n.num BETWEEN kind.start_val AND kind.finish_val
                JOIN lotteries l ON l.slug = ?
                LEFT JOIN draws d
                ON d.lottery_id = l.id
                AND d.draw_date BETWEEN ? AND ?
                LEFT JOIN draw_numbers dn
                ON dn.draw_id = d.id
                AND dn.number_kind = kind.number_kind
                AND dn.draw_number = n.num
                GROUP BY n.num, kind.number_kind
                ORDER BY kind.number_kind, n.num;    
        `, [slug, slug, slug, startDate, endDate]);
        return NextResponse.json({ recordCount, rows }, {
            // status: 200,
            // headers: {
            //     'Cache-Control': 'no-store',
            // },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}