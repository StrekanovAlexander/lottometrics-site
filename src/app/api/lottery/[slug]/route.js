// app/api/lotteries/[slug]/route.js
import db from "@/lib/db";

export async function GET(request, { params }) {
  const { slug } = params;
  
  const [data] = await db.query(
    `SELECT iso_code, lottery_name, country, description_short_en, description_en
      FROM lotteries
      WHERE slug = ? AND is_active = true
    `,
    [slug]
  );

  return Response.json({ data });
}
