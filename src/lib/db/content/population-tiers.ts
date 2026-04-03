// Population tiers — 5 niveaux avec contenu adapté à l'entretien PAC
// XS (<2000), S (2000-10000), M (10000-50000), L (50000-200000), XL (>200000)

export type PopTier = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface PopTierContent {
    tier: PopTier;
    label: string;
    intro: string;
    cas_usage: string;
    conseil_pratique: string;
    logistique: string;
    contrat_conseil: string;
}

export function getPopTier(population?: number): PopTier {
    if (population === undefined || population === null) return 'S';
    if (population === 0) return 'S';
    if (population < 2000) return 'XS';
    if (population < 10000) return 'S';
    if (population < 50000) return 'M';
    if (population < 200000) return 'L';
    return 'XL';
}

export const populationTiers: Record<PopTier, PopTierContent> = {
    XS: {
        tier: 'XS',
        label: 'commune rurale',
        intro: "Dans les communes rurales, les maisons individuelles chauffées par pompe à chaleur nécessitent un suivi technique régulier. Les techniciens RGE desservent généralement un rayon de 30 à 50 km autour de leur base, ce qui peut impliquer des frais de déplacement légèrement supérieurs. L'entretien préventif est d'autant plus important que l'éloignement rend les interventions d'urgence plus longues et coûteuses.",
        cas_usage: "Les PAC installées en milieu rural sont principalement des modèles air/eau de 8 à 16 kW, souvent en remplacement d'anciennes chaudières fioul. Les maisons anciennes en pierre, moins bien isolées, sollicitent davantage la PAC et nécessitent un suivi plus rigoureux du compresseur et du circuit frigorifique.",
        conseil_pratique: "En zone rurale, planifiez votre entretien dès septembre pour être certain d'avoir un créneau avant l'hiver. Les techniciens sont moins nombreux et leurs plannings se remplissent vite. Vérifiez que le technicien est bien certifié RGE et qu'il possède l'attestation de capacité pour la manipulation des fluides frigorigènes.",
        logistique: "Le délai d'obtention d'un rendez-vous est de 1 à 3 semaines. Prévoyez un contrat d'entretien annuel qui inclut le déplacement pour sécuriser votre créneau et bénéficier de la priorité en cas de panne.",
        contrat_conseil: "En zone rurale, le contrat annuel est fortement recommandé. Il garantit un passage annuel planifié et une priorité d'intervention sous 24-48h en cas de panne, là où une demande ponctuelle peut nécessiter jusqu'à une semaine d'attente."
    },
    S: {
        tier: 'S',
        label: 'bourg ou petite ville',
        intro: "Dans les petites villes et bourgs, le parc de pompes à chaleur est en croissance constante, porté par les lotissements récents et les rénovations énergétiques aidées par MaPrimeRénov'. Plusieurs techniciens RGE sont généralement disponibles dans un rayon de 20 km, offrant des délais raisonnables et des tarifs compétitifs pour l'entretien annuel obligatoire.",
        cas_usage: "Le parc PAC local est composé principalement de modèles air/eau de 6 à 14 kW pour les pavillons neufs, et de modèles plus puissants (12-16 kW) pour les rénovations de maisons anciennes. Les contrats d'entretien annuel sont le mode le plus courant, avec un prix moyen inférieur de 15% aux grandes villes.",
        conseil_pratique: "Comparez au moins 2 devis de techniciens locaux. Les petites entreprises de chauffagistes proposent souvent un meilleur rapport qualité-prix que les grands réseaux nationaux. Vérifiez que l'entretien inclut bien les 12 points de contrôle réglementaires et le test d'étanchéité du circuit frigorifique.",
        logistique: "Comptez 1 à 2 semaines pour obtenir un rendez-vous d'entretien. En automne (septembre-novembre), la demande augmente fortement. Réservez dès août pour avoir le choix de la date.",
        contrat_conseil: "Le contrat annuel standard (150-200€) suffit dans la plupart des cas. Il inclut une visite complète, le nettoyage des filtres et échangeurs, et la vérification du circuit frigorifique. Optez pour le contrat premium uniquement si votre PAC a plus de 8 ans."
    },
    M: {
        tier: 'M',
        label: 'ville moyenne',
        intro: "Dans les villes moyennes, la concurrence entre techniciens RGE est suffisante pour garantir des prix compétitifs et des délais courts. Le parc installé de pompes à chaleur est diversifié : PAC air/eau en pavillon, PAC air/air en appartement, et quelques installations géothermiques. L'entretien obligatoire depuis le décret de juillet 2020 est bien respecté grâce à une bonne densité de professionnels qualifiés.",
        cas_usage: "Les demandes d'entretien portent sur tous types de PAC : air/eau (60%), air/air (30%) et géothermie (10%). Les immeubles récents sont de plus en plus équipés de PAC collectives nécessitant un entretien spécifique avec contrat de maintenance dédié.",
        conseil_pratique: "Profitez de la concurrence locale pour négocier votre contrat d'entretien. Les techniciens proposent souvent des tarifs préférentiels si vous vous engagez sur 2 ou 3 ans. Demandez systématiquement le rapport d'intervention écrit avec les mesures de pression, température et COP.",
        logistique: "Délai d'obtention d'un rendez-vous : 5 à 10 jours. Plusieurs plages horaires disponibles, y compris le samedi matin chez certains prestataires. La livraison de pièces de rechange est rapide (24-48h).",
        contrat_conseil: "Trois niveaux de contrat sont généralement proposés : basique (visite annuelle, 130-180€), standard (visite + priorité dépannage, 180-250€), premium (2 visites/an + pièces incluses, 280-400€). Le standard offre le meilleur rapport qualité-prix."
    },
    L: {
        tier: 'L',
        label: 'grande ville',
        intro: "Dans les grandes villes, le marché de l'entretien de pompes à chaleur est mature et concurrentiel. De nombreux techniciens RGE et entreprises spécialisées proposent des contrats d'entretien avec des services à valeur ajoutée : intervention sous 24h, télésurveillance du COP, application mobile de suivi. Les tarifs sont 10 à 15% supérieurs aux zones rurales, mais la qualité de service et la réactivité sont optimales.",
        cas_usage: "Le parc urbain comprend une forte proportion de PAC air/air en copropriété et de PAC air/eau en pavillon de banlieue. Les grandes agglomérations comptent également des réseaux de chaleur avec PAC collective et des installations géothermiques sur nappe. L'entretien des PAC en copropriété nécessite un contrat de maintenance spécifique négocié par le syndic.",
        conseil_pratique: "En grande ville, méfiez-vous des offres d'entretien à prix cassé qui ne respectent pas l'intégralité du protocole réglementaire. Un entretien sérieux dure au minimum 1h30. Vérifiez les avis en ligne et les certifications du technicien avant de signer un contrat.",
        logistique: "Délai d'obtention d'un rendez-vous : 3 à 7 jours, voire le lendemain en semaine creuse. Interventions possibles en soirée et le week-end chez certains prestataires premium. Dépannage 7j/7 inclus dans les contrats haut de gamme.",
        contrat_conseil: "La forte concurrence permet de négocier des contrats avantageux. Les grandes enseignes (Engie, Daikin Service, Atlantic SAV) et les indépendants locaux cohabitent. Comparez au moins 3 devis. Un engagement sur 2 ans peut faire baisser le tarif de 10-15%."
    },
    XL: {
        tier: 'XL',
        label: 'métropole',
        intro: "Dans les métropoles, l'entretien de pompe à chaleur est un marché structuré avec une offre pléthorique de prestataires allant des grandes enseignes nationales aux artisans indépendants certifiés. La densité de techniciens RGE garantit une disponibilité quasi-immédiate et une forte concurrence tarifaire. Les PAC sont présentes dans tous les types de logements, du studio avec split climatisation au pavillon de banlieue avec PAC air/eau 16 kW.",
        cas_usage: "Le marché métropolitain est segmenté : PAC air/air split et multisplit en appartement (entretien simplifié, 80-150€), PAC air/eau en maison individuelle (entretien complet, 150-280€), PAC géothermique (entretien premium, 200-350€), et PAC collective en copropriété (contrat de maintenance annuel négocié). Les interventions sur fluide frigorigène R32 sont les plus fréquentes sur les équipements récents.",
        conseil_pratique: "En métropole, les comparateurs en ligne et les avis clients sont vos meilleurs alliés pour choisir un technicien. Exigez un devis écrit détaillant les 12 points de contrôle réglementaires. Attention : les premiers prix à moins de 100€ omettent souvent le contrôle d'étanchéité du circuit frigorifique, pourtant obligatoire pour les PAC contenant plus de 2 kg de fluide.",
        logistique: "Rendez-vous possible sous 48h, parfois dès le lendemain. Les plateformes de mise en relation permettent de comparer instantanément les disponibilités et les prix de plusieurs techniciens. Certains prestataires proposent des créneaux en soirée (jusqu'à 20h) et le samedi.",
        contrat_conseil: "Avec plus de 50 techniciens disponibles dans votre métropole, vous avez un fort pouvoir de négociation. Le contrat standard (visite annuelle + priorité dépannage) se négocie entre 150 et 220€. Les contrats premium avec télésurveillance connectée et intervention garantie sous 4h coûtent 300 à 450€ mais sont rentabilisés dès la première panne évitée."
    }
};
