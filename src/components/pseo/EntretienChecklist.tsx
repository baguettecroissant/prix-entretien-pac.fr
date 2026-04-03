import { CheckCircle } from "lucide-react";

const CHECKLIST_ITEMS = [
    { label: "Vérification du circuit frigorifique", detail: "Pression, température, étanchéité" },
    { label: "Contrôle de la charge en fluide", detail: "R32, R410A ou R407C selon le modèle" },
    { label: "Inspection du compresseur", detail: "Bruit, vibrations, consommation électrique" },
    { label: "Contrôle du détendeur", detail: "Régulation du débit de fluide" },
    { label: "Nettoyage de l'évaporateur", detail: "Échangeur extérieur : poussière, feuilles, pollen" },
    { label: "Nettoyage du condenseur", detail: "Échangeur intérieur : tartre, calcaire" },
    { label: "Vérification électrique", detail: "Connexions, isolants, protection différentielle" },
    { label: "Test du cycle de dégivrage", detail: "Fonctionnement automatique par grand froid" },
    { label: "Mesure du COP", detail: "Coefficient de performance en conditions réelles" },
    { label: "Nettoyage des filtres", detail: "Filtres à air, à eau, anti-légionellose" },
    { label: "Évacuation des condensats", detail: "Vérification du siphon et de l'écoulement" },
    { label: "Test des sécurités", detail: "Pressostat, klixon, soupape de décharge" },
];

export function EntretienChecklist() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-primary-800 px-6 py-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    ✅ Les 12 points de contrôle réglementaires
                </h3>
                <p className="text-primary-200 text-sm mt-1">Vérifications obligatoires lors de chaque entretien</p>
            </div>
            <div className="p-6">
                <div className="grid md:grid-cols-2 gap-3">
                    {CHECKLIST_ITEMS.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-primary-50 transition-colors">
                            <CheckCircle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                            <div>
                                <div className="text-sm font-bold text-slate-900">{item.label}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{item.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
