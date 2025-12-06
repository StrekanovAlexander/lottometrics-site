import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { searchParams } = new URL(request.url);
        const { slug } = params;
        const startDate = searchParams.get("start");
        const endDate = searchParams.get("end");

        const [rows] = await pool.query(`
            WITH RECURSIVE numbers AS (
                SELECT 1 AS num
                UNION ALL
                SELECT num + 1 FROM numbers
                WHERE num < (SELECT main_finish FROM lotteries WHERE slug = ?)
            )
            SELECT
                n.num AS draw_number,
                COALESCE(COUNT(dn.draw_number), 0) AS frequency
            FROM numbers n
                JOIN lotteries l ON l.slug = ?
                LEFT JOIN draws d ON d.lottery_id = l.id
                AND d.draw_date BETWEEN ? AND ?
                LEFT JOIN draw_numbers dn ON dn.draw_id = d.id
                AND dn.number_kind = 'main'
                AND dn.draw_number = n.num
            GROUP BY n.num
            ORDER BY n.num;    
        `, [slug, slug, startDate, endDate]);
        return NextResponse.json(rows, {
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