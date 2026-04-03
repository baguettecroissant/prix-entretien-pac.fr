export const dynamic = 'force-dynamic';

import { notFound } from "next/navigation";
import { getCityFromSlug, generateCityMetadata } from "@/lib/seo-utils";
import { getNearbyCities } from "@/lib/cities";
import { generateCityContent } from "@/lib/content-engine";
import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CityMap } from "@/components/pseo/CityMap";
import { CityInfoBar } from "@/components/pseo/CityInfoBar";
import { EntretienChecklist } from "@/components/pseo/EntretienChecklist";
import { ContratComparator } from "@/components/pseo/ContratComparator";
import { ReglementationBox } from "@/components/pseo/ReglementationBox";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, ArrowRight, Lightbulb, Info, Thermometer, Clock, Shield, Award, BookOpen, Wrench, BarChart3 } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) return {};
    return generateCityMetadata(city);
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) notFound();

    const nearbyCities = getNearbyCities(city, 8);
    const deptSlug = `${city.department_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${city.department_code}`;
    const content = generateCityContent(city);

    const deptInfo = city.department_info;
    const prixMin = deptInfo?.prix_min || 120;
    const prixMax = deptInfo?.prix_max || 280;
    const budgetMoyen = deptInfo?.budget_moyen || 190;
    const nbRge = deptInfo?.nb_techniciens_rge || 25;

    // Price table — maintenance costs by PAC type
    const priceFactor = city.population && city.population > 100000 ? 1.15 : city.population && city.population > 50000 ? 1.08 : 1;
    const priceTable = [
        { type: "PAC air/air (split)", puissance: "2-5 kW", ponctuel: Math.round(95 * priceFactor), contrat: Math.round(80 * priceFactor) },
        { type: "PAC air/air (multisplit)", puissance: "5-12 kW", ponctuel: Math.round(130 * priceFactor), contrat: Math.round(110 * priceFactor) },
        { type: "PAC air/eau (chauffage)", puissance: "6-12 kW", ponctuel: Math.round(170 * priceFactor), contrat: Math.round(150 * priceFactor) },
        { type: "PAC air/eau (chauffage + ECS)", puissance: "8-16 kW", ponctuel: Math.round(200 * priceFactor), contrat: Math.round(175 * priceFactor) },
        { type: "PAC géothermique", puissance: "8-20 kW", ponctuel: Math.round(280 * priceFactor), contrat: Math.round(240 * priceFactor) },
        { type: "PAC haute température", puissance: "10-20 kW", ponctuel: Math.round(250 * priceFactor), contrat: Math.round(220 * priceFactor) },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": `Entretien pompe à chaleur à ${city.name}`,
                "description": `Service d'entretien et de maintenance de pompes à chaleur à ${city.name} (${city.zip}), département ${city.department_name}.`,
                "areaServed": { "@type": "City", "name": city.name, "containedInPlace": { "@type": "AdministrativeArea", "name": city.department_name } },
                "provider": { "@type": "Organization", "name": "Prix-Entretien-PAC.fr", "url": "https://www.prix-entretien-pac.fr" },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": prixMin,
                    "highPrice": prixMax,
                    "priceCurrency": "EUR",
                    "offerCount": nbRge,
                },
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": content.faqItems.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })),
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.prix-entretien-pac.fr" },
                    { "@type": "ListItem", "position": 2, "name": "Annuaire", "item": "https://www.prix-entretien-pac.fr/annuaire" },
                    { "@type": "ListItem", "position": 3, "name": `${city.department_name} (${city.department_code})`, "item": `https://www.prix-entretien-pac.fr/annuaire/${deptSlug}` },
                    { "@type": "ListItem", "position": 4, "name": city.name },
                ],
            }) }} />

            {/* HERO */}
            <section className="relative text-white pb-8 pt-12 bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMjBsMjAgMjBNMjAgMjBMMCA0ME0yMCAyMEwyMCAwTTIwIDIwTDQwIDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[
                        { label: "Annuaire", href: "/annuaire" },
                        { label: `${city.department_name} (${city.department_code})`, href: `/annuaire/${deptSlug}` },
                        { label: city.name },
                    ]} />
                    <div className="text-center mt-4">
                        <div className="inline-flex items-center gap-2 bg-white/10 text-primary-200 border border-white/15 px-3 py-1 rounded-full text-sm font-medium mb-6">
                            <MapPin className="h-4 w-4" /> {city.zip} — {city.department_name}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                            Entretien Pompe à Chaleur à <span className="text-primary-300">{city.name}</span>
                        </h1>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                            Trouvez un technicien certifié RGE pour l&apos;entretien de votre PAC à {city.name} ({city.zip}). Tarifs de {prixMin}€ à {prixMax}€. Devis gratuit, obligation légale respectée.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Link href="/devis"><Button size="xl" variant="accent" className="shadow-xl">Devis gratuit à {city.name} <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST BAR */}
            <section className="bg-primary-900 py-4 border-b border-primary-700">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-primary-100 text-xs font-semibold text-center">
                        <div className="flex flex-col items-center gap-1"><Award className="h-4 w-4 text-primary-300" /> Techniciens RGE certifiés</div>
                        <div className="flex flex-col items-center gap-1"><Clock className="h-4 w-4 text-primary-300" /> RDV sous 48h</div>
                        <div className="flex flex-col items-center gap-1"><Shield className="h-4 w-4 text-primary-300" /> Décret 2020 respecté</div>
                        <div className="flex flex-col items-center gap-1"><Thermometer className="h-4 w-4 text-primary-300" /> Toutes marques PAC</div>
                    </div>
                </div>
            </section>

            {/* INTRO + CITY INFO BAR */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{content.introTitle}</h2>
                            <div className="prose prose-lg prose-slate max-w-none">
                                <p>{content.introParagraph}</p>
                            </div>
                        </div>
                        <div>
                            <CityInfoBar
                                cityName={city.name}
                                zip={city.zip}
                                departmentName={city.department_name}
                                departmentCode={city.department_code}
                                population={city.population}
                                nbTechniciensRge={nbRge}
                                prixMin={prixMin}
                                prixMax={prixMax}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PRIX TABLE */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4 text-center">Prix entretien PAC à {city.name} — Tarifs 2026</h2>
                    <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto text-sm">{content.pricingContext}</p>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden text-sm">
                            <thead>
                                <tr className="bg-primary-800 text-white">
                                    <th className="text-left py-3 px-4 font-bold">Type de PAC</th>
                                    <th className="text-center py-3 px-4 font-bold">Puissance</th>
                                    <th className="text-center py-3 px-4 font-bold">🔧 Ponctuel</th>
                                    <th className="text-center py-3 px-4 font-bold">📋 Contrat/an</th>
                                </tr>
                            </thead>
                            <tbody>
                                {priceTable.map((row, i) => (
                                    <tr key={row.type} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-primary-50/50 transition-colors`}>
                                        <td className="py-3 px-4 font-bold text-slate-900">{row.type}</td>
                                        <td className="py-3 px-4 text-center text-slate-500 text-xs">{row.puissance}</td>
                                        <td className="py-3 px-4 text-center"><span className="font-black text-accent-600 font-mono">{row.ponctuel}€</span></td>
                                        <td className="py-3 px-4 text-center"><span className="font-black text-primary-700 font-mono">{row.contrat}€</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-4">* Prix indicatifs TTC pour {city.name}. Tarif final sur devis selon le technicien et le modèle de PAC.</p>
                </div>
            </section>

            {/* 12 POINTS CHECKLIST */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <EntretienChecklist />
                </div>
            </section>

            {/* CONTRAT COMPARATOR */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <ContratComparator
                        cityName={city.name}
                        prixMin={prixMin}
                        prixMax={prixMax}
                        budgetMoyen={budgetMoyen}
                    />
                </div>
            </section>

            {/* REGLEMENTATION */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <ReglementationBox />
                </div>
            </section>

            {/* CARTE + INFOS LOCALES */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-primary-500" /> Zone d&apos;intervention — {city.name} ({city.zip})
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <CityMap cityName={city.name} zip={city.zip} departmentName={city.department_name} />
                        <div>
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6">
                                <h3 className="font-bold text-slate-900 mb-3">📍 Informations d&apos;intervention</h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">→</span> Intervention possible sur tout le territoire de {city.name} et communes limitrophes</li>
                                    <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">→</span> {nbRge} techniciens certifiés RGE dans le {city.department_name}</li>
                                    <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">→</span> Délai standard : rendez-vous sous 48h à 2 semaines</li>
                                    <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">→</span> Durée de l&apos;intervention : 1h30 à 2h30 selon le type de PAC</li>
                                </ul>
                            </div>
                            {content.logistique && (
                                <div className="bg-primary-900 text-white rounded-2xl p-6">
                                    <h3 className="font-bold mb-2">🔧 Logistique locale</h3>
                                    <p className="text-primary-200 text-sm leading-relaxed">{content.logistique}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTEXTE RÉGIONAL */}
            {content.regionContext && (
                <section className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Info className="h-6 w-6 text-primary-500" /> Entretien PAC en {city.region}
                        </h2>
                        <div className="prose prose-sm prose-slate max-w-none">
                            <p>{content.regionContext}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* CONTEXTE DÉPARTEMENT */}
            {content.departmentContext && (
                <section className="py-12 bg-primary-50 border-y border-primary-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Techniciens PAC certifiés dans le {city.department_name}</h2>
                        <p className="text-slate-700 leading-relaxed">{content.departmentContext}</p>
                    </div>
                </section>
            )}

            {/* CONSEILS CLIMAT + PRATIQUE */}
            <section className="py-12 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <Lightbulb className="h-8 w-8 text-primary-500 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Conseil climat</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{content.climateAdvice}</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">💡 Conseils pratiques</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{content.conseilPratique}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PERFORMANCE NOTE */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 flex items-start gap-4">
                        <BarChart3 className="h-8 w-8 text-primary-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">📊 Performance PAC dans votre zone</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">{content.performanceNote}</p>
                            <p className="text-xs text-slate-500 mt-2">Saison haute d&apos;entretien dans votre zone : <strong>{content.saisonHaute}</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Questions fréquentes — Entretien PAC {city.name}</h2>
                    <Accordion type="single" collapsible className="bg-white border border-slate-200 rounded-2xl p-6">
                        {content.faqItems.map((faq, i) => (
                            <AccordionItem key={i} value={String(i)}>
                                <AccordionTrigger className="text-base font-bold text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* GUIDES */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary-500" /> Nos guides pour votre PAC</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { href: "/guides/prix-entretien-pac-tarifs", label: "Prix entretien PAC", desc: "Tarifs 2026 détaillés" },
                            { href: "/guides/entretien-obligatoire-pac-loi-decret-2020", label: "Obligation légale", desc: "Décret juillet 2020" },
                            { href: "/guides/12-points-verification-entretien-pac", label: "12 points de contrôle", desc: "Check-list complète" },
                            { href: "/guides/choisir-technicien-pac-certifie-rge", label: "Choisir un technicien", desc: "Guide RGE" },
                        ].map(g => (
                            <Link key={g.href} href={g.href} className="bg-slate-50 border border-slate-200 p-5 rounded-xl hover:shadow-md hover:border-primary-200 transition-all group">
                                <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary-600 transition-colors">{g.label}</h3>
                                <p className="text-xs text-slate-500 mt-1">{g.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* MARQUES */}
            <section className="py-12 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Wrench className="h-5 w-5 text-primary-500" /> Entretien par marque</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { name: "Daikin", slug: "daikin" },
                            { name: "Atlantic", slug: "atlantic" },
                            { name: "Mitsubishi", slug: "mitsubishi-electric" },
                            { name: "Panasonic", slug: "panasonic" },
                            { name: "Hitachi", slug: "hitachi" },
                            { name: "Toshiba", slug: "toshiba" },
                            { name: "De Dietrich", slug: "de-dietrich" },
                            { name: "Saunier Duval", slug: "saunier-duval" },
                        ].map(b => (
                            <Link key={b.slug} href={`/marques/${b.slug}`} className="bg-white border border-slate-200 p-3 rounded-xl hover:border-primary-400 hover:shadow-sm transition-all text-center">
                                <span className="text-sm font-semibold text-slate-700 hover:text-primary-700">{b.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEARBY CITIES */}
            {nearbyCities.length > 0 && (
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-2">
                            <MapPin className="h-6 w-6 text-primary-500" /> Entretien PAC près de {city.name}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {nearbyCities.map((c) => (
                                <Link key={c.slug} href={`/entretien-pac/${c.slug}`} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-primary-500 hover:shadow-md transition-all group">
                                    <span className="font-medium text-slate-700 group-hover:text-primary-700 text-sm">{c.name}</span>
                                    <span className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded">{c.zip}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA FINAL */}
            <section className="py-16 bg-primary-50 text-center border-t border-primary-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Besoin d&apos;un entretien PAC à {city.name} ?</h2>
                    <p className="text-lg text-primary-800 mb-8">Obtenez votre devis gratuit en 2 minutes. Comparez les tarifs des techniciens certifiés RGE à {city.name}.</p>
                    <Link href="/devis"><Button size="xl" variant="accent" className="shadow-xl text-xl px-12">Devis Gratuit</Button></Link>
                </div>
            </section>
        </div>
    );
}
