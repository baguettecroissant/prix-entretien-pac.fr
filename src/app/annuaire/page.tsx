import { getAllDepartments } from '@/lib/cities';
import Link from 'next/link';
import { Metadata } from 'next';
import { MapPin, ChevronRight } from 'lucide-react';
import type { DepartmentInfo } from '@/types';

export const metadata: Metadata = {
    title: "Entretien PAC par Département — Annuaire France",
    description: "Trouvez un technicien certifié RGE pour l'entretien de votre pompe à chaleur. Parcourez les 96 départements français. Devis gratuit.",
    alternates: { canonical: 'https://www.prix-entretien-pac.fr/annuaire' },
};

export default function AnnuairePage() {
    const departments = getAllDepartments();
    const regionsMap = new Map<string, DepartmentInfo[]>();

    departments.forEach(dept => {
        const current = regionsMap.get(dept.region) || [];
        current.push(dept);
        regionsMap.set(dept.region, current);
    });

    const sortedRegions = Array.from(regionsMap.keys()).sort();

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        Entretien PAC par <span className="text-primary-300">Département</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Sélectionnez votre département pour trouver un technicien certifié RGE et obtenir un devis gratuit pour l&apos;entretien de votre pompe à chaleur.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 max-w-6xl mx-auto">
                        {sortedRegions.map(region => (
                            <div key={region} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                <div className="bg-primary-50 px-6 py-4 border-b border-primary-100 flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary-600" />
                                    <h2 className="text-xl font-bold text-slate-800">{region}</h2>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {regionsMap.get(region)?.map(dept => {
                                            const slug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
                                            return (
                                                <Link
                                                    key={dept.code}
                                                    href={`/annuaire/${slug}`}
                                                    className="group flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 border border-transparent hover:border-primary-200 transition-all"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="bg-slate-100 text-slate-600 font-mono text-sm font-bold px-2 py-1 rounded">
                                                            {dept.code}
                                                        </span>
                                                        <span className="text-slate-700 font-medium group-hover:text-primary-700">
                                                            {dept.name}
                                                        </span>
                                                    </div>
                                                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary-400" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
