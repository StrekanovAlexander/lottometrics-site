// app/api/lotteries/[slug]/analysis/route.js
import db from "@/lib/db";

export async function GET(request, { params }) {
  const { slug } = params;
  
  const [data] = await db.query(
    `SELECT lottery_name, iso_code, description_en
      FROM lotteries
      WHERE slug = ? AND is_active = true
    `,
    [slug]
  );

  return Response.json({ data });
}
