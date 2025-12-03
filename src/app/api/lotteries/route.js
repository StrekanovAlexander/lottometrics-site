import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [rows] = await pool.query(
            `SELECT id, iso_code, lottery_name, slug, country, description_short_en, description_en 
            FROM lotteries 
            WHERE is_active = true`
        );
        return NextResponse.json({ lotteries: rows }, {
            status: 200,
            headers: {
                'Cache-Control': 'no-store',
            },
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