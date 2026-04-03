// Content Engine — Moteur de génération de contenu unique pour l'entretien PAC
// Déterministe : même slug → même contenu (hash-based variant selection)

import { City, FaqItem } from "@/types";
import { regionsContent } from "./db/content/regions";
import { departmentsContent } from "./db/content/departments";
import { getClimateZone } from "./db/content/climate-zones";
import { getPopTier, populationTiers } from "./db/content/population-tiers";

export interface PageContent {
    introTitle: string;
    introParagraph: string;
    regionContext: string;
    departmentContext: string;
    climateAdvice: string;
    entretienAdvice: string;
    conseilPratique: string;
    logistique: string;
    contratConseil: string;
    performanceNote: string;
    saisonHaute: string;
    faqItems: FaqItem[];
    pricingContext: string;
}

// Deterministic hash — same slug always gives same variant
function hashSlug(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        const char = slug.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash);
}

const introVariants = [
    (city: string) => `Depuis le 29 juillet 2020, l'entretien bisannuel est obligatoire pour toutes les pompes à chaleur de plus de 4 kW installées à ${city} et partout en France`,
    (city: string) => `Un entretien régulier de votre pompe à chaleur à ${city} maintient un COP optimal et réduit votre facture de chauffage de 15 à 30%`,
    (city: string) => `Les techniciens qualifiés intervenant à ${city} vérifient le circuit frigorifique, le compresseur et l'échangeur pour garantir les performances de votre PAC`,
    (city: string) => `Un contrat d'entretien annuel à ${city} vous protège en cas de panne et prolonge la durée de vie de votre pompe à chaleur de 5 à 10 ans`,
];

export function generateCityContent(city: City): PageContent {
    const tier = getPopTier(city.population);
    const tierData = populationTiers[tier];
    const regionData = regionsContent[city.region];
    const deptData = departmentsContent[city.department_code];
    const climateZone = getClimateZone(city.coordinates.lat, city.coordinates.lng);
    const hash = hashSlug(city.slug);

    const pop = city.population || 0;
    const popStr = pop > 0 ? ` (${pop.toLocaleString('fr-FR')} habitants)` : '';
    const dept = city.department_name;
    const deptInfo = city.department_info;
    const prixMin = deptInfo?.prix_min || 120;
    const prixMax = deptInfo?.prix_max || 280;

    // H1 title
    const introTitle = `Entretien pompe à chaleur à ${city.name}${popStr} — Professionnels certifiés ${city.zip}`;

    // Intro paragraph — deterministic variant selection
    const variantIndex = hash % introVariants.length;
    const variantText = introVariants[variantIndex](city.name);
    const introParagraph = `Votre pompe à chaleur à ${city.name} nécessite un entretien régulier ? ${variantText}. Les chauffagistes certifiés en ${dept} facturent l'entretien annuel entre ${prixMin}€ et ${prixMax}€ selon le type de PAC et le contrat choisi.`;

    // Region context
    const regionContext = regionData
        ? `${regionData.contexte} ${regionData.adoption_pac}`
        : '';

    // Department context
    const departmentContext = deptData
        ? `Dans le ${dept} (${city.department_code}), la préfecture de ${deptData.prefecture} centralise les informations sur les techniciens agréés. Le département compte ${deptData.nb_rge} techniciens certifiés RGE pour l'entretien de pompes à chaleur. ${deptData.specificite}.`
        : '';

    // Climate advice
    const climateAdvice = climateZone.pac_conseil;
    const entretienAdvice = climateZone.entretien_conseil;
    const performanceNote = climateZone.performance_note;
    const saisonHaute = climateZone.saison_haute;

    // Population tier content
    const conseilPratique = tierData.conseil_pratique;
    const logistique = tierData.logistique;
    const contratConseil = tierData.contrat_conseil;

    // FAQ
    const faqItems = buildFaq(city, tier, prixMin, prixMax, saisonHaute);

    // Pricing context
    const pricingContext = buildPricingContext(city, tier, prixMin, prixMax);

    return {
        introTitle,
        introParagraph,
        regionContext,
        departmentContext,
        climateAdvice,
        entretienAdvice,
        conseilPratique,
        logistique,
        contratConseil,
        performanceNote,
        saisonHaute,
        faqItems,
        pricingContext,
    };
}

function buildPricingContext(city: City, tier: string, prixMin: number, prixMax: number): string {
    const pop = city.population || 0;
    const dept = city.department_name;
    const budgetMoyen = city.department_info?.budget_moyen || 190;

    if (pop > 200000) {
        return `À ${city.name}, les tarifs d'entretien PAC sont 10 à 15% supérieurs à la moyenne nationale en raison de la forte demande et des coûts d'exploitation métropolitains. L'entretien annuel se situe entre ${prixMin}€ et ${prixMax}€, avec un budget moyen de ${budgetMoyen}€. La forte concurrence entre techniciens permet néanmoins d'obtenir des devis compétitifs en comparant au moins 3 prestataires.`;
    } else if (pop > 50000) {
        return `À ${city.name}, les prix d'entretien PAC se situent dans la fourchette haute du département du ${dept}, entre ${prixMin}€ et ${prixMax}€. Le budget moyen constaté est de ${budgetMoyen}€ pour un entretien annuel complet incluant les 12 points de contrôle réglementaires et la vérification du circuit frigorifique.`;
    } else if (pop > 10000) {
        return `À ${city.name}, les tarifs d'entretien PAC sont dans la moyenne du ${dept} : entre ${prixMin}€ et ${prixMax}€. Le budget moyen est de ${budgetMoyen}€. La proximité de techniciens locaux et une concurrence saine maintiennent des prix compétitifs.`;
    } else if (pop > 2000) {
        return `À ${city.name}, les prix d'entretien PAC bénéficient de la compétitivité des techniciens du ${dept}. Comptez entre ${prixMin}€ et ${prixMax}€ pour un entretien annuel complet. Le budget moyen est de ${budgetMoyen}€, incluant le déplacement, l'inspection et le rapport.`;
    } else {
        return `À ${city.name}, les tarifs d'entretien PAC incluent un poste de déplacement plus important en raison de l'éloignement. Comptez entre ${prixMin}€ et ${prixMax}€ tout compris. Un contrat d'entretien annuel permet de lisser le coût et de garantir un créneau prioritaire.`;
    }
}

