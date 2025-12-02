// app/api/draws/route.js
import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get("slug");
        const startDate = searchParams.get("start");
        const endDate = searchParams.get("end");

        const [rows] = await pool.query(`
            SELECT 
                d.id,
                d.draw_date,
                d.main_numbers, 
                d.extra_numbers
            FROM draws d INNER JOIN lotteries l ON d.lottery_id = l.id
            WHERE
                l.slug = ?  
                AND l.is_active = true 
                AND d.is_active = true
                AND d.draw_date BETWEEN ? AND ?
            ORDER BY d.draw_date DESC    
        `, [slug, startDate, endDate]);
        return NextResponse.json({ draws: rows });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}
