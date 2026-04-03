import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getBrandBySlug, getAllBrands, getRelatedBrands } from "@/lib/brands-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Wrench } from "lucide-react";

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

    const related = getRelatedBrands(slug, 4);

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

            <section className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Breadcrumbs items={[
                        { label: "Marques", href: "/marques" },
                        { label: brand.name },
                    ]} />
                    <div className="mt-4 flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                            <Wrench className="h-8 w-8 text-primary-300" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black">Entretien PAC {brand.name}</h1>
                            <p className="text-primary-200 mt-1">{brand.specialite}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none mb-8">
                        <p>{brand.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">✅ Avantages {brand.name}</h2>
                            <ul className="space-y-2">
                                {brand.avantages.map((a, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <CheckCircle className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">📋 Gammes principales</h2>
                            <div className="flex flex-wrap gap-2">
                                {brand.gammes.map((g, i) => (
                                    <span key={i} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700">{g}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-accent-50 border border-accent-200 rounded-2xl p-6 mb-12">
                        <h2 className="text-xl font-bold text-slate-900 mb-3">🔧 Spécificités d&apos;entretien {brand.name}</h2>
                        <p className="text-slate-700 leading-relaxed">{brand.entretienSpecifique}</p>
                    </div>

                    <div className="text-center">
                        <Link href="/devis"><Button size="lg" variant="accent" className="shadow-lg">Devis entretien {brand.name} <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                    </div>
                </div>
            </section>

            {related.length > 0 && (
                <section className="py-12 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Autres marques</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
