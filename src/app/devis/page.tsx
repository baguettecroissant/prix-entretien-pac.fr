import { Metadata } from "next";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { CheckCircle, Clock, Shield, ArrowRight, Phone, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Devis Entretien PAC Gratuit — Comparez les Prix 2026",
    description: "Obtenez un devis gratuit pour l'entretien de votre pompe à chaleur. Comparez les tarifs des techniciens certifiés RGE. Sans engagement.",
    alternates: { canonical: "https://www.prix-entretien-pac.fr/devis" },
};

export default function DevisPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        Devis <span className="text-primary-300">Entretien PAC</span> Gratuit
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Comparez les tarifs des techniciens certifiés RGE près de chez vous. Réponse sous 48h, sans engagement.
                    </p>
                </div>
            </section>

            <section className="bg-slate-800 py-3 border-b border-slate-700">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-3 text-slate-200 text-xs font-semibold text-center">
                        <div className="flex items-center justify-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-green-400" /> 100% Gratuit</div>
                        <div className="flex items-center justify-center gap-1"><Clock className="h-3.5 w-3.5 text-primary-400" /> Réponse 48h</div>
                        <div className="flex items-center justify-center gap-1"><Shield className="h-3.5 w-3.5 text-blue-400" /> RGE Certifiés</div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid lg:grid-cols-3 gap-10 items-start">

                        {/* WIDGET */}
                        <div className="lg:col-span-2">
                            <ViteUnDevisWidget />
                        </div>

                        {/* SIDEBAR */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                <h3 className="font-extrabold text-slate-900 mb-5 text-lg">Nos garanties</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-100 p-1.5 rounded-lg shrink-0"><CheckCircle className="h-5 w-5 text-green-600" /></div>
                                        <div><strong className="block text-slate-900 text-sm">100% Gratuit</strong><span className="text-xs text-slate-500">Sans engagement ni frais cachés.</span></div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-primary-100 p-1.5 rounded-lg shrink-0"><Clock className="h-5 w-5 text-primary-600" /></div>
                                        <div><strong className="block text-slate-900 text-sm">Réponse sous 48h</strong><span className="text-xs text-slate-500">Jusqu&apos;à 3 devis comparatifs.</span></div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-accent-100 p-1.5 rounded-lg shrink-0"><Award className="h-5 w-5 text-accent-600" /></div>
                                        <div><strong className="block text-slate-900 text-sm">Techniciens RGE</strong><span className="text-xs text-slate-500">Certifiés pour la manipulation des fluides frigorigènes.</span></div>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 p-6 rounded-2xl text-center shadow-lg">
                                <div className="relative z-10">
                                    <div className="text-4xl font-black text-white mb-1">120€ — 350€</div>
                                    <div className="text-primary-200 font-medium text-sm">Fourchette prix entretien PAC 2026</div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2 text-sm">📚 Besoin d&apos;aide ?</h3>
                                <ul className="space-y-1.5 text-sm">
                                    <li><Link href="/guides/prix-entretien-pac-tarifs" className="text-primary-600 hover:underline font-medium">→ Grille tarifaire 2026</Link></li>
                                    <li><Link href="/guides/contrat-entretien-pac-guide-complet" className="text-primary-600 hover:underline font-medium">→ Contrat : lequel choisir ?</Link></li>
                                    <li><Link href="/faq" className="text-primary-600 hover:underline font-medium">→ Questions fréquentes</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi demander un devis ?</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            { icon: "✅", title: "Gratuit", desc: "Aucun frais pour la mise en relation avec des techniciens certifiés de votre secteur." },
                            { icon: "⚡", title: "Rapide", desc: "Recevez jusqu'à 3 devis sous 48h. Comparez les prix et les services inclus." },
                            { icon: "🔒", title: "Sans engagement", desc: "Vous êtes libre d'accepter ou de refuser les propositions. Aucune obligation." },
                        ].map(b => (
                            <div key={b.title} className="bg-white p-5 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{b.icon} {b.title}</h3>
                                <p className="text-sm text-slate-500">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
