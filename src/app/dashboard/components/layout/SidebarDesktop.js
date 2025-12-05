import SelectLotteryBtn from "../elements/buttons/SelectLotteryBtn"

export default function SidebarDesktop() {
    return (
        <aside className="hidden md:flex md:flex-col w-64 flex-shrink-0 bg-graphite text-lightgray p-4">
            <SelectLotteryBtn />
            
            <nav className="space-y-2">
                <a href="/overview" className="block hover:text-lavender">Overview</a>
                <a href="/analytics" className="block hover:text-mint">Analytics</a>
                <a href="/settings" className="block hover:text-yellow-300">Settings</a>
            </nav>
        </aside>
    )
}