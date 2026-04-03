import { NextResponse } from 'next/server';
import { getAllDepartments, getCitiesByDepartment } from '@/lib/cities';

export const dynamic = 'force-static';

export async function generateStaticParams() {
    const depts = getAllDepartments();
    return depts.map(d => ({ code: d.code }));
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ code: string }> }
) {
    const { code } = await params;
    const baseUrl = 'https://www.prix-entretien-pac.fr';
    const cities = getCitiesByDepartment(code);

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cities.map(city => `<url>
  <loc>${baseUrl}/entretien-pac/${city.slug}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>`).join('\n')}
</urlset>`;

    return new NextResponse(xml, {
        headers: { 'Content-Type': 'application/xml' },
    });
}
