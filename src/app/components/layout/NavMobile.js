"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { routes } from "@/lib/global";

export default function NavMobile() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-between">
            <button
                className="md:hidden p-2 rounded bg-graphite-dark text-yellow"
                onClick={() => setOpen(true)}
            >
                <Menu/>
            </button>

            {open && (
                <div className="h-1/2 fixed inset-0 bg-graphite text-lightgray p-4 z-50">
                    <div className="flex justify-end">
                    <button
                        className="p-2 text-yellow"
                        onClick={() => setOpen(false)}
                        >
                        <X />
                    </button>
                    </div>
                    <ul className="space-y-4 mt-6">
                        {routes.map(el => (
                            <li key={el.href}>
                                <a href={el.href} className="block text-yellow hover:text-white">
                                    {el.label}
                                </a>
                            </li>
                        ))}
                    </ul>
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