import type { MetadataRoute } from 'next';
import { indexablePages } from '@/content/metadata';
import { absoluteUrl } from '@/lib/site-url';

/** /sitemap.xml: every indexable page on this deployment's own domain (account pages are excluded). */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePages.map(({ path, lastModified }) => ({
    url: absoluteUrl(path),
    lastModified: lastModified ? new Date(lastModified) : undefined,
    changeFrequency: path.startsWith('/blogs/f/') ? 'monthly' : 'weekly',
    priority: path === '/' ? 1 : path.startsWith('/blogs/f/') ? 0.6 : 0.8,
  }));
}
