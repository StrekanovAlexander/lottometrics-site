import pool from '@/lib/db';
import { NextResponse } from 'next/server';
import { getLotto6aus49 } from './lotteries/lotto6aus49';
import { getPowerball } from './lotteries/powerball';

export async function GET() {
  try {
    const results = [];
    results.push(await getLotto6aus49());
    results.push(await getPowerball());

    for (const draw of results) {
      const { lotteryId, drawDate, mainNumbers, extraNumbers, jackpotAmount } = draw;
      const [rows] = await pool.query(
        'SELECT MAX(draw_date) AS lastDate FROM draws WHERE lottery_id = ?',
        [lotteryId]
      );

      const lastDate = rows[0]?.lastDate
        ? new Date(rows[0].lastDate).toISOString().slice(0, 10)
        : null;

      if (lastDate !== drawDate) {
        await pool.query('CALL add_draw(?, ?, ?, ?, ?)', [
          lotteryId,
          drawDate,
          mainNumbers,
          extraNumbers,
          jackpotAmount
        ]);
      }
    }
    return NextResponse.json({ status: 'ok', updated: results });
  } catch (err) {
    return NextResponse.json({ status: 'error', message: err.message }, { status: 500 });
  }
}
