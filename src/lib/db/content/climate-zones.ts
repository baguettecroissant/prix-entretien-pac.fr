// Climate zones for PAC maintenance — 4 zones with specific advice
// Determines maintenance timing, performance impacts, and special precautions

export interface ClimateZoneData {
    zone: string;
    label: string;
    pac_conseil: string;
    entretien_conseil: string;
    saison_haute: string;
    performance_note: string;
}

export function getClimateZone(lat: number, lng: number): ClimateZoneData {
    // Mediterranean: south of 44.5°N and east of 1°E (roughly)
    if (lat < 44.5 && lng > 1) return climateZones.mediterraneen;
    // Mountain: high altitude areas (Alps, Pyrenees, Massif Central, Vosges, Jura)
    if (lat > 44 && lng > 5.5 && lat < 47) return climateZones.montagnard;
    if (lat > 42 && lat < 43.5 && lng < 2) return climateZones.montagnard;
    if (lat > 45 && lat < 46.5 && lng > 2 && lng < 4) return climateZones.montagnard;
    // Continental: east of 3°E and north of 44.5°N
    if (lng > 3 && lat > 44.5) return climateZones.continental;
    // Oceanic: default (west, north, center)
    return climateZones.oceanique;
}

export const climateZones: Record<string, ClimateZoneData> = {
    oceanique: {
        zone: 'oceanique',
        label: 'Climat océanique',
        pac_conseil: "Le climat océanique est le plus favorable aux pompes à chaleur air/eau et air/air. Les températures rarement négatives (rarement sous -5°C) permettent un COP moyen élevé de 3,5 à 4,5 sur l'année. L'humidité ambiante peut cependant accélérer la corrosion de l'unité extérieure et favoriser la formation de mousse sur l'échangeur. Un nettoyage soigneux lors de l'entretien annuel est particulièrement important.",
        entretien_conseil: "Planifiez votre entretien entre septembre et novembre, avant la mise en route hivernale. En climat océanique, l'humidité favorise le développement de moisissures dans les conduits et sur les filtres. Demandez un contrôle spécifique de l'évacuation des condensats et de l'état anti-corrosion du boîtier extérieur.",
        saison_haute: "octobre à décembre",
        performance_note: "COP moyen annuel de 3,8 à 4,5 — les conditions océaniques offrent les meilleures performances PAC de France grâce à des hivers doux et des amplitudes thermiques faibles."
    },
    continental: {
        zone: 'continental',
        label: 'Climat continental',
        pac_conseil: "Le climat continental, avec ses hivers froids (régulièrement -10°C à -15°C), sollicite fortement les pompes à chaleur. Le COP chute significativement sous -7°C, et la PAC bascule souvent sur sa résistance d'appoint électrique. Un entretien rigoureux du compresseur, du détendeur et de l'évaporateur est crucial pour maintenir les performances par grand froid. Les cycles de dégivrage automatique doivent être vérifiés systématiquement.",
        entretien_conseil: "L'entretien doit impérativement être réalisé avant les premières gelées, idéalement en septembre-octobre. Le technicien doit vérifier le bon fonctionnement du cycle de dégivrage (test obligatoire), la charge en fluide frigorigène (toute perte réduit drastiquement les performances par froid), et l'état de l'isolation du circuit extérieur.",
        saison_haute: "septembre à novembre",
        performance_note: "COP moyen annuel de 2,8 à 3,5 — les périodes de grand froid réduisent les performances. Un entretien parfait peut améliorer le COP de 15% en récupérant l'efficacité perdue par l'encrassement."
    },
    mediterraneen: {
        zone: 'mediterraneen',
        label: 'Climat méditerranéen',
        pac_conseil: "En climat méditerranéen, les PAC fonctionnent majoritairement en mode réversible (chauffage l'hiver et climatisation l'été). L'unité extérieure est davantage sollicitée qu'ailleurs en raison de la double utilisation. La poussière, le pollen et les résidus de pollution atmosphérique encrassent les échangeurs plus rapidement. Les fortes chaleurs estivales (>35°C) réduisent le rendement en mode froid, rendant un échangeur propre encore plus crucial.",
        entretien_conseil: "Deux passages annuels sont recommandés en zone méditerranéenne : un avant l'hiver (octobre) pour le mode chauffage, et un au printemps (avril-mai) avant la saison de climatisation. L'entretien printanier doit inclure un nettoyage avancé de l'évaporateur extérieur encrassé par le pollen.",
        saison_haute: "mars à mai et septembre à novembre",
        performance_note: "COP moyen annuel de 3,5 à 4,2 en mode chauffage. En mode climatisation, l'EER moyen est de 3,0 à 3,8. Un échangeur propre améliore les performances de 20% en mode froid."
    },
    montagnard: {
        zone: 'montagnard',
        label: 'Climat montagnard',
        pac_conseil: "Le climat montagnard est le plus exigeant pour les pompes à chaleur. Les températures descendent régulièrement sous -15°C, voire -20°C en altitude. Seules les PAC haute température ou les systèmes géothermiques offrent des performances acceptables. L'entretien est critique : un circuit frigorifique sous-chargé de 10% peut entraîner une perte de COP de 25% par grand froid. Le givre prolongé sur l'unité extérieure nécessite un système de dégivrage en parfait état.",
        entretien_conseil: "L'entretien doit être programmé dès août-septembre, avant les premières gelées d'altitude. Le technicien doit réaliser un test de performance complet incluant la mesure du COP à différentes températures. La charge en fluide frigorigène doit être vérifiée avec une précision de ±5%. Dans les zones enneigées, vérifiez que l'unité extérieure est suffisamment surélevée (minimum 50 cm du sol).",
        saison_haute: "août à octobre",
        performance_note: "COP moyen annuel de 2,2 à 3,0 pour les PAC air/eau, 3,5 à 4,5 pour les PAC géothermiques. En altitude, la géothermie est nettement plus performante et rentable sur le long terme."
    }
};
