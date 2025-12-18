// app/api/dashboare/lotteries/slug/analysis
import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { searchParams } = new URL(request.url);
        const { slug } = params;
        const windowSize = searchParams.get("window_size");

        const [lotteries] = await pool.query(
            `SELECT main_count, main_start, main_finish, extra_count, extra_start, extra_finish
            FROM lotteries WHERE slug = ? AND is_active = 1`,
            [slug]
        );

        const lott = lotteries[0];

        const [rows] = await pool.query(`
            SELECT nh.draw_id, nh.number_kind, nh.draw_number, nh.draw_date
            FROM number_hits nh
            JOIN (
                SELECT d.id
                FROM draws d
                JOIN lotteries l ON l.id = d.lottery_id
                WHERE l.slug = ?
                AND d.is_active = 1
                ORDER BY d.id DESC
                LIMIT ${windowSize}
            ) last_draws ON nh.draw_id = last_draws.id
            ORDER BY nh.draw_id DESC, nh.number_kind, nh.draw_number`,
            [slug]
        );
        return NextResponse.json({lott, rows});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}