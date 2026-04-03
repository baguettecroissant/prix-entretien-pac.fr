import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getGuideBySlug, getAllGuides, getRelatedGuides } from "@/lib/guides-data";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllGuides().map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);
    if (!guide) return {};
    return {
        title: guide.metaTitle,
        description: guide.metaDescription,
        alternates: { canonical: `https://www.prix-entretien-pac.fr/guides/${guide.slug}` },
    };
}

const imageMap: Record<string, string> = {
    "prix-entretien-pac-tarifs": "/images/guide-prix-tarifs.png",
    "entretien-obligatoire-pac-loi-decret-2020": "/images/guide-reglementation.png",
    "contrat-entretien-pac-guide-complet": "/images/guide-contrat-entretien.png",
    "12-points-verification-entretien-pac": "/images/guide-12-points.png",
    "signes-pac-besoin-entretien-urgent": "/images/guide-12-points.png",
    "entretien-pac-air-eau-vs-air-air": "/images/hero-homepage.png",
    "fluide-frigorigene-r32-reglementation": "/images/guide-reglementation.png",
    "choisir-technicien-pac-certifie-rge": "/images/hero-homepage.png",
};

export default async function GuidePage({ params }: Props) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);
    if (!guide) notFound();

    const related = getRelatedGuides(slug, 4);
    const heroImage = imageMap[slug] || "/images/hero-homepage.png";

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": guide.title,
                "description": guide.metaDescription,
                "image": `https://www.prix-entretien-pac.fr${heroImage}`,
                "datePublished": guide.publishDate,
                "dateModified": guide.updatedDate,
                "publisher": { "@type": "Organization", "name": "Prix-Entretien-PAC.fr", "url": "https://www.prix-entretien-pac.fr" },
                "mainEntityOfPage": `https://www.prix-entretien-pac.fr/guides/${guide.slug}`,
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.prix-entretien-pac.fr" },
                    { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.prix-entretien-pac.fr/guides" },
                    { "@type": "ListItem", "position": 3, "name": guide.title },
                ],
            }) }} />

            {/* HERO */}
            <section className="relative bg-gradient-to-br from-primary-900 to-slate-900 text-white py-16 overflow-hidden">
                <Image src={heroImage} alt={guide.imageAlt} fill className="object-cover opacity-15" />
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <Breadcrumbs items={[
                        { label: "Guides", href: "/guides" },
                        { label: guide.title },
                    ]} />
                    <div className="mt-4">
                        <span className="inline-block text-xs font-bold bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full uppercase tracking-wider mb-3">{guide.category.replace(/-/g, ' ')}</span>
                        <h1 className="text-3xl md:text-4xl font-black mt-2 mb-4 leading-tight">{guide.title}</h1>
                        <p className="text-lg text-slate-300 max-w-3xl">{guide.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-400 mt-4">
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Mis à jour le {new Date(guide.updatedDate).toLocaleDateString('fr-FR')}</span>
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {guide.readTime} min de lecture</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT + SIDEBAR */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-10 items-start">

                        {/* MAIN CONTENT */}
                        <div className="lg:col-span-2">
                            <article
                                className="prose prose-lg prose-slate max-w-none
                                    prose-headings:font-extrabold prose-headings:text-slate-900
                                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-2
                                    prose-h3:text-lg prose-h3:mt-6
                                    prose-a:text-primary-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                    prose-table:border-collapse prose-table:w-full prose-table:text-sm
                                    prose-th:bg-primary-700 prose-th:text-white prose-th:px-4 prose-th:py-2 prose-th:text-left
                                    prose-td:border prose-td:border-slate-200 prose-td:px-4 prose-td:py-2
                                    prose-li:marker:text-primary-500
                                    prose-strong:text-slate-900"
                                dangerouslySetInnerHTML={{ __html: guide.content }}
                            />

                            {/* CTA mid-article */}
                            <div className="my-10 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-2xl p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Besoin d&apos;un devis personnalisé ?</h3>
                                <p className="text-slate-600 mb-4">Comparez les tarifs de techniciens certifiés RGE dans votre secteur. Gratuit et sans engagement.</p>
                                <Link href="/devis"><Button size="lg" variant="accent" className="shadow-lg">Obtenir mes devis gratuits <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <aside className="space-y-6 lg:sticky lg:top-20">
                            <ViteUnDevisWidget />

                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-3 text-sm">📚 Guides associés</h3>
                                <ul className="space-y-2">
                                    {related.slice(0, 4).map(r => (
                                        <li key={r.slug}>
                                            <Link href={`/guides/${r.slug}`} className="text-sm text-primary-600 hover:underline font-medium leading-tight block">
                                                → {r.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-primary-50 p-5 rounded-2xl border border-primary-200">
                                <h3 className="font-bold text-primary-800 mb-2 text-sm">🏭 Entretien par marque</h3>
                                <ul className="space-y-1 text-sm">
                                    <li><Link href="/marques/daikin" className="text-primary-600 hover:underline">→ Daikin</Link></li>
                                    <li><Link href="/marques/atlantic" className="text-primary-600 hover:underline">→ Atlantic</Link></li>
                                    <li><Link href="/marques/mitsubishi-electric" className="text-primary-600 hover:underline">→ Mitsubishi Electric</Link></li>
                                    <li><Link href="/marques" className="text-primary-600 hover:underline font-semibold">→ Toutes les marques</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* RELATED GUIDES */}
            {related.length > 0 && (
                <section className="py-12 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Guides connexes</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {related.map(r => (
                                <Link key={r.slug} href={`/guides/${r.slug}`} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-primary-200 transition-all group">
                                    <span className="text-xs font-bold text-primary-500 uppercase">{r.category.replace(/-/g, ' ')}</span>
                                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary-600 transition-colors mt-1">{r.title}</h3>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{r.excerpt}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
