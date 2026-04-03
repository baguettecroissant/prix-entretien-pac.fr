import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.prix-entretien-pac.fr"),
    title: {
        default: "Prix Entretien PAC 2026 — Tarifs & Techniciens Certifiés | Prix-Entretien-PAC.fr",
        template: "%s | Prix-Entretien-PAC.fr",
    },
    description: "Comparez les prix d'entretien de pompe à chaleur en France. Tarifs 2026, techniciens certifiés RGE, contrats d'entretien. Devis gratuit et sans engagement.",
    keywords: ["entretien pompe à chaleur", "entretien pac", "prix entretien pac", "technicien pac", "contrat entretien pac", "pompe à chaleur"],
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://www.prix-entretien-pac.fr",
        siteName: "Prix-Entretien-PAC.fr",
        title: "Prix Entretien PAC 2026 — Tarifs & Techniciens Certifiés",
        description: "Comparez les prix d'entretien de pompe à chaleur en France. Devis gratuit, techniciens certifiés RGE.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Prix Entretien PAC 2026",
        description: "Comparez les prix d'entretien de pompe à chaleur. Devis gratuit.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://www.prix-entretien-pac.fr",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="min-h-screen flex flex-col">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Prix-Entretien-PAC.fr",
                            "url": "https://www.prix-entretien-pac.fr",
                            "description": "Comparateur de prix pour l'entretien de pompes à chaleur en France. Trouvez un technicien certifié RGE près de chez vous.",
                            "areaServed": {
                                "@type": "Country",
                                "name": "France"
                            },
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Prix-Entretien-PAC.fr",
                            "url": "https://www.prix-entretien-pac.fr",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://www.prix-entretien-pac.fr/annuaire?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        }),
                    }}
                />
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
                <StickyMobileCTA />
            </body>
        </html>
    );
}
