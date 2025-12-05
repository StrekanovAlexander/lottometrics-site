export default function NavMobile() {
    return (
        <div className="md:hidden bg-graphite text-lightgray p-4">
            <ul className="space-y-4">
                <li><a href="/" className="block hover:text-lavender">Home</a></li>
                <li><a href="/dashboard" className="block hover:text-mint">Dashboard</a></li>
                <li><a href="/lottery" className="block hover:text-yellow">Lotteries</a></li>
            </ul>
        </div>
    )
}