import { DepartmentInfo } from "@/types";
import Link from "next/link";
import { Search } from "lucide-react";

interface DepartmentCitiesProps {
    departmentName: string;
    departmentCode: string;
    cities: { name: string; slug: string; zip: string; population?: number }[];
}

export function DepartmentCities({ departmentName, departmentCode, cities }: DepartmentCitiesProps) {
    const topCities = [...cities].sort((a, b) => (b.population || 0) - (a.population || 0)).slice(0, 20);
    const allCitiesSorted = [...cities].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="-mt-16 relative z-10">
            {/* Top cities */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary-500" />
                    Principales villes — {departmentName} ({departmentCode})
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {topCities.map(city => (
                        <Link
                            key={city.slug}
                            href={`/entretien-pac/${city.slug}`}
                            className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all group"
                        >
                            <span className="text-sm font-medium text-slate-700 group-hover:text-primary-700 truncate">{city.name}</span>
                            <span className="text-xs text-slate-400 font-mono ml-2 shrink-0">{city.zip}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* All cities */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                    Toutes les communes — {departmentName} ({allCitiesSorted.length} villes)
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {allCitiesSorted.map(city => (
                        <Link
                            key={city.slug}
                            href={`/entretien-pac/${city.slug}`}
                            className="text-xs text-slate-600 hover:text-primary-600 hover:underline py-1 truncate"
                        >
                            {city.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
