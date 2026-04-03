import { NextResponse } from 'next/server';
import { getAllDepartments } from '@/lib/cities';
import { getAllGuides } from '@/lib/guides-data';
import { getAllBrands } from '@/lib/brands-data';

export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://www.prix-entretien-pac.fr';
    const departments = getAllDepartments();

    const sitemapEntries = [
        `<sitemap><loc>${baseUrl}/sitemap/main.xml</loc></sitemap>`,
        ...departments.map(d => `<sitemap><loc>${baseUrl}/sitemap/${d.code}.xml</loc></sitemap>`),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</sitemapindex>`;

    return new NextResponse(xml, {
        headers: { 'Content-Type': 'application/xml' },
    });
}
