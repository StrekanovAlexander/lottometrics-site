import pool from '@/lib/db';
import { NextResponse } from 'next/server';
import { getLotto6aus49 } from './lotteries/lotto6aus49';
import { getPowerball } from './lotteries/powerball';
import { getEuromillions } from './lotteries/euromillions';
import { getMegamillions } from './lotteries/megamillions';
import { getEurojackpot } from './lotteries/eurojackpot';
import { getUKNanionalLottery } from './lotteries/uknationallottery';

export async function GET() {
  try {
    const results = [];
    
    const lotto6aus49 = await getLotto6aus49();
    if (lotto6aus49) results.push(lotto6aus49);
    
    const powerball = await getPowerball();
    if (powerball) results.push(powerball);
    
    const euromillions = await getEuromillions();
    if (euromillions) results.push(euromillions);

    const megamillions = await getMegamillions();
    if (megamillions) results.push(megamillions);

    const eurojackpot = await getEurojackpot();
    if (eurojackpot) results.push(eurojackpot);

    const ukanionalLottery = await getUKNanionalLottery();
    if (ukanionalLottery) results.push(ukanionalLottery);

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
