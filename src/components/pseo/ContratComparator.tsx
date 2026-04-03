import { Check, X } from "lucide-react";

interface ContratComparatorProps {
    cityName: string;
    prixMin: number;
    prixMax: number;
    budgetMoyen: number;
}

export function ContratComparator({ cityName, prixMin, prixMax, budgetMoyen }: ContratComparatorProps) {
    const contrats = [
        {
            type: "Ponctuel",
            prix: `${prixMin}€ — ${prixMax}€`,
            color: "border-slate-300",
            headerBg: "bg-slate-100",
            headerText: "text-slate-700",
            features: [
                { label: "Visite d'entretien annuelle", included: true },
                { label: "Rapport d'intervention", included: true },
                { label: "Priorité dépannage", included: false },
                { label: "Pièces incluses", included: false },
                { label: "Suivi connecté", included: false },
                { label: "Garantie constructeur", included: false },
            ],
            cta: "Sur devis",
        },
        {
            type: "Contrat Annuel",
            prix: `${Math.round(budgetMoyen * 0.85)}€ — ${budgetMoyen}€/an`,
            color: "border-primary-500 ring-2 ring-primary-100",
            headerBg: "bg-primary-700",
            headerText: "text-white",
            badge: "Recommandé",
            features: [
                { label: "Visite d'entretien annuelle", included: true },
                { label: "Rapport d'intervention", included: true },
                { label: "Priorité dépannage 24-48h", included: true },
                { label: "Main d'œuvre dépannage incluse", included: true },
                { label: "Suivi connecté", included: false },
                { label: "Garantie étendue", included: false },
            ],
            cta: "Meilleur rapport qualité-prix",
        },
        {
            type: "Premium",
            prix: `${Math.round(budgetMoyen * 1.5)}€ — ${Math.round(budgetMoyen * 1.9)}€/an`,
            color: "border-accent-300",
            headerBg: "bg-accent-500",
            headerText: "text-white",
            features: [
                { label: "2 visites d'entretien par an", included: true },
                { label: "Rapport d'intervention détaillé", included: true },
                { label: "Dépannage prioritaire 4h", included: true },
                { label: "Pièces d'usure incluses", included: true },
                { label: "Télésurveillance COP", included: true },
                { label: "Garantie pièces étendue", included: true },
            ],
            cta: "Tranquillité maximale",
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 text-center">
                Contrats d&apos;entretien PAC à {cityName}
            </h2>
            <p className="text-center text-slate-500 text-sm mb-8 max-w-2xl mx-auto">
                Comparez les 3 niveaux de contrat d&apos;entretien disponibles auprès des techniciens certifiés de votre secteur.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
                {contrats.map((c) => (
                    <div key={c.type} className={`bg-white border-2 ${c.color} rounded-2xl overflow-hidden relative`}>
                        {c.badge && (
                            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-b-lg">
                                {c.badge}
                            </div>
                        )}
                        <div className={`${c.headerBg} ${c.headerText} p-5 text-center ${c.badge ? 'pt-8' : ''}`}>
                            <div className="text-sm font-semibold opacity-80">{c.type}</div>
                            <div className="text-xl font-black mt-1 font-mono">{c.prix}</div>
                        </div>
                        <div className="p-5 space-y-3">
                            {c.features.map((f, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                    {f.included ? (
                                        <Check className="h-4 w-4 text-primary-600 shrink-0" />
                                    ) : (
                                        <X className="h-4 w-4 text-slate-300 shrink-0" />
                                    )}
                                    <span className={f.included ? "text-slate-700" : "text-slate-400"}>{f.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="px-5 pb-5">
                            <div className={`text-center text-xs font-semibold py-2 rounded-lg ${c.badge ? 'bg-primary-50 text-primary-700' : 'bg-slate-50 text-slate-500'}`}>
                                {c.cta}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
