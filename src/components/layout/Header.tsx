"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Thermometer, ChevronDown } from "lucide-react";

const navItems = [
    { label: "Tarifs", href: "/guides/prix-entretien-pac-tarifs" },
    { label: "Annuaire", href: "/annuaire" },
    { label: "Guides", href: "/guides" },
    { label: "Marques", href: "/marques" },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 bg-primary-700 rounded-xl flex items-center justify-center">
                            <Thermometer className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black text-primary-800 leading-tight tracking-tight">Prix-Entretien-PAC</span>
                            <span className="text-[10px] text-slate-400 leading-tight">.fr</span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-semibold text-slate-600 hover:text-primary-700 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/devis"
                            className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            Devis Gratuit
                        </Link>
                    </nav>

                    {/* Mobile hamburger */}
                    <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-600" aria-label="Menu">
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden border-t border-slate-100 py-4 space-y-2">
                        {navItems.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block py-2 text-sm font-semibold text-slate-700 hover:text-primary-700"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/devis"
                            onClick={() => setOpen(false)}
                            className="block bg-accent-500 text-white font-bold text-center py-3 rounded-xl mt-4"
                        >
                            Devis Gratuit
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
