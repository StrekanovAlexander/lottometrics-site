import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT 
        l.id,
        l.lottery_name,
        l.country,
        l.description_short_en,
        l.slug,
        d.draw_date,
      GROUP_CONCAT(
        CASE WHEN dn.number_kind = 'main' THEN dn.draw_number END 
        ORDER BY dn.draw_number ASC
      ) AS main_numbers,
      GROUP_CONCAT(
        CASE WHEN dn.number_kind = 'extra' THEN dn.draw_number END 
        ORDER BY dn.draw_number ASC
      ) AS extra_numbers
      FROM lotteries l
        JOIN (
          SELECT lottery_id, MAX(draw_date) AS last_date
          FROM draws
          WHERE is_active = 1
          GROUP BY lottery_id
        ) latest ON latest.lottery_id = l.id
      JOIN draws d ON d.lottery_id = l.id AND d.draw_date = latest.last_date
      JOIN draw_numbers dn ON dn.draw_id = d.id
      WHERE l.is_active = 1 AND dn.is_active = 1
      GROUP BY l.id, l.lottery_name, l.country, l.description_short_en, l.slug, d.draw_date;
    `);
    
    const lotteries = rows.map(row => ({
      id: row.id,
      lotteryName: row.lottery_name,
      slug: row.slug,
      country: row.country,
      descriptionShortEn: row.description_short_en,
      lastDrawDate: row.draw_date,
      mainNumbers: row.main_numbers,
      extraNumbers: row.extra_numbers,
    }));
        return Response.json({ lotteries });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'DB error' }, { status: 500 });
    }
}