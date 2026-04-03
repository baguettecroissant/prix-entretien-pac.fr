import { NextResponse } from 'next/server';
import { getAllGuides } from '@/lib/guides-data';
import { getAllBrands } from '@/lib/brands-data';
import { getAllDepartments } from '@/lib/cities';

export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://www.prix-entretien-pac.fr';
    const guides = getAllGuides();
    const brands = getAllBrands();
    const departments = getAllDepartments();

    const staticPages = [
        { loc: '', priority: '1.0', changefreq: 'weekly' },
        { loc: '/devis', priority: '0.9', changefreq: 'monthly' },
        { loc: '/guides', priority: '0.8', changefreq: 'weekly' },
        { loc: '/marques', priority: '0.8', changefreq: 'monthly' },
        { loc: '/annuaire', priority: '0.8', changefreq: 'monthly' },
        { loc: '/faq', priority: '0.7', changefreq: 'monthly' },
    ];

    const guideUrls = guides.map(g => ({
        loc: `/guides/${g.slug}`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: g.updatedDate,
    }));

    const brandUrls = brands.map(b => ({
        loc: `/marques/${b.slug}`,
        priority: '0.7',
        changefreq: 'monthly',
    }));

    const deptUrls = departments.map(d => ({
        loc: `/annuaire/${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`,
        priority: '0.6',
        changefreq: 'monthly',
    }));

    const allUrls = [...staticPages, ...guideUrls, ...brandUrls, ...deptUrls];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `<url>
  <loc>${baseUrl}${u.loc}</loc>
  <changefreq>${u.changefreq}</changefreq>
  <priority>${u.priority}</priority>
  ${'lastmod' in u ? `<lastmod>${u.lastmod}</lastmod>` : ''}
</url>`).join('\n')}
</urlset>`;

    return new NextResponse(xml, {
        headers: { 'Content-Type': 'application/xml' },
    });
}
