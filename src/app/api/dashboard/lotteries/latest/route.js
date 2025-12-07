import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [rows] = await pool.query(
            `SELECT 
                l.id,
                l.lottery_name,
                l.country,
                l.iso_code,
                l.description_short_en,
                l.slug,
                d.draw_date,
                d.main_numbers,
                d.extra_numbers
            FROM lotteries l
            JOIN draws d 
                ON d.lottery_id = l.id
            AND d.is_active = 1
            WHERE l.is_active = 1
            AND d.draw_date = (
                SELECT MAX(d2.draw_date)
                FROM draws d2
                WHERE d2.lottery_id = l.id
                 AND d2.is_active = 1
            )
            ORDER BY d.lottery_id;
            `
        );
        return NextResponse.json(rows, {
            headers: { 'Cache-Control': 'no-store' },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to fetch active lotteries' }, {
                status: 500,
                headers: {
                    'Cache-Control': 'no-store',
                },
            }
        );
    }
}