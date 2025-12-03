// app/api/draws/tools/route.js
import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const [rows] = await pool.query(`
            SELECT id, main_numbers, extra_numbers 
            FROM draws 
            WHERE lottery_id = 5 ORDER BY draw_date`);
        return NextResponse.json({ draws: rows });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}
