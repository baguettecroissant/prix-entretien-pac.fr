import Link from "next/link";
import { Building2, ExternalLink, Users, MapPin, Landmark, Thermometer, Wrench } from "lucide-react";

interface CityInfoBarProps {
    cityName: string;
    zip: string;
    departmentName: string;
    departmentCode: string;
    population?: number;
    nbTechniciensRge?: number;
    prixMin?: number;
    prixMax?: number;
}

const CITY_POPULATION_FALLBACK: Record<string, number> = {
    "Paris": 2133111, "Marseille": 873076, "Lyon": 522250, "Toulouse": 504078,
    "Nice": 342669, "Nantes": 320732, "Montpellier": 299096, "Strasbourg": 287228,
    "Bordeaux": 260958, "Lille": 236234, "Rennes": 222485, "Reims": 182592,
    "Saint-Étienne": 174082, "Toulon": 176198, "Le Havre": 170147, "Grenoble": 158454,
    "Dijon": 160104, "Angers": 157175, "Nîmes": 148236, "Villeurbanne": 155426,
    "Clermont-Ferrand": 147865, "Le Mans": 148169, "Brest": 143902, "Tours": 138588,
    "Amiens": 135501, "Limoges": 132175, "Metz": 120194, "Perpignan": 121875,
    "Besançon": 119163, "Orléans": 116685, "Rouen": 113557, "Caen": 108365,
    "Mulhouse": 108942,
};

function getMairieUrl(cityName: string): string {
    const slug = cityName
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    return `https://www.annuaire-mairie.fr/mairie-${slug}.html`;
}

function formatPopulation(pop: number): string {
    if (pop >= 1000000) return `${(pop / 1000000).toFixed(1)}M`;
    if (pop >= 1000) return `${Math.round(pop / 1000)}k`;
    return `${pop}`;
}

export function CityInfoBar({ cityName, zip, departmentName, departmentCode, population, nbTechniciensRge, prixMin, prixMax }: CityInfoBarProps) {
    const mairieUrl = getMairieUrl(cityName);
    const deptSlug = `${departmentName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${departmentCode}`;
    const effectivePopulation = (population && population > 0) ? population : CITY_POPULATION_FALLBACK[cityName] || 0;

    return (
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-primary-800 px-5 py-3 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary-300" />
                <h3 className="text-sm font-bold text-white">{cityName}</h3>
                <span className="ml-auto text-xs text-primary-200 font-mono">{zip}</span>
            </div>

            <div className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="h-4 w-4 text-primary-600" />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Code postal</div>
                        <div className="font-bold text-slate-900 text-sm">{zip}</div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <Landmark className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Département</div>
                        <Link href={`/annuaire/${deptSlug}`} className="font-bold text-blue-600 hover:text-blue-500 transition-colors text-sm">
                            {departmentName} ({departmentCode})
                        </Link>
                    </div>
                </div>

                {effectivePopulation > 0 && (
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                            <Users className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Population</div>
                            <div className="font-bold text-slate-900 text-sm">{formatPopulation(effectivePopulation)} habitants</div>
                        </div>
                    </div>
                )}

                {prixMin && prixMax && (
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-accent-100 rounded-lg flex items-center justify-center shrink-0">
                            <Thermometer className="h-4 w-4 text-accent-600" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Entretien PAC</div>
                            <div className="font-bold text-accent-600 text-sm font-mono">{prixMin}€ — {prixMax}€</div>
                        </div>
                    </div>
                )}

                {nbTechniciensRge && (
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                            <Wrench className="h-4 w-4 text-teal-600" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Techniciens RGE</div>
                            <div className="font-bold text-slate-900 text-sm">{nbTechniciensRge} certifiés dans le département</div>
                        </div>
                    </div>
                )}

                <a
                    href={mairieUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group p-2 -mx-2 rounded-lg hover:bg-white transition-colors"
                >
                    <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Mairie</div>
                        <div className="font-bold text-purple-600 group-hover:text-purple-500 transition-colors text-sm flex items-center gap-1">
                            Site officiel <ExternalLink className="h-3 w-3" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
