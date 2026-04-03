import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-white">
            <div className="text-center max-w-lg px-4">
                <div className="text-7xl font-black text-primary-200 mb-4">404</div>
                <h1 className="text-2xl font-bold text-slate-900 mb-4">Page introuvable</h1>
                <p className="text-slate-500 mb-8">Cette page n&apos;existe pas ou a été déplacée. Utilisez les liens ci-dessous pour trouver ce que vous cherchez.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/"><Button variant="default" className="gap-2"><ArrowLeft className="h-4 w-4" /> Retour à l&apos;accueil</Button></Link>
                    <Link href="/annuaire"><Button variant="outline" className="gap-2"><Search className="h-4 w-4" /> Chercher ma ville</Button></Link>
                </div>
            </div>
        </div>
    );
}
