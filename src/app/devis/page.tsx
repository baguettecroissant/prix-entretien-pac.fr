import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Devis Entretien PAC Gratuit — Comparez les Prix",
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
                        Comparez les tarifs des techniciens certifiés RGE. Réponse sous 48h, sans engagement.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
                        <iframe
                            id="viteundevis-widget"
                            src="https://www.viteundevis.com/widget/2353"
                            width="100%"
                            height="800"
                            style={{ border: 0, minHeight: "700px" }}
                            title="Formulaire de devis entretien pompe à chaleur"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi demander un devis ?</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            { title: "✅ Gratuit", desc: "Aucun frais pour la mise en relation avec des techniciens certifiés de votre secteur." },
                            { title: "⚡ Rapide", desc: "Recevez jusqu'à 3 devis sous 48h. Comparez les prix et les services inclus." },
                            { title: "🔒 Sans engagement", desc: "Vous êtes libre d'accepter ou de refuser les propositions. Aucune obligation." },
                        ].map(b => (
                            <div key={b.title} className="bg-white p-5 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                                <p className="text-sm text-slate-500">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
