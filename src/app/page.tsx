import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Thermometer, ArrowRight, Shield, Award, Clock, CheckCircle, BookOpen, MapPin, Wrench } from "lucide-react";
import { getAllGuides } from "@/lib/guides-data";
import { getAllBrands } from "@/lib/brands-data";

const popularCities = [
    { name: "Paris", slug: "paris-75000", pop: "2.1M" },
    { name: "Lyon", slug: "lyon-69000", pop: "522k" },
    { name: "Bordeaux", slug: "bordeaux-33000", pop: "260k" },
    { name: "Toulouse", slug: "toulouse-31000", pop: "504k" },
    { name: "Nantes", slug: "nantes-44000", pop: "320k" },
    { name: "Marseille", slug: "marseille-13000", pop: "873k" },
    { name: "Strasbourg", slug: "strasbourg-67000", pop: "287k" },
    { name: "Lille", slug: "lille-59000", pop: "236k" },
];

const checklistPreview = [
    "Circuit frigorifique", "Compresseur", "Détendeur", "Évaporateur",
    "Condenseur", "Cycle dégivrage", "COP", "Filtres",
    "Condensats", "Sécurités", "Électrique", "Débit d'eau",
];

export default function HomePage() {
    const guides = getAllGuides().slice(0, 4);
    const brands = getAllBrands();

    return (
        <div className="min-h-screen">
            {/* HERO */}
            <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMjBsMjAgMjBNMjAgMjBMMCA0ME0yMCAyMEwyMCAwTTIwIDIwTDQwIDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 border border-accent-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
                        <Shield className="h-4 w-4" /> Obligation légale depuis le décret de juillet 2020
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-4xl mx-auto">
                        Entretien Pompe à Chaleur<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100">Prix & Techniciens 2026</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Comparez les tarifs d&apos;entretien PAC de 120€ à 350€. Trouvez un technicien certifié RGE près de chez vous. Devis gratuit et sans engagement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/devis"><Button size="xl" variant="accent" className="shadow-2xl">Devis Gratuit <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                        <Link href="/annuaire"><Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">Trouver un technicien</Button></Link>
                    </div>
                </div>
            </section>

            {/* TRUST BAR */}
            <section className="bg-white py-6 border-b border-slate-100 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { icon: Award, label: "Techniciens RGE", detail: "Certifiés et qualifiés" },
                            { icon: Clock, label: "RDV sous 48h", detail: "Partout en France" },
                            { icon: Shield, label: "Décret 2020", detail: "Obligation respectée" },
                            { icon: Thermometer, label: "Toutes marques", detail: "Daikin, Atlantic, etc." },
                        ].map((t, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <t.icon className="h-6 w-6 text-primary-600" />
                                <div className="text-sm font-bold text-slate-900">{t.label}</div>
                                <div className="text-xs text-slate-500">{t.detail}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12 POINTS PREVIEW */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-4">Les 12 points de contrôle réglementaires</h2>
                    <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">Chaque entretien de PAC inclut ces vérifications obligatoires pour garantir la performance et la sécurité de votre installation.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {checklistPreview.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                <CheckCircle className="h-4 w-4 text-primary-600 shrink-0" />
                                <span className="text-sm font-medium text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/guides/12-points-verification-entretien-pac" className="text-primary-600 hover:text-primary-700 font-bold text-sm">
                            Voir le détail des 12 points →
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRIX PREVIEW */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">Tarifs Entretien PAC 2026</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { type: "Ponctuel", prix: "120€ — 280€", desc: "Entretien à la demande, sans engagement", color: "border-slate-200" },
                            { type: "Contrat Annuel", prix: "150€ — 220€/an", desc: "Visite annuelle + priorité dépannage", color: "border-primary-500 ring-2 ring-primary-100", badge: "Recommandé" },
                            { type: "Premium", prix: "280€ — 400€/an", desc: "2 visites/an + pièces + télésurveillance", color: "border-accent-200" },
                        ].map(c => (
                            <div key={c.type} className={`bg-white border-2 ${c.color} rounded-2xl p-6 text-center relative`}>
                                {c.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full">{c.badge}</div>}
                                <div className="text-sm font-semibold text-slate-500 mb-2">{c.type}</div>
                                <div className="text-2xl font-black text-slate-900 font-mono mb-3">{c.prix}</div>
                                <p className="text-xs text-slate-500">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/guides/prix-entretien-pac-tarifs" className="text-primary-600 hover:text-primary-700 font-bold text-sm">
                            Voir la grille tarifaire complète →
                        </Link>
                    </div>
                </div>
            </section>

            {/* GUIDES */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10 flex items-center justify-center gap-3">
                        <BookOpen className="h-7 w-7 text-primary-500" /> Guides Pratiques
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {guides.map(g => (
                            <Link key={g.slug} href={`/guides/${g.slug}`} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary-200 transition-all group">
                                <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">{g.category.replace('-', ' ')}</div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors mb-2">{g.title}</h3>
                                <p className="text-sm text-slate-500 line-clamp-2">{g.excerpt}</p>
                                <div className="mt-4 text-sm font-bold text-primary-600 flex items-center gap-1">Lire le guide <ArrowRight className="h-4 w-4" /></div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/guides"><Button variant="outline">Tous les guides</Button></Link>
                    </div>
                </div>
            </section>

            {/* VILLES POPULAIRES */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10 flex items-center justify-center gap-3">
                        <MapPin className="h-7 w-7 text-primary-500" /> Entretien PAC par Ville
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {popularCities.map(c => (
                            <Link key={c.slug} href={`/entretien-pac/${c.slug}`} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-primary-400 hover:shadow-md transition-all group text-center">
                                <div className="font-bold text-slate-900 group-hover:text-primary-700">{c.name}</div>
                                <div className="text-xs text-slate-400 mt-1">{c.pop} hab.</div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/annuaire"><Button variant="outline">Tous les départements</Button></Link>
                    </div>
                </div>
            </section>

            {/* MARQUES */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10 flex items-center justify-center gap-3">
                        <Wrench className="h-7 w-7 text-primary-500" /> Entretien par Marque de PAC
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {brands.map(b => (
                            <Link key={b.slug} href={`/marques/${b.slug}`} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-md transition-all group text-center">
                                <div className="font-bold text-slate-900 group-hover:text-primary-700">{b.name}</div>
                                <div className="text-xs text-slate-500 mt-1">{b.specialite}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-4xl font-black mb-6">Votre PAC mérite un entretien professionnel</h2>
                    <p className="text-xl text-primary-200 mb-10">Obtenez votre devis gratuit en 2 minutes. Comparez les tarifs des techniciens certifiés RGE près de chez vous.</p>
                    <Link href="/devis"><Button size="xl" variant="accent" className="shadow-2xl text-xl px-12">Devis Gratuit <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                </div>
            </section>
        </div>
    );
}
