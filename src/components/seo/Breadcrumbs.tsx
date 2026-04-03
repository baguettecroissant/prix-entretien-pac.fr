import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const allItems = [{ label: "Accueil", href: "/" }, ...items];

    return (
        <nav aria-label="Fil d'Ariane" className="mb-2">
            <ol className="flex items-center flex-wrap gap-1 text-xs text-slate-300">
                {allItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-1">
                        {i > 0 && <ChevronRight className="h-3 w-3 text-slate-500" />}
                        {i === 0 && <Home className="h-3 w-3 mr-0.5" />}
                        {item.href && i < allItems.length - 1 ? (
                            <Link href={item.href} className="hover:text-white transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className={i === allItems.length - 1 ? "text-white font-medium" : ""}>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
