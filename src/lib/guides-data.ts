import { GuideArticle } from '@/types';
import { guidesContent } from '@/lib/db/content/guides-content';

export const guidesCategories = {
    'guide-pratique': { label: 'Guides Pratiques', color: 'bg-teal-100 text-teal-700', icon: '📋' },
    'reglementation': { label: 'Réglementation', color: 'bg-orange-100 text-orange-700', icon: '⚖️' },
    'prix': { label: 'Prix & Tarifs', color: 'bg-green-100 text-green-700', icon: '💰' },
    'technique': { label: 'Technique', color: 'bg-blue-100 text-blue-700', icon: '🔧' },
    'conseil-pro': { label: 'Conseils Pro', color: 'bg-purple-100 text-purple-700', icon: '👷' },
};

const guides: Omit<GuideArticle, 'content'>[] = [
    {
        slug: "prix-entretien-pac-tarifs",
        title: "Prix Entretien PAC 2026 : Tarifs au Détail, Contrats et Comparatif",
        metaTitle: "Prix Entretien PAC 2026 : Tarifs Complets par Type de Contrat",
        metaDescription: "Combien coûte l'entretien d'une pompe à chaleur en 2026 ? De 120€ à 350€ selon le type. Comparatif ponctuel vs contrat annuel vs premium. Tous les prix détaillés.",
        excerpt: "Entretien ponctuel, contrat annuel ou premium ? Tous les prix 2026 détaillés selon votre type de PAC, avec les surcoûts cachés à connaître avant de signer.",
        image: "/images/guides/prix-entretien-pac-tarifs.png",
        imageAlt: "Technicien vérifiant une pompe à chaleur avec tableau de prix en arrière-plan",
        category: 'prix',
        publishDate: "2026-01-15",
        updatedDate: "2026-03-20",
        readTime: 12,
        tags: ["prix entretien pac", "tarif pac", "contrat entretien", "devis"],
    },
    {
        slug: "entretien-obligatoire-pac-loi-decret-2020",
        title: "Entretien Obligatoire PAC : Ce que Dit la Loi (Décret Juillet 2020)",
        metaTitle: "Entretien PAC Obligatoire : Décret 2020 Expliqué (Sanctions & Obligations)",
        metaDescription: "Depuis juillet 2020, l'entretien PAC est obligatoire tous les 2 ans pour les +4 kW. Qui est concerné, quelles sanctions, quel technicien ? Le décret décrypté.",
        excerpt: "Le décret du 29 juillet 2020 rend l'entretien de votre PAC obligatoire. Qui est concerné ? Quelles sanctions ? Comment se mettre en conformité ? Tout ce qu'il faut savoir.",
        image: "/images/guides/entretien-obligatoire-pac-loi.png",
        imageAlt: "Document officiel avec marteau de juge symbolisant la réglementation PAC",
        category: 'reglementation',
        publishDate: "2026-01-20",
        updatedDate: "2026-03-18",
        readTime: 10,
        tags: ["décret 2020", "obligation entretien", "loi pac", "réglementation"],
    },
    {
        slug: "contrat-entretien-pac-guide-complet",
        title: "Contrat Entretien PAC : Que Contient-il et Combien Ça Coûte ?",
        metaTitle: "Contrat Entretien PAC 2026 : Contenu, Prix & Comparatif (3 Niveaux)",
        metaDescription: "Que contient un contrat d'entretien PAC ? Basique (130€), standard (200€) ou premium (350€). Points inclus, exclusions, durée d'engagement. Guide complet.",
        excerpt: "Basique, standard ou premium ? Décryptage complet des 3 niveaux de contrat d'entretien PAC : ce qui est inclus, ce qui ne l'est pas, et lequel choisir selon votre situation.",
        image: "/images/guides/contrat-entretien-pac.png",
        imageAlt: "Main signant un contrat d'entretien avec une pompe à chaleur visible en arrière-plan",
        category: 'guide-pratique',
        publishDate: "2026-02-01",
        updatedDate: "2026-03-15",
        readTime: 14,
        tags: ["contrat entretien", "pac maintenance", "contrat annuel", "comparatif"],
    },
    {
        slug: "12-points-verification-entretien-pac",
        title: "Les 12 Points Vérifiés Lors d'un Entretien de Pompe à Chaleur",
        metaTitle: "Entretien PAC : Les 12 Points de Contrôle Vérifiés par le Technicien",
        metaDescription: "Circuit frigorifique, compresseur, détendeur, filtres, COP... Les 12 points réglementaires vérifiés lors de l'entretien de votre PAC. Check-list complète.",
        excerpt: "Circuit frigorifique, compresseur, dégivrage, COP... Votre technicien doit vérifier ces 12 points réglementaires. Découvrez la check-list complète pour contrôler votre entretien.",
        image: "/images/guides/12-points-verification-pac.png",
        imageAlt: "Technicien avec checklist inspectant les composants d'une pompe à chaleur",
        category: 'technique',
        publishDate: "2026-02-10",
        updatedDate: "2026-03-10",
        readTime: 15,
        tags: ["12 points", "check-list", "vérification pac", "contrôle technique"],
    },
    {
        slug: "signes-pac-besoin-entretien-urgent",
        title: "5 Signes que Votre PAC a Besoin d'un Entretien Urgent",
        metaTitle: "PAC en Panne ? 5 Signes d'Alerte pour un Entretien Urgent",
        metaDescription: "Bruit anormal, hausse de facture, givre, eau qui coule, chauffage insuffisant : les 5 signes d'alerte qui indiquent que votre PAC a besoin d'un entretien immédiat.",
        excerpt: "Bruit suspect, facture qui grimpe, givre persistant ? Ces 5 signaux d'alerte indiquent que votre pompe à chaleur a besoin d'une intervention rapide. N'attendez pas la panne.",
        image: "/images/guides/signes-pac-entretien-urgent.png",
        imageAlt: "Pompe à chaleur avec voyant d'alerte rouge clignotant",
        category: 'conseil-pro',
        publishDate: "2026-02-20",
        updatedDate: "2026-03-22",
        readTime: 8,
        tags: ["panne pac", "alerte", "entretien urgent", "signes"],
    },
    {
        slug: "entretien-pac-air-eau-vs-air-air",
        title: "Entretien PAC Air/Eau vs Air/Air : Quelles Différences de Prix et Protocole ?",
        metaTitle: "Entretien PAC Air/Eau vs Air/Air : Différences de Prix & Protocole",
        metaDescription: "PAC air/eau ou air/air : l'entretien n'est pas le même. Différences de protocole, de prix (120-250€ vs 80-150€) et de fréquence. Comparatif complet.",
        excerpt: "Air/eau ou air/air : le protocole d'entretien diffère. Prix, fréquence, points de contrôle spécifiques... Tout ce qui change selon votre type de pompe à chaleur.",
        image: "/images/guides/entretien-pac-air-eau-vs-air-air.png",
        imageAlt: "Deux types de pompes à chaleur côte à côte : air/eau et air/air",
        category: 'technique',
        publishDate: "2026-03-01",
        updatedDate: "2026-03-24",
        readTime: 11,
        tags: ["air eau", "air air", "comparatif pac", "différences"],
    },
    {
        slug: "fluide-frigorigene-r32-reglementation",
        title: "Fluide Frigorigène R32 : Manipulation, Recharge et Réglementation F-Gas",
        metaTitle: "Fluide R32 PAC : Recharge, Manipulation & Réglementation F-Gas 2026",
        metaDescription: "Le R32 remplace le R410A dans les PAC récentes. Règles de manipulation, coût de recharge (150-400€), réglementation F-Gas, attestation de capacité. Guide complet.",
        excerpt: "Le R32 équipe la majorité des PAC neuves. Recharge, manipulation réglementée, coût (150-400€), attestation de capacité : tout savoir sur ce fluide frigorigène de nouvelle génération.",
        image: "/images/guides/fluide-frigorigene-r32.png",
        imageAlt: "Bouteille de fluide frigorigène R32 avec manomètre et technicien",
        category: 'reglementation',
        publishDate: "2026-03-10",
        updatedDate: "2026-03-25",
        readTime: 13,
        tags: ["r32", "fluide frigorigène", "f-gas", "recharge", "réglementation"],
    },
    {
        slug: "choisir-technicien-pac-certifie-rge",
        title: "Comment Choisir un Technicien PAC Certifié RGE : Le Guide Complet",
        metaTitle: "Technicien PAC Certifié RGE : Comment le Choisir (Guide 2026)",
        metaDescription: "Comment vérifier la certification RGE d'un technicien PAC ? Attestation de capacité, qualifications, avis clients, devis. Le guide pour ne pas se tromper.",
        excerpt: "RGE, attestation de capacité, QualiPAC, Qualibat... Comment s'y retrouver dans les certifications et choisir un technicien fiable pour l'entretien de votre pompe à chaleur ?",
        image: "/images/guides/choisir-technicien-pac-rge.png",
        imageAlt: "Technicien certifié RGE avec badge d'identification devant une pompe à chaleur",
        category: 'conseil-pro',
        publishDate: "2026-03-20",
        updatedDate: "2026-03-28",
        readTime: 10,
        tags: ["technicien rge", "certification", "qualipac", "choisir"],
    },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
    const g = guides.find(g => g.slug === slug);
    if (!g) return undefined;
    return { ...g, content: guidesContent[g.slug] || '' };
}

export function getAllGuides(): GuideArticle[] {
    return guides.map(g => ({ ...g, content: guidesContent[g.slug] || '' }));
}

export function getRelatedGuides(currentSlug: string, limit: number = 4): GuideArticle[] {
    const current = getGuideBySlug(currentSlug);
    const all = getAllGuides();
    if (!current) return all.filter(g => g.slug !== currentSlug).slice(0, limit);

    const sameCategory = all.filter(g => g.slug !== currentSlug && g.category === current.category);
    const otherCategory = all.filter(g => g.slug !== currentSlug && g.category !== current.category);
    return [...sameCategory, ...otherCategory].slice(0, limit);
}

