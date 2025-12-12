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
                dn1.draw_number AS draw_number1,
                dn2.draw_number AS draw_number2,
                COUNT(*) AS pair_count
                FROM draw_numbers dn1
                JOIN draw_numbers dn2 ON dn1.draw_id = dn2.draw_id 
                AND dn1.draw_number < dn2.draw_number
                JOIN draws d ON dn1.draw_id = d.id
                JOIN lotteries l ON d.lottery_id = l.id
                WHERE l.slug = ?
                AND dn1.number_kind = 'main' 
                AND dn2.number_kind = 'main'
                AND d.draw_date BETWEEN ? AND ?
                GROUP BY dn1.draw_number, dn2.draw_number
                ORDER BY pair_count DESC, draw_number1 ASC, draw_number2;    
            `, [slug, startDate, endDate]);
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