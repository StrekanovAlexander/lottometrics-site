import pool from '@/lib/db';

export async function GET() {
    try {
        const [rows] = await pool.query(
            'SELECT id, main_numbers, extra_numbers FROM draws WHERE lottery_id = 2 and is_active = true'
        );
        return Response.json({ draws: rows });
    } catch (error) {
        console.error(error);
    return Response.json({ error: 'DB error' }, { status: 500 });
  }
}