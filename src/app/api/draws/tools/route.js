// app/api/draws/tools/route.js
import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const lotteryId = searchParams.get("lottery_id");
    try {
        const [rows] = await pool.query(`
            SELECT id, main_numbers, extra_numbers, jackpot_amount 
            FROM draws 
            WHERE lottery_id = ? ORDER BY draw_date`, [lotteryId]);
        return NextResponse.json({ draws: rows });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}
