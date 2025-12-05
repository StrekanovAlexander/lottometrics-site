import { X } from "lucide-react";
export default function SidebarMobile({setIsSidebarMobileOpen}) {
    return (
        <div className="md:hidden fixed inset-0 z-50 flex">
            <aside className="w-2/3 bg-graphite text-lightgray p-6">
                <button
                    className="mb-4 text-right w-full"
                    onClick={() => setIsSidebarMobileOpen(false)}
                >
                    <X />
                </button>
                <nav className="space-y-4">
                    <a href="/overview" className="block hover:text-lavender">Overview</a>
                    <a href="/analytics" className="block hover:text-mint">Analytics</a>
                    <a href="/settings" className="block hover:text-yellow-300">Settings</a>
                </nav>
            </aside>
            {/* Overlay right */}
            <div
                className="flex-grow bg-black bg-opacity-50"
                onClick={() => setIsSidebarMobileOpen(false)}
            />
        </div>
    )
}