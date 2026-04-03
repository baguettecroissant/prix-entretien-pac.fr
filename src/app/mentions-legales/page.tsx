import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales",
    description: "Mentions légales du site Prix-Entretien-PAC.fr.",
    alternates: { canonical: "https://www.prix-entretien-pac.fr/mentions-legales" },
    robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
                <h1>Mentions légales</h1>

                <h2>Éditeur du site</h2>
                <p>Le site <strong>prix-entretien-pac.fr</strong> est un site d&apos;information et de comparaison de prix pour l&apos;entretien de pompes à chaleur en France.</p>

                <h2>Hébergement</h2>
                <p>Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>

                <h2>Données personnelles</h2>
                <p>Ce site ne collecte aucune donnée personnelle directement. Le formulaire de devis est opéré par notre partenaire <strong>ViteUnDevis.com</strong> qui dispose de sa propre politique de confidentialité.</p>

                <h2>Cookies</h2>
                <p>Ce site n&apos;utilise aucun cookie de tracking. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.</p>

                <h2>Propriété intellectuelle</h2>
                <p>L&apos;ensemble du contenu de ce site (textes, images, structure) est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>

                <h2>Limitation de responsabilité</h2>
                <p>Les prix mentionnés sur ce site sont donnés à titre indicatif et ne constituent pas un engagement contractuel. Les tarifs réels peuvent varier selon les prestataires, la localisation et le type de PAC. Nous vous recommandons de demander plusieurs devis pour obtenir le meilleur prix.</p>

                <h2>Contact</h2>
                <p>Pour toute question relative au site, vous pouvez nous contacter par email.</p>
            </div>
        </div>
    );
}
