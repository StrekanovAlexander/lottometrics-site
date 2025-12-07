import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const { slug } = params;
    try {
        const [rows] = await pool.query(`
            SELECT 
                ng.draw_number,
                ng.number_kind,
                ng.current_gap,
                ng.max_gap,
                ng.last_hit_date
            FROM number_gaps ng 
            JOIN lotteries l ON ng.lottery_id = l.id
            WHERE ng.is_active = true and l.slug = ?
            ORDER BY ng.current_gap DESC;
        `, [slug]);
        return NextResponse.json({rows}, {status: 200,headers: {'Cache-Control': 'no-store'}});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}