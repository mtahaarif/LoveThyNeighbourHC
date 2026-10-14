import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site-url';

/** /robots.txt: open to every crawler (including AI answer engines), with the sitemap declared. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/m/'] },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
