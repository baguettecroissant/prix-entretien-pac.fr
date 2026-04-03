"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
            <div className="bg-accent-500 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
                <Link
                    href="/devis"
                    className="flex items-center justify-center gap-2 py-4 px-6 text-white font-bold text-base"
                >
                    Devis Gratuit — Entretien PAC
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}
