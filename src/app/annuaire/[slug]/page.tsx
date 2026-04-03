export const dynamic = 'force-dynamic';

import { notFound } from "next/navigation";
import { getAllDepartments, getCitiesByDepartment, getDepartmentByCode, getDepartmentsByRegion } from "@/lib/cities";
import Link from "next/link";
import { Metadata } from "next";
import { DepartmentCities } from "@/components/pseo/DepartmentCities";
import { MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const parts = slug.split('-');
    const code = parts[parts.length - 1];
    const dept = getDepartmentByCode(code);
    if (!dept) return {};
    return {
        title: `Entretien PAC ${dept.name} (${dept.code}) — Techniciens RGE 2026`,
        description: `Entretien pompe à chaleur dans le ${dept.name} (${dept.code}). ${dept.nb_techniciens_rge} techniciens certifiés RGE. Prix de ${dept.prix_min}€ à ${dept.prix_max}€. Devis gratuit.`,
        alternates: { canonical: `https://www.prix-entretien-pac.fr/annuaire/${slug}` },
    };
}

export default async function DepartmentPage({ params }: Props) {
    const { slug } = await params;
    const parts = slug.split('-');
    const code = parts[parts.length - 1];

    const dept = getDepartmentByCode(code);
    if (!dept) notFound();

    const cities = getCitiesByDepartment(code);
    cities.sort((a, b) => a.name.localeCompare(b.name));

    const neighborDepts = getDepartmentsByRegion(dept.region).filter(d => d.code !== dept.code);

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-primary-900 text-white relative pb-32 pt-12">
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[
                        { label: "Annuaire", href: "/annuaire" },
                        { label: `${dept.name} (${dept.code})` },
                    ]} />
                    <div className="text-center mt-4">
                        <div className="inline-block bg-white/10 text-primary-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-white/10">
                            Département {dept.code} — {dept.nb_techniciens_rge} techniciens RGE
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Entretien PAC <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100">{dept.name}</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Trouvez un technicien certifié RGE dans le {dept.name}, région {dept.region}. Prix de {dept.prix_min}€ à {dept.prix_max}€. Devis gratuit.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-20 bg-slate-50 min-h-[500px]">
                <div className="container mx-auto px-4">
                    <DepartmentCities
                        departmentName={dept.name}
                        departmentCode={dept.code}
                        cities={cities}
                    />

                    {neighborDepts.length > 0 && (
                        <div className="mt-16 pt-16 border-t border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <MapPin className="h-6 w-6 text-primary-500" />
                                Autres départements en {dept.region}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {neighborDepts.map((d) => (
                                    <Link
                                        key={d.code}
                                        href={`/annuaire/${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`}
                                        className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-primary-500 hover:shadow-md transition-all group"
                                    >
                                        <span className="font-medium text-slate-700 group-hover:text-primary-700">{d.name}</span>
                                        <span className="text-sm text-slate-400 bg-slate-50 px-2 py-1 rounded group-hover:bg-primary-50 group-hover:text-primary-600">{d.code}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
