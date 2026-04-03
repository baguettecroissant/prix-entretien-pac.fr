import { Metadata } from "next";
import Link from "next/link";
import { getAllBrands } from "@/lib/brands-data";
import { Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Entretien PAC par Marque — Daikin, Atlantic, Mitsubishi...",
    description: "Trouvez les tarifs et protocoles d'entretien spécifiques à votre marque de PAC : Daikin, Atlantic, Mitsubishi Electric, Hitachi, Toshiba, Panasonic, De Dietrich, Saunier Duval.",
    alternates: { canonical: "https://www.prix-entretien-pac.fr/marques" },
};

export default function MarquesPage() {
    const brands = getAllBrands();

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        Entretien PAC par <span className="text-primary-300">Marque</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Chaque marque a ses spécificités d&apos;entretien. Découvrez les protocoles et tarifs adaptés à votre pompe à chaleur.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {brands.map(b => (
                            <Link key={b.slug} href={`/marques/${b.slug}`} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary-200 transition-all group">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                                        <Wrench className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-primary-700">{b.name}</h2>
                                        <span className="text-xs text-slate-500">{b.specialite}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 line-clamp-2 mb-4">{b.description}</p>
                                <div className="text-sm font-bold text-primary-600 flex items-center gap-1">Voir les détails <ArrowRight className="h-4 w-4" /></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
