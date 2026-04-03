import Link from "next/link";
import { Thermometer } from "lucide-react";

const popularCities = [
    { name: "Paris", slug: "paris-75000" },
    { name: "Lyon", slug: "lyon-69000" },
    { name: "Bordeaux", slug: "bordeaux-33000" },
    { name: "Toulouse", slug: "toulouse-31000" },
    { name: "Nantes", slug: "nantes-44000" },
    { name: "Marseille", slug: "marseille-13000" },
    { name: "Strasbourg", slug: "strasbourg-67000" },
    { name: "Lille", slug: "lille-59000" },
];

const guideLinks = [
    { label: "Prix entretien PAC", href: "/guides/prix-entretien-pac-tarifs" },
    { label: "Loi & obligation", href: "/guides/entretien-obligatoire-pac-loi-decret-2020" },
    { label: "Contrat d'entretien", href: "/guides/contrat-entretien-pac-guide-complet" },
    { label: "12 points de contrôle", href: "/guides/12-points-verification-entretien-pac" },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                                <Thermometer className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-black text-sm">Prix-Entretien-PAC.fr</span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Comparez les prix d&apos;entretien de pompe à chaleur et trouvez un technicien certifié RGE près de chez vous. Devis gratuit et sans engagement.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-4 text-slate-300 uppercase tracking-wider">Guides</h4>
                        <ul className="space-y-2">
                            {guideLinks.map(g => (
                                <li key={g.href}>
                                    <Link href={g.href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                                        {g.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-4 text-slate-300 uppercase tracking-wider">Villes populaires</h4>
                        <ul className="space-y-2">
                            {popularCities.map(c => (
                                <li key={c.slug}>
                                    <Link href={`/entretien-pac/${c.slug}`} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                                        Entretien PAC {c.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-4 text-slate-300 uppercase tracking-wider">Informations</h4>
                        <ul className="space-y-2">
                            <li><Link href="/annuaire" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Annuaire par département</Link></li>
                            <li><Link href="/marques" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Marques de PAC</Link></li>
                            <li><Link href="/faq" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
                            <li><Link href="/devis" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Demander un devis</Link></li>
                            <li><Link href="/mentions-legales" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Mentions légales</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Prix-Entretien-PAC.fr — Tous droits réservés</p>
                    <p className="mt-2 md:mt-0">Comparateur indépendant • Données à titre indicatif</p>
                </div>
            </div>
        </footer>
    );
}
