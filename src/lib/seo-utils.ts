import { City, DepartmentInfo } from "@/types";
import citiesData from "@/lib/db/cities.json";
import departmentsData from "@/lib/db/departments-infos.json";

const cities = citiesData as City[];
const departments = departmentsData as DepartmentInfo[];

export function getCityFromSlug(slug: string): City | undefined {
    const city = cities.find(c => c.slug === slug);
    if (!city) return undefined;

    const deptInfo = departments.find(d => d.code === city.department_code);
    return {
        ...city,
        department_info: deptInfo
    };
}

export function getAllCitySlugs(): string[] {
    return cities.map(c => c.slug);
}

export function generateCityMetadata(city: City) {
    const deptInfo = city.department_info;
    const prixMin = deptInfo?.prix_min || 120;
    const prixMax = deptInfo?.prix_max || 280;

    return {
        title: `Entretien PAC à ${city.name} (${city.zip}) — Tarifs & Techniciens 2026`,
        description: `Entretien pompe à chaleur à ${city.name} de ${prixMin}€ à ${prixMax}€. Techniciens certifiés RGE dans le ${city.department_name} (${city.department_code}). Devis gratuit, entretien obligatoire.`,
        alternates: {
            canonical: `https://www.prix-entretien-pac.fr/entretien-pac/${city.slug}`,
        },
    };
}

export function getAllDepartmentCodes(): string[] {
    return departments.map(d => d.code);
}

export function getCitiesByDepartment(departmentCode: string): City[] {
    return cities.filter(c => c.department_code === departmentCode);
}
