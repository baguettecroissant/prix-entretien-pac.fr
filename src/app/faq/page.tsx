import { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "FAQ Entretien Pompe à Chaleur — Toutes les Réponses",
    description: "Questions fréquentes sur l'entretien PAC : prix, obligation légale, fréquence, contrat, technicien RGE. Toutes les réponses pour votre pompe à chaleur.",
    alternates: { canonical: "https://www.prix-entretien-pac.fr/faq" },
};

const faqItems = [
    {
        q: "L'entretien de pompe à chaleur est-il obligatoire ?",
        a: "Oui, depuis le décret du 29 juillet 2020 (n°2020-912), l'entretien des pompes à chaleur dont la puissance nominale est comprise entre 4 kW et 70 kW est obligatoire tous les 2 ans. L'entretien doit être réalisé par un professionnel qualifié disposant d'une attestation de capacité pour la manipulation des fluides frigorigènes."
    },
    {
        q: "Combien coûte l'entretien d'une pompe à chaleur ?",
        a: "Le prix d'un entretien PAC varie de 120€ à 350€ selon le type de PAC (air/air, air/eau, géothermique), le niveau de contrat choisi (ponctuel, annuel, premium) et votre zone géographique. Un contrat annuel coûte en moyenne 150€ à 220€, soit 15% moins cher qu'un entretien ponctuel."
    },
    {
        q: "À quelle fréquence faut-il entretenir sa PAC ?",
        a: "La loi impose un entretien minimum tous les 2 ans. Cependant, un entretien annuel est fortement recommandé pour maintenir les performances optimales de votre PAC, prévenir les pannes et prolonger sa durée de vie. En zone méditerranéenne avec utilisation en mode réversible, 2 passages par an sont conseillés."
    },
    {
        q: "Que vérifie le technicien lors de l'entretien ?",
        a: "L'entretien réglementaire comprend 12 points de contrôle : circuit frigorifique (pression, température, étanchéité), charge en fluide, compresseur, détendeur, évaporateur, condenseur, connexions électriques, cycle de dégivrage, COP, filtres, condensats et sécurités. Le technicien doit remettre un rapport d'intervention dans les 15 jours."
    },
    {
        q: "Comment trouver un technicien PAC certifié RGE ?",
        a: "Vérifiez la certification RGE du technicien sur le site france-renov.gouv.fr. Demandez également son attestation de capacité pour la manipulation des fluides frigorigènes. Les qualifications QualiPAC et Qualibat sont des gages supplémentaires de compétence. Comparez au moins 2-3 devis avant de choisir."
    },
    {
        q: "Contrat d'entretien PAC : est-ce rentable ?",
        a: "Oui. Un contrat annuel standard (150-220€) inclut la visite complète et la priorité d'intervention en cas de panne (24-48h au lieu d'une semaine). Sur une PAC de 15-20 ans de durée de vie, l'entretien régulier évite les pannes coûteuses (500-2000€ pour un compresseur) et maintient un COP optimal, réduisant votre facture de chauffage de 15 à 30%."
    },
    {
        q: "Quelle est la différence entre entretien PAC air/eau et air/air ?",
        a: "L'entretien d'une PAC air/eau (150-280€) est plus complet car il inclut la vérification du circuit hydraulique, des vannes, du vase d'expansion et de la pression d'eau. L'entretien d'une PAC air/air (80-150€) se concentre sur le circuit frigorifique, les filtres et les splits intérieurs. La PAC air/eau nécessite un technicien plus qualifié."
    },
    {
        q: "Le locataire ou le propriétaire doit-il payer l'entretien PAC ?",
        a: "Le locataire est responsable de l'entretien courant de la PAC, comme pour une chaudière (décret du 26 août 1987). Le propriétaire a la charge des réparations lourdes et du remplacement de l'équipement. En copropriété, l'entretien de la PAC collective est à la charge du syndic via les charges de copropriété."
    },
    {
        q: "Que risque-t-on sans entretien de PAC ?",
        a: "Sans entretien, vous risquez : la perte de la garantie constructeur, une surconsommation électrique de 15 à 30%, une panne prématurée du compresseur (500-2000€), des fuites de fluide frigorigène (nocif pour l'environnement), et l'impossibilité de justifier le bon entretien en cas de contrôle ou de sinistre avec votre assurance habitation."
    },
    {
        q: "Peut-on entretenir sa PAC soi-même ?",
        a: "Vous pouvez réaliser certaines opérations d'entretien courant : nettoyage des filtres intérieurs (tous les 2-3 mois), dégagement de l'unité extérieure (feuilles, débris), vérification de l'écoulement des condensats. En revanche, les opérations sur le circuit frigorifique (vérification de charge, test d'étanchéité) sont réservées aux techniciens disposant d'une attestation de capacité. C'est une obligation réglementaire."
    },
];

export default function FaqPage() {
    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })),
            }) }} />

            <section className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        Questions Fréquentes — <span className="text-primary-300">Entretien PAC</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Tout ce que vous devez savoir sur l&apos;entretien de votre pompe à chaleur : prix, obligation, fréquence, contrat.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Accordion type="single" collapsible className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        {faqItems.map((faq, i) => (
                            <AccordionItem key={i} value={String(i)}>
                                <AccordionTrigger className="text-base font-bold text-left">{faq.q}</AccordionTrigger>
                                <AccordionContent>{faq.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
