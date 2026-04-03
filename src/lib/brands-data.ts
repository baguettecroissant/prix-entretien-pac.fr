import { BrandInfo } from '@/types';

export const brands: BrandInfo[] = [
    {
        slug: "daikin",
        name: "Daikin",
        description: "Leader mondial de la climatisation et des pompes à chaleur, Daikin est le fabricant n°1 en Europe. La marque japonaise est réputée pour la fiabilité de ses compresseurs et l'efficacité énergétique de ses PAC air/eau Altherma et air/air.",
        metaTitle: "Entretien PAC Daikin 2026 — Prix, Protocole & Techniciens Agréés",
        metaDescription: "Entretien de pompe à chaleur Daikin : prix (150-280€), protocole spécifique Altherma, fréquence recommandée. Trouvez un technicien agréé Daikin près de chez vous.",
        image: "/images/marques/daikin.png",
        imageAlt: "Pompe à chaleur Daikin Altherma installée sur une façade de maison",
        specialite: "PAC air/eau Altherma, PAC air/air",
        gammes: ["Altherma 3 H HT", "Altherma 3 M", "Altherma 3 R", "Emura", "Stylish"],
        avantages: ["Compresseur scroll ultra-fiable", "COP jusqu'à 5.1", "Fluide R32 basse empreinte carbone", "Pilotage via app Daikin Residential Controller"],
        entretienSpecifique: "Les PAC Daikin Altherma nécessitent un entretien spécifique du compresseur swing et de la carte électronique. Le diagnostic via la télécommande Madoka ou l'application Daikin Residential Controller permet d'identifier les codes d'erreur avant l'intervention du technicien."
    },
    {
        slug: "atlantic",
        name: "Atlantic",
        description: "Fabricant français basé à La Roche-sur-Yon, Atlantic est le leader français des pompes à chaleur. La marque propose une gamme complète de PAC air/eau (Alfea) et air/air, avec un réseau SAV dense sur tout le territoire.",
        metaTitle: "Entretien PAC Atlantic 2026 — Prix, Spécificités Alfea & SAV",
        metaDescription: "Entretien pompe à chaleur Atlantic Alfea : tarifs (130-250€), points de contrôle spécifiques, réseau SAV France. Guide complet pour votre PAC Atlantic.",
        image: "/images/marques/atlantic.png",
        imageAlt: "Pompe à chaleur Atlantic Alfea Excellia installée devant une maison",
        specialite: "PAC air/eau Alfea, PAC hybride",
        gammes: ["Alfea Excellia Duo", "Alfea Extensa", "Alfea M", "Loria", "Calypso"],
        avantages: ["Fabrication française", "SAV étendu sur tout le territoire", "Cozytouch connecté", "Gamme hybride PAC + chaudière"],
        entretienSpecifique: "Les PAC Atlantic Alfea disposent d'un système d'autodiagnostic accessible via l'interface Cozytouch. Le technicien doit vérifier le bon fonctionnement de l'échangeur à plaques et du circulateur intégré, spécificités des modèles Alfea Excellia."
    },
    {
        slug: "mitsubishi-electric",
        name: "Mitsubishi Electric",
        description: "Mitsubishi Electric est un acteur majeur des PAC air/eau Ecodan et des systèmes air/air. La marque japonaise est reconnue pour ses technologies Zubadan permettant un fonctionnement efficace jusqu'à -25°C.",
        metaTitle: "Entretien PAC Mitsubishi Electric 2026 — Ecodan, Prix & Protocole",
        metaDescription: "Entretien pompe à chaleur Mitsubishi Electric Ecodan : tarifs (140-300€), technologie Zubadan, protocole spécifique. Techniciens agréés Mitsubishi Electric.",
        image: "/images/marques/mitsubishi-electric.png",
        imageAlt: "Pompe à chaleur Mitsubishi Electric Ecodan en fonctionnement hivernal",
        specialite: "PAC air/eau Ecodan, technologie Zubadan grand froid",
        gammes: ["Ecodan Hydrobox", "Ecodan Cuboid", "Ecodan Silence", "Zubadan PUZ"],
        avantages: ["Technologie Zubadan (-25°C)", "Compresseur Inverter haute efficacité", "MELCloud connecté", "Silence de fonctionnement exceptionnel"],
        entretienSpecifique: "Les PAC Mitsubishi Electric Ecodan avec technologie Zubadan nécessitent un contrôle spécifique du cycle d'injection flash qui permet le fonctionnement par grand froid. Le diagnostic MELCloud permet un suivi des performances à distance."
    },
    {
        slug: "hitachi",
        name: "Hitachi",
        description: "Hitachi est un fabricant japonais reconnu pour ses PAC résidentielles et commerciales. La gamme Yutaki offre une large palette de solutions air/eau avec des COP parmi les meilleurs du marché.",
        metaTitle: "Entretien PAC Hitachi 2026 — Yutaki, Prix & Techniciens Agréés",
        metaDescription: "Entretien pompe à chaleur Hitachi Yutaki : tarifs (130-260€), spécificités techniques, fréquence recommandée. Guide pour trouver un technicien agréé Hitachi.",
        image: "/images/marques/hitachi.png",
        imageAlt: "Pompe à chaleur Hitachi Yutaki S installée dans un jardin paysager",
        specialite: "PAC air/eau Yutaki, PAC commercial",
        gammes: ["Yutaki S Combi", "Yutaki S80", "Yutaki M", "Summit"],
        avantages: ["Technologie DC PAM Inverter", "COP jusqu'à 5.06", "Fonctionnement jusqu'à -20°C", "Compresseur scroll à injection de vapeur"],
        entretienSpecifique: "La technologie DC PAM Inverter de Hitachi nécessite un contrôle spécifique du variateur de fréquence et de l'onduleur. Le système Yutaki S80 haute température (80°C) demande une attention particulière sur le circuit haute pression."
    },
    {
        slug: "toshiba",
        name: "Toshiba",
        description: "Toshiba est un pionnier des technologies de pompe à chaleur avec l'invention du compresseur Twin Rotary. La marque propose des PAC air/eau Estia et des systèmes air/air haut de gamme.",
        metaTitle: "Entretien PAC Toshiba 2026 — Estia, Prix & Spécificités Techniques",
        metaDescription: "Entretien pompe à chaleur Toshiba Estia : prix (120-240€), compresseur Twin Rotary, protocole maintenance. Guide complet pour votre PAC Toshiba.",
        image: "/images/marques/toshiba.png",
        imageAlt: "Système Toshiba Estia avec unité extérieure et module hydraulique",
        specialite: "PAC air/eau Estia, compresseur Twin Rotary",
        gammes: ["Estia 5 Series", "Estia R32", "Shorai Edge", "Seiya"],
        avantages: ["Compresseur Twin Rotary breveté", "Ultra silencieux (20 dBA)", "COP élevé jusqu'à 4.65", "Design compact"],
        entretienSpecifique: "Le compresseur Twin Rotary de Toshiba requiert un contrôle vibratoire spécifique lors de l'entretien. Les modèles Estia récents au R32 disposent d'un système de diagnostic embarqué facilitant l'identification des dysfonctionnements."
    },
    {
        slug: "panasonic",
        name: "Panasonic",
        description: "Panasonic propose la gamme Aquarea, une des plus complètes du marché en PAC air/eau. La marque se distingue par ses solutions connectées et sa technologie de compresseur R32 à haute efficacité.",
        metaTitle: "Entretien PAC Panasonic 2026 — Aquarea, Prix & Maintenance Connectée",
        metaDescription: "Entretien pompe à chaleur Panasonic Aquarea : prix (130-270€), Smart Cloud connecté, protocole maintenance. Trouvez un technicien Panasonic agréé.",
        image: "/images/marques/panasonic.png",
        imageAlt: "Pompe à chaleur Panasonic Aquarea T-Cap installée en façade",
        specialite: "PAC air/eau Aquarea, connectivité Smart Cloud",
        gammes: ["Aquarea T-Cap", "Aquarea All in One", "Aquarea J Generation", "Aquarea LT-WH"],
        avantages: ["Aquarea Smart Cloud connecté", "Technologie T-Cap (-20°C)", "COP jusqu'à 5.08", "Mode refroidissement passif"],
        entretienSpecifique: "Les PAC Panasonic Aquarea bénéficient du système Aquarea Smart Cloud permettant au technicien de diagnostiquer à distance avant l'intervention. Le modèle T-Cap nécessite un contrôle spécifique de l'injection de gaz chaud pour le fonctionnement par grand froid."
    },
    {
        slug: "de-dietrich",
        name: "De Dietrich",
        description: "De Dietrich, marque française historique du chauffage depuis 1684, propose des PAC air/eau haut de gamme intégrables dans des systèmes multi-énergie. La fiabilité et le réseau SAV français sont ses points forts.",
        metaTitle: "Entretien PAC De Dietrich 2026 — Prix, Gamme Alézio & SAV France",
        metaDescription: "Entretien pompe à chaleur De Dietrich Alézio : prix (150-290€), réseau SAV national, spécificités techniques. Guide complet pour l'entretien de votre PAC De Dietrich.",
        image: "/images/marques/de-dietrich.png",
        imageAlt: "Pompe à chaleur De Dietrich Alézio installée dans un local technique",
        specialite: "PAC air/eau Alézio, systèmes hybrides",
        gammes: ["Alézio S V200", "Alézio M V200", "Alézio Compact", "HPI Evolution"],
        avantages: ["Marque française depuis 1684", "Réseau SAV étendu", "Systèmes hybrides PAC + condensation", "Diematic iSystem connecté"],
        entretienSpecifique: "Les PAC De Dietrich Alézio disposent du système Diematic iSystem permettant un diagnostic complet via l'interface de régulation. Le technicien doit vérifier l'intégration de la PAC dans le système multi-énergie (solaire, chaudière) si applicable."
    },
    {
        slug: "saunier-duval",
        name: "Saunier Duval",
        description: "Saunier Duval, filiale du groupe Vaillant, propose des PAC air/eau GeniaSet et GeniaAir avec un excellent rapport qualité-prix. La marque est particulièrement bien implantée chez les installateurs indépendants.",
        metaTitle: "Entretien PAC Saunier Duval 2026 — GeniaSet, Prix & Techniciens",
        metaDescription: "Entretien pompe à chaleur Saunier Duval GeniaSet : tarifs (120-240€), protocole maintenance, réseau installateurs. Guide pour l'entretien de votre PAC Saunier Duval.",
        image: "/images/marques/saunier-duval.png",
        imageAlt: "Pompe à chaleur Saunier Duval GeniaSet Split installée en extérieur",
        specialite: "PAC air/eau GeniaSet, rapport qualité-prix",
        gammes: ["GeniaSet Split", "GeniaAir Split", "GeniaSet Max", "GeniaAir Max"],
        avantages: ["Excellent rapport qualité-prix", "Groupe Vaillant (fiabilité)", "MiPro Remote connecté", "Installation simplifiée"],
        entretienSpecifique: "Les PAC Saunier Duval GeniaSet disposent de l'outil MiPro Remote pour le suivi à distance. Le système de régulation ExoControl doit être mis à jour lors de l'entretien annuel pour bénéficier des dernières optimisations logicielles."
    },
];

export function getBrandBySlug(slug: string): BrandInfo | undefined {
    return brands.find(b => b.slug === slug);
}

export function getAllBrands(): BrandInfo[] {
    return brands;
}

export function getRelatedBrands(currentSlug: string, limit: number = 6): BrandInfo[] {
    return brands.filter(b => b.slug !== currentSlug).slice(0, limit);
}
