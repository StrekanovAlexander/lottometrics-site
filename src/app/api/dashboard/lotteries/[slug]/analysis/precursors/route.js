import pool from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { searchParams } = new URL(request.url);
        const precursorKind = searchParams.get("precursor_kind");
        const followerKind = searchParams.get("follower_kind");
        const slug = params.slug; 

        const [lotteryRows] = await pool.query(
            `SELECT id FROM lotteries WHERE slug = ? AND is_active = 1`,
            [slug]
        );
        const lottery = lotteryRows[0];

        const [pairsRows] = await pool.query(`
            SELECT precursor_value, follower_value, probability, uplift
            FROM precursor_followers_stats
            WHERE lottery_id = ?
            AND precursor_kind = ?
            AND follower_kind = ?
        `, [lottery.id, precursorKind, followerKind]);

        return NextResponse.json({ pairs: pairsRows });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}


/*

export async function GET(request, { params }) {
    try {
        const { searchParams } = new URL(request.url);
        const windowSize = parseInt(searchParams.get("window_size") || "50", 10);
        const precursorKind = searchParams.get("precursor_kind");
        const followerKind = searchParams.get("follower_kind");
        const slug = params.slug; 

        const [lotteryRows] = await pool.query(
            `SELECT id FROM lotteries WHERE slug = ? AND is_active = 1`,
            [slug]
        );
        const lott = lotteryRows[0];

        const [pairsRows] = await pool.query(`
            WITH recent AS (
                SELECT id
                FROM draws
                WHERE lottery_id = ? and is_active = 1 
                ORDER BY draw_date DESC
                LIMIT ?
            )
            SELECT
                p.precursor_value,
                p.follower_value,
                COUNT(DISTINCT dn1.draw_id) AS count_total,
                COUNT(DISTINCT CASE WHEN dn1.id < dn2.id THEN dn1.draw_id END) AS count_with_follower,
                COUNT(DISTINCT CASE WHEN dn1.id < dn2.id THEN dn1.draw_id END) / NULLIF(COUNT(DISTINCT dn1.draw_id),0) AS probability,
                (
                    SELECT COUNT(DISTINCT dn.draw_id)
                    FROM draw_numbers dn
                    JOIN recent r ON dn.draw_id = r.id
                    WHERE dn.draw_number = p.follower_value
                ) AS follower_base,
                (
                    COUNT(DISTINCT CASE WHEN dn1.id < dn2.id THEN dn1.draw_id END) / NULLIF(COUNT(DISTINCT dn1.draw_id),0)
                ) /
                (
                    (SELECT COUNT(DISTINCT dn.draw_id)
                     FROM draw_numbers dn
                     JOIN recent r ON dn.draw_id = r.id
                     WHERE dn.draw_number = p.follower_value) / ?
                ) AS uplift
            FROM precursors p
            JOIN draw_numbers dn1 ON dn1.draw_number = p.precursor_value
            JOIN draw_numbers dn2 ON dn2.draw_number = p.follower_value
            JOIN recent r ON dn1.draw_id = r.id AND dn2.draw_id = r.id
            WHERE p.lottery_id = ?
              AND p.precursor_kind = ?
              AND p.follower_kind = ?
              AND dn1.draw_id = dn2.draw_id
              AND dn1.id < dn2.id
            GROUP BY p.precursor_value, p.follower_value
        `, [lott.id, windowSize, windowSize, lott.id, precursorKind, followerKind]);

        return NextResponse.json({ lott, pairs: pairsRows });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
}
*/