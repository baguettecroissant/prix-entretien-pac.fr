import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getGuideBySlug, getAllGuides, getRelatedGuides } from "@/lib/guides-data";
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

export default async function GuidePage({ params }: Props) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);
    if (!guide) notFound();

    const related = getRelatedGuides(slug, 4);

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": guide.title,
                "description": guide.metaDescription,
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

            <section className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Breadcrumbs items={[
                        { label: "Guides", href: "/guides" },
                        { label: guide.title },
                    ]} />
                    <div className="mt-4">
                        <span className="text-xs font-bold text-primary-300 uppercase tracking-wider">{guide.category.replace(/-/g, ' ')}</span>
                        <h1 className="text-3xl md:text-4xl font-black mt-2 mb-4">{guide.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-slate-300">
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Mis à jour le {new Date(guide.updatedDate).toLocaleDateString('fr-FR')}</span>
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {guide.readTime} min de lecture</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">{guide.excerpt}</p>
                        <hr className="my-8" />
                        <p>Ce guide détaille tout ce que vous devez savoir sur le sujet. Pour obtenir un devis personnalisé adapté à votre situation et votre localisation, utilisez notre comparateur gratuit.</p>
                        <div className="not-prose my-8 text-center">
                            <Link href="/devis"><Button size="lg" variant="accent" className="shadow-lg">Obtenir un devis gratuit <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                        </div>
                        <p>Consultez nos autres guides pour approfondir vos connaissances sur l&apos;entretien de votre pompe à chaleur.</p>
                    </div>
                </div>
            </section>

            {related.length > 0 && (
                <section className="py-12 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Guides connexes</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {related.map(r => (
                                <Link key={r.slug} href={`/guides/${r.slug}`} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-primary-200 transition-all group">
                                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary-600 transition-colors">{r.title}</h3>
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
