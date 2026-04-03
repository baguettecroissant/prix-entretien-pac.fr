import { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides-data";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Guides Entretien PAC — Conseils & Réglementation",
    description: "Guides complets sur l'entretien de pompe à chaleur : prix, loi, contrat, check-list 12 points, technicien RGE. Tout pour maintenir votre PAC.",
    alternates: { canonical: "https://www.prix-entretien-pac.fr/guides" },
};

export default function GuidesPage() {
    const guides = getAllGuides();

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        Guides <span className="text-primary-300">Entretien PAC</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Tout ce que vous devez savoir pour entretenir votre pompe à chaleur : tarifs, obligations, protocoles, conseils de pros.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-6">
                        {guides.map(g => (
                            <Link key={g.slug} href={`/guides/${g.slug}`} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary-200 transition-all group">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{g.category.replace(/-/g, ' ')}</span>
                                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="h-3 w-3" /> {g.readTime} min</span>
                                </div>
                                <h2 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors mb-2">{g.title}</h2>
                                <p className="text-sm text-slate-500 line-clamp-2">{g.excerpt}</p>
                                <div className="mt-4 text-sm font-bold text-primary-600 flex items-center gap-1">Lire le guide <ArrowRight className="h-4 w-4" /></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
