import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getBrandBySlug, getAllBrands, getRelatedBrands } from "@/lib/brands-data";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Wrench, AlertTriangle, Shield, Clock, Euro, ThermometerSun } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllBrands().map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);
    if (!brand) return {};
    return {
        title: brand.metaTitle,
        description: brand.metaDescription,
        alternates: { canonical: `https://www.prix-entretien-pac.fr/marques/${brand.slug}` },
    };
}

export default async function BrandPage({ params }: Props) {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);
    if (!brand) notFound();

    const related = getRelatedBrands(slug, 6);

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.prix-entretien-pac.fr" },
                    { "@type": "ListItem", "position": 2, "name": "Marques", "item": "https://www.prix-entretien-pac.fr/marques" },
                    { "@type": "ListItem", "position": 3, "name": brand.name },
                ],
            }) }} />

            {/* HERO */}
            <section className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-14">
                <div className="container mx-auto px-4 max-w-5xl">
                    <Breadcrumbs items={[
                        { label: "Marques", href: "/marques" },
                        { label: brand.name },
                    ]} />
                    <div className="mt-4 flex items-start gap-6">
                        <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                            <Wrench className="h-10 w-10 text-primary-300" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black leading-tight">Entretien Pompe à Chaleur {brand.name}</h1>
                            <p className="text-primary-200 mt-2 text-lg">{brand.specialite}</p>
                            <p className="text-slate-300 mt-3 max-w-2xl">{brand.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT + SIDEBAR */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid lg:grid-cols-3 gap-10 items-start">
                        <div className="lg:col-span-2 space-y-10">

                            {/* AVANTAGES */}
                            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-600" /> Pourquoi choisir {brand.name} ?</h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {brand.avantages.map((a, i) => (
                                        <div key={i} className="flex items-start gap-2 bg-white rounded-xl p-3 border border-primary-100">
                                            <CheckCircle className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700 font-medium">{a}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* GAMMES */}
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">📋 Gammes {brand.name} et entretien spécifique</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-primary-700 text-white">
                                                <th className="px-4 py-3 text-left rounded-tl-xl">Gamme</th>
                                                <th className="px-4 py-3 text-left">Type</th>
                                                <th className="px-4 py-3 text-left rounded-tr-xl">Entretien annuel estimé</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {brand.gammes.map((g, i) => (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                    <td className="px-4 py-3 font-semibold text-slate-900 border border-slate-100">{g}</td>
                                                    <td className="px-4 py-3 text-slate-600 border border-slate-100">
                                                        {g.toLowerCase().includes('air') || g.toLowerCase().includes('stylish') || g.toLowerCase().includes('emura') || g.toLowerCase().includes('shorai') || g.toLowerCase().includes('seiya') ? 'Air/Air' : 'Air/Eau'}
                                                    </td>
                                                    <td className="px-4 py-3 font-mono font-bold text-primary-700 border border-slate-100">
                                                        {g.toLowerCase().includes('air') || g.toLowerCase().includes('stylish') || g.toLowerCase().includes('emura') || g.toLowerCase().includes('shorai') || g.toLowerCase().includes('seiya') ? '90€ — 160€' : '150€ — 280€'}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* ENTRETIEN SPECIFIQUE */}
                            <div className="bg-accent-50 border-l-4 border-accent-500 rounded-r-2xl p-6">
                                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Wrench className="h-5 w-5 text-accent-600" /> Spécificités d&apos;entretien {brand.name}</h2>
                                <p className="text-slate-700 leading-relaxed mb-4">{brand.entretienSpecifique}</p>
                                <p className="text-slate-700 leading-relaxed">Pour un entretien conforme aux préconisations {brand.name}, faites appel à un <Link href="/guides/choisir-technicien-pac-certifie-rge" className="text-primary-600 font-semibold hover:underline">technicien certifié RGE</Link> idéalement agréé par le constructeur. L&apos;entretien doit respecter les <Link href="/guides/12-points-verification-entretien-pac" className="text-primary-600 font-semibold hover:underline">12 points de contrôle réglementaires</Link> imposés par le <Link href="/guides/entretien-obligatoire-pac-loi-decret-2020" className="text-primary-600 font-semibold hover:underline">décret du 29 juillet 2020</Link>.</p>
                            </div>

                            {/* CHECKLIST PAC BRAND */}
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">🔍 Points de contrôle spécifiques {brand.name}</h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        { icon: <ThermometerSun className="h-4 w-4" />, label: "Mesure du COP réel vs données constructeur" },
                                        { icon: <Shield className="h-4 w-4" />, label: "Vérification circuit frigorifique et charge fluide" },
                                        { icon: <AlertTriangle className="h-4 w-4" />, label: "Contrôle des codes erreur via interface fabricant" },
                                        { icon: <Clock className="h-4 w-4" />, label: "Test du cycle de dégivrage automatique" },
                                        { icon: <Euro className="h-4 w-4" />, label: "Mise à jour firmware/logiciel de régulation" },
                                        { icon: <Wrench className="h-4 w-4" />, label: "Nettoyage échangeur + filtres + condensats" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3">
                                            <div className="text-primary-600">{item.icon}</div>
                                            <span className="text-sm text-slate-700">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CONTRAT RECOMMANDATION */}
                            <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-2xl p-6">
                                <h2 className="text-xl font-bold text-slate-900 mb-3">💡 Quel contrat d&apos;entretien pour une PAC {brand.name} ?</h2>
                                <p className="text-slate-700 mb-4">Pour une PAC {brand.name} de moins de 5 ans, un <Link href="/guides/contrat-entretien-pac-guide-complet" className="text-primary-600 font-semibold hover:underline">contrat basique (130-180€/an)</Link> suffit. Au-delà de 5 ans, le contrat standard avec dépannage prioritaire est recommandé. Pour les installations {brand.name} de plus de 10 ans, le premium avec pièces incluses sécurise votre budget.</p>
                                <p className="text-slate-700 mb-4">Consultez notre <Link href="/guides/prix-entretien-pac-tarifs" className="text-primary-600 font-semibold hover:underline">grille tarifaire complète 2026</Link> pour comparer les prix selon votre configuration.</p>
                                <div className="text-center mt-6">
                                    <Link href="/devis"><Button size="lg" variant="accent" className="shadow-lg">Devis entretien {brand.name} gratuit <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                                </div>
                            </div>

                            {/* FAQ MARQUE */}
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">❓ Questions fréquentes — Entretien {brand.name}</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: `Combien coûte l'entretien d'une PAC ${brand.name} ?`, a: `L'entretien ponctuel d'une PAC ${brand.name} coûte entre 120€ et 280€ selon le modèle (air/air ou air/eau). Un contrat annuel revient à 150€-250€/an avec un meilleur suivi.` },
                                        { q: `À quelle fréquence entretenir une PAC ${brand.name} ?`, a: `${brand.name} recommande un entretien annuel. Le décret de 2020 impose au minimum un entretien tous les 2 ans pour les PAC de plus de 4 kW. En zone littorale ou utilisation intensive, 2 passages par an sont conseillés.` },
                                        { q: `Faut-il un technicien agréé ${brand.name} ?`, a: `Ce n'est pas obligatoire mais fortement recommandé. Un technicien agréé ${brand.name} a accès aux outils de diagnostic spécifiques et aux formations continues sur les nouvelles gammes. Dans tous les cas, le technicien doit posséder l'attestation de capacité pour les fluides frigorigènes.` },
                                    ].map((faq, i) => (
                                        <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                                            <h3 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h3>
                                            <p className="text-sm text-slate-600">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <aside className="space-y-6 lg:sticky lg:top-20">
                            <ViteUnDevisWidget />

                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-3 text-sm">📚 Guides utiles</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/guides/prix-entretien-pac-tarifs" className="text-primary-600 hover:underline font-medium">→ Tarifs entretien 2026</Link></li>
                                    <li><Link href="/guides/contrat-entretien-pac-guide-complet" className="text-primary-600 hover:underline font-medium">→ Guide contrats</Link></li>
                                    <li><Link href="/guides/12-points-verification-entretien-pac" className="text-primary-600 hover:underline font-medium">→ 12 points de contrôle</Link></li>
                                    <li><Link href="/guides/choisir-technicien-pac-certifie-rge" className="text-primary-600 hover:underline font-medium">→ Choisir un technicien</Link></li>
                                </ul>
                            </div>

                            <div className="bg-primary-50 p-5 rounded-2xl border border-primary-200">
                                <h3 className="font-bold text-primary-800 mb-3 text-sm">🏭 Autres marques</h3>
                                <ul className="space-y-1 text-sm">
                                    {related.slice(0, 5).map(b => (
                                        <li key={b.slug}><Link href={`/marques/${b.slug}`} className="text-primary-600 hover:underline">→ {b.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* RELATED BRANDS */}
            {related.length > 0 && (
                <section className="py-12 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Entretien par marque</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {related.map(b => (
                                <Link key={b.slug} href={`/marques/${b.slug}`} className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-primary-400 hover:shadow-md transition-all group">
                                    <div className="font-bold text-slate-900 group-hover:text-primary-700">{b.name}</div>
                                    <div className="text-xs text-slate-500 mt-1">{b.specialite}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
