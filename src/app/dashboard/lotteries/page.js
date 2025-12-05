// dashboard/lotteries
import Breadcrumbs from "../components/layout/Breadcrumb";
import LotteryCard from "../components/elements/cards/LotteryCard";

export default async function LotteriesPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/lotteries`);
    
    if (!res.ok) {
        return <div>Error page</div>;
    }
    
    const {lotteries} = await res.json();

    return (
        <div>
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Lotteries" },
                ]}
            />    

            <h1 className="text-3xl md:text-4xl font-extrabold text-graphite text-transparent mb-8">
                Lotteries Overview
            </h1>
            
            <div className="grid gap-6 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-6"
            >
                {lotteries.map((el) => (
                    <LotteryCard key={el.id} lottery={el} />
                ))} 
            </div>
        </div>
    )
}