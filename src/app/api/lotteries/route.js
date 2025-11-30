import pool from '@/lib/db';

export async function GET() {
    try {
        const [rows] = await pool.query(
            `SELECT id, iso_code, lottery_name, slug, country, description_short_en, description_en 
            FROM lotteries 
            WHERE is_active = true`
        );
        return Response.json({ lotteries: rows });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'DB error' }, { status: 500 });
    }
}