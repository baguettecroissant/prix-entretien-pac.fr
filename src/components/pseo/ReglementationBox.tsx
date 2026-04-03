import { AlertTriangle } from "lucide-react";

export function ReglementationBox() {
    return (
        <div className="bg-accent-50 border-2 border-accent-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                        ⚖️ Obligation légale — Décret du 29 juillet 2020
                    </h3>
                    <div className="prose prose-sm text-slate-700 space-y-2">
                        <p>
                            <strong>L&apos;entretien des pompes à chaleur est obligatoire depuis le 29 juillet 2020</strong> pour tout équipement dont la puissance nominale est comprise entre 4 kW et 70 kW (décret n°2020-912).
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Fréquence : <strong>au minimum tous les 2 ans</strong></li>
                            <li>Par un technicien disposant d&apos;une <strong>attestation de capacité</strong> pour la manipulation des fluides frigorigènes</li>
                            <li>Le technicien doit remettre un <strong>rapport d&apos;entretien</strong> au commanditaire dans un délai de 15 jours</li>
                            <li>Le rapport doit être <strong>conservé pendant au moins 3 ans</strong></li>
                            <li>En cas de contrôle, l&apos;absence d&apos;entretien peut entraîner la <strong>perte de garantie constructeur</strong></li>
                        </ul>
                        <p className="text-xs text-slate-500 mt-3">
                            Référence : Décret n°2020-912 du 28 juillet 2020 relatif à l&apos;inspection et à l&apos;entretien des chaudières, des systèmes de chauffage et des systèmes de climatisation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