function buildFaq(city: City, tier: string, prixMin: number, prixMax: number, saisonHaute: string): FaqItem[] {
    const pop = city.population || 0;
    const dept = city.department_name;
    const budgetMoyen = city.department_info?.budget_moyen || 190;
    const nbRge = city.department_info?.nb_techniciens_rge || 25;

    return [
        {
            question: `Combien coûte l'entretien d'une pompe à chaleur à ${city.name} ?`,
            answer: `L'entretien d'une pompe à chaleur à ${city.name} coûte entre ${prixMin}€ et ${prixMax}€ selon le type de PAC (air/eau, air/air, géothermie) et le niveau de contrat choisi. Le budget moyen constaté dans le ${dept} est de ${budgetMoyen}€ pour un entretien annuel complet incluant les 12 points de contrôle réglementaires, la vérification du circuit frigorifique et le nettoyage des filtres et échangeurs.`
        },
        {
            question: `L'entretien de pompe à chaleur est-il obligatoire à ${city.name} ?`,
            answer: `Oui, depuis le décret du 29 juillet 2020, l'entretien des pompes à chaleur de plus de 4 kW est obligatoire tous les 2 ans à ${city.name} comme partout en France. Cet entretien doit être réalisé par un technicien certifié disposant d'une attestation de capacité pour la manipulation des fluides frigorigènes. Le technicien doit vous remettre un rapport d'entretien à conserver. En pratique, un entretien annuel est recommandé pour maintenir les performances optimales de votre PAC.`
        },
        {
            question: `Quand faire entretenir sa PAC à ${city.name} ?`,
            answer: pop > 50000
                ? `À ${city.name}, la période idéale pour l'entretien de votre PAC est de ${saisonHaute}. En grande ville, les créneaux sont disponibles sous 3 à 7 jours. Réservez quand même 2 à 3 semaines à l'avance pour avoir le choix de la date et de l'heure. Un entretien avant la saison de chauffe garantit des performances optimales dès les premiers froids.`
                : `La meilleure période pour l'entretien de votre PAC à ${city.name} est de ${saisonHaute}, avant la mise en route hivernale. Le nombre de techniciens certifiés dans le ${dept} étant de ${nbRge}, les plannings se remplissent vite. Réservez votre créneau 3 à 4 semaines à l'avance pour être servi avant les premiers froids.`
        },
        {
            question: `Comment trouver un technicien PAC certifié RGE à ${city.name} ?`,
            answer: `Le ${dept} compte ${nbRge} techniciens certifiés RGE pour l'entretien de pompes à chaleur. Pour trouver un professionnel fiable à ${city.name}, vérifiez sa certification RGE sur le site france-renov.gouv.fr, demandez son attestation de capacité pour la manipulation des fluides frigorigènes, et comparez au moins 2-3 devis. Les entreprises locales offrent souvent un meilleur rapport qualité-prix que les grands réseaux nationaux.`
        },
        {
            question: `Contrat d'entretien PAC à ${city.name} : est-ce rentable ?`,
            answer: `Oui, le contrat d'entretien annuel est rentable à ${city.name}. Un contrat standard coûte ${Math.round(budgetMoyen * 0.85)}€ à ${budgetMoyen}€/an (soit 15% moins cher que l'entretien ponctuel) et inclut : la visite annuelle complète, la priorité d'intervention en cas de panne (sous 24-48h au lieu d'une semaine), et parfois les petites pièces. Sur une PAC dont la durée de vie est de 15-20 ans, un entretien régulier évite les pannes coûteuses (comptez 500 à 2 000€ pour un compresseur) et maintient un COP optimal.`
        },
        {
            question: `Que vérifie le technicien lors de l'entretien PAC à ${city.name} ?`,
            answer: `L'entretien réglementaire d'une pompe à chaleur à ${city.name} comprend 12 points de contrôle : vérification du circuit frigorifique (pression, température, étanchéité), contrôle de la charge en fluide frigorigène, inspection du compresseur et du détendeur, nettoyage de l'évaporateur et du condenseur, vérification des connexions électriques, test du cycle de dégivrage, contrôle des performances (COP), nettoyage ou remplacement des filtres, vérification de l'évacuation des condensats, test des sécurités, mesure du débit d'eau, et rédaction du rapport d'intervention.`
        },
    ];
}
