// /dashboard/lottery/[slug]
import { redirect } from "next/navigation";

export default function LotterySlugPage({ params }) {
  redirect(`/dashboard/lottery/${params.slug}/results`);
}
