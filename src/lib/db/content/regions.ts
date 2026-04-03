// Regional content — PAC adoption and energy context per region

export const regionsContent: Record<string, { contexte: string; adoption_pac: string; energie_mix: string }> = {
    "Auvergne-Rhône-Alpes": {
        contexte: "L'Auvergne-Rhône-Alpes est la deuxième région de France pour l'installation de pompes à chaleur, portée par un climat varié entre plaines lyonnaises et massifs alpins. Les aides régionales complètent MaPrimeRénov' pour encourager le remplacement des chaudières fioul en zone rurale.",
        adoption_pac: "Fort taux d'adoption avec 180 000+ PAC installées. La région concentre 12% du parc national de pompes à chaleur. Lyon, Grenoble et Saint-Étienne sont les principaux marchés urbains.",
        energie_mix: "Mix énergétique diversifié avec une forte composante hydroélectrique. L'électricité décarbonée rend les PAC particulièrement vertueuses dans cette région."
    },
    "Bourgogne-Franche-Comté": {
        contexte: "La Bourgogne-Franche-Comté, avec son climat semi-continental et ses hivers marqués, privilégie les PAC haute température et les installations géothermiques dans les zones d'altitude du Jura et du Morvan. Le programme Effilogis régional soutient la rénovation énergétique.",
        adoption_pac: "Taux d'adoption en croissance de 15% par an. Les maisons individuelles des zones péri-urbaines de Dijon et Besançon sont les principaux marchés. Le remplacement des chaudières fioul est le premier moteur d'installation.",
        energie_mix: "La région dispose d'un bon réseau de techniciens RGE grâce aux centres de formation de Dijon et Besançon."
    },
    "Bretagne": {
        contexte: "La Bretagne bénéficie du climat le plus favorable de France pour les PAC air/eau grâce à ses hivers très doux (rarement sous -3°C). Le COP moyen des installations bretonnes est parmi les plus élevés du territoire national. L'air marin impose cependant un entretien anti-corrosion renforcé des unités extérieures en zone littorale.",
        adoption_pac: "Très fort taux d'adoption : la Bretagne compte parmi les régions les mieux équipées en PAC. Le programme Bretagne Énergie accompagne les particuliers dans leur projet.",
        energie_mix: "Région importatrice nette d'électricité, ce qui renforce l'intérêt des PAC à haut COP pour maximiser l'efficacité énergétique."
    },
    "Centre-Val de Loire": {
        contexte: "Le Centre-Val de Loire, avec son climat tempéré et ses températures rarement extrêmes, offre des conditions idéales pour les PAC air/eau standard. La région compte un parc immobilier ancien important (châteaux de la Loire, longères) qui bénéficie de rénovations énergétiques avec PAC.",
        adoption_pac: "Croissance soutenue portée par le remplacement des chaudières fioul dans l'habitat rural et périurbain. Orléans et Tours concentrent la majorité des techniciens RGE.",
        energie_mix: "Proximité des centrales nucléaires du val de Loire garantissant un coût de l'électricité stable, favorable au fonctionnement des PAC."
    },
    "Corse": {
        contexte: "L'insularité corse impacte le marché de l'entretien PAC avec des coûts d'intervention majorés de 20 à 30% par rapport au continent. Les PAC réversibles sont quasi systématiques dans les constructions neuves, avec une utilisation intensive en mode climatisation de juin à septembre.",
        adoption_pac: "Forte adoption en construction neuve. Le climat méditerranéen insulaire rend les PAC réversibles incontournables. Le nombre de techniciens certifiés est limité sur l'île.",
        energie_mix: "Production électrique insulaire partiellement thermique, ce qui rend les PAC à haut COP encore plus pertinentes pour réduire la facture énergétique."
    },
    "Grand Est": {
        contexte: "Le Grand Est, avec son climat continental marqué par des hivers froids et des étés chauds, nécessite des PAC performantes. Le cercle vertueux de la rénovation énergétique (isolation + PAC) est particulièrement développé dans cette région qui a connu les premières vagues de remplacement des chaudières au charbon.",
        adoption_pac: "Marché structuré avec une forte présence des marques allemandes (Viessmann, Bosch) en plus des leaders français. Strasbourg, Metz et Nancy concentrent les principaux installateurs.",
        energie_mix: "Réseau de gaz dense en zone urbaine, la PAC vient en complément ou remplacement des chaudières gaz. Développement des PAC hybrides (PAC + chaudière gaz condensation)."
    },
    "Hauts-de-France": {
        contexte: "Les Hauts-de-France, malgré un climat frais et humide, sont un marché PAC dynamique porté par la rénovation thermique massive des anciens bassins miniers et industriels. La densité de population et le nombre de maisons individuelles créent une forte demande en entretien annuel.",
        adoption_pac: "Marché de masse avec une forte proportion de PAC air/eau de moyenne puissance (8-12 kW). La rénovation énergétique du bassin minier a généré des milliers d'installations. Lille et sa métropole concentrent un réseau dense de techniciens.",
        energie_mix: "Région bien connectée au réseau électrique national. Les aides ANAH sont particulièrement mobilisées pour le remplacement des chaudières polluantes."
    },
    "Île-de-France": {
        contexte: "L'Île-de-France est le premier marché français pour l'entretien de PAC en volume, avec une forte concentration de techniciens et une concurrence intense. Le marché est segmenté entre PAC air/air en appartement parisien et PAC air/eau en pavillon de grande couronne.",
        adoption_pac: "Plus de 250 000 PAC installées dans la région. Le marché est tiré par la construction neuve (RT 2020 imposant les EnR) et la rénovation du parc pavillonnaire des années 70-80.",
        energie_mix: "Prix de l'énergie parmi les plus élevés de France, rendant les PAC particulièrement attractives pour réduire la facture de chauffage."
    },
    "Normandie": {
        contexte: "La Normandie offre un climat océanique doux très favorable aux PAC air/eau. Les températures hivernales rarement négatives garantissent un COP élevé toute l'année. L'humidité ambiante nécessite cependant un entretien soigneux des filtres et de l'évacuation des condensats.",
        adoption_pac: "Croissance rapide du marché PAC, notamment dans l'habitat individuel des zones périurbaines de Rouen, Caen et Le Havre. La proximité de la mer impose un suivi anti-corrosion en zone littorale.",
        energie_mix: "Présence de centrales nucléaires et développement éolien offshore, garantissant un approvisionnement électrique stable."
    },
    "Nouvelle-Aquitaine": {
        contexte: "La Nouvelle-Aquitaine, plus grande région de France, bénéficie d'un climat globalement doux et ensoleillé, idéal pour les PAC. Du littoral atlantique aux contreforts du Massif Central, les conditions climatiques variées nécessitent des choix de PAC et des pratiques d'entretien adaptés.",
        adoption_pac: "Marché dynamique porté par Bordeaux métropole et les stations balnéaires du littoral. Fort taux de remplacement des chaudières fioul en zone rurale (Dordogne, Corrèze, Creuse).",
        energie_mix: "Ensoleillement favorable au couplage PAC + panneaux photovoltaïques pour l'autoconsommation."
    },
    "Occitanie": {
        contexte: "L'Occitanie combine un littoral méditerranéen chaud et un arrière-pays montagneux (Pyrénées, Massif Central). Les PAC réversibles dominent sur le littoral tandis que les PAC haute température et géothermiques sont privilégiées en altitude. L'ensoleillement exceptionnel favorise le couplage PAC + solaire.",
        adoption_pac: "Très fort taux d'adoption, notamment sur le littoral (Montpellier, Toulouse, Perpignan). Les PAC réversibles représentent plus de 70% des installations neuves dans cette région.",
        energie_mix: "Région leader pour le solaire photovoltaïque, le couplage PAC + PV est de plus en plus courant dans les constructions neuves."
    },
    "Pays de la Loire": {
        contexte: "Les Pays de la Loire bénéficient d'un climat océanique tempéré optimal pour les pompes à chaleur. La région connaît une forte croissance démographique (Nantes, Angers) avec des constructions neuves systématiquement équipées en PAC depuis la RE2020.",
        adoption_pac: "Un des plus hauts taux d'équipement PAC de France dans la construction neuve. Nantes et sa métropole concentrent un réseau dense de techniciens certifiés.",
        energie_mix: "Climat doux permettant des COP parmi les plus élevés de France, rendant les PAC particulièrement rentables."
    },
    "Provence-Alpes-Côte d'Azur": {
        contexte: "PACA est un marché majeur pour les PAC réversibles, avec une utilisation intensive en mode climatisation de juin à septembre. L'arrière-pays alpin nécessite des PAC adaptées au froid. La poussière, le pollen de pin et la chaleur intense sont les principaux ennemis du rendement des PAC dans cette région.",
        adoption_pac: "Marché mature avec forte pénétration des PAC réversibles. Marseille, Nice et Toulon concentrent la demande. Les PAC air/air multisplit sont très répandues dans l'habitat collectif.",
        energie_mix: "Fort ensoleillement favorisant l'autoconsommation photovoltaïque pour alimenter les PAC, réduisant significativement le coût de fonctionnement."
    }
};
