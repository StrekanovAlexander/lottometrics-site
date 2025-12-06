"use client";
import { useState } from "react";
import { Settings, X } from "lucide-react";

export default function SidebarMobile() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-between">
            <button
                className="md:hidden p-2 rounded bg-graphite-dark text-yellow"
                onClick={() => setOpen(true)}
            >
                <Settings />
            </button>
            {open && (
                <div className="md:hidden fixed inset-0 z-50 flex">
                    <aside className="w-2/3 bg-graphite text-lightgray p-6">
                        <button
                            className="mb-4 text-right w-full"
                            onClick={() => setOpen(false)}
                        >
                            <X />
                        </button>
                        <nav className="space-y-4">
                            <a href="/#" className="block hover:text-lavender">Overview</a>
                            <a href="/#" className="block hover:text-mint">Analytics</a>
                            <a href="/#" className="block hover:text-yellow-300">Settings</a>
                        </nav>
                    </aside>
                    <div
                        className="flex-grow bg-black bg-opacity-50"
                        onClick={() => setOpen(false)}
                    />
                </div>
            )}
        </div>
    );
}
/*
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
*/