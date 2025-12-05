import pool from '@/lib/db';
import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const [rows] = await pool.query(
            `SELECT 
                id,
                iso_code,
                lottery_name,
                country,
                description_short_en,
                slug,
                description_en,
                description_de,
                description_ru,
                main_count,
                main_start,
                main_finish,
                extra_count,
                extra_start,
                extra_finish 
            FROM lotteries 
            WHERE is_active = true`
        );
        return NextResponse.json(rows, {
            // headers: { 'Cache-Control': 'no-store' },
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