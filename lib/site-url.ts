/**
 * Absolute origin of the deployed site, used for canonical URLs, the sitemap, robots.txt and llms.txt.
 *
 * Set NEXT_PUBLIC_SITE_URL (e.g. https://lovethyneighborhhc.com) once the site lives on its own domain.
 * On Vercel it otherwise falls back to the project's production domain, so canonicals always point at the
 * site that is actually serving the page (never at a different domain).
 */
function resolve(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return 'http://localhost:3000';
}

export const SITE_URL = resolve().replace(/\/+$/, '');

export const absoluteUrl = (path = '/') => `${SITE_URL}${path}`;

/** The TrustedSite seal is registered for the original domain only; anywhere else its config request 403s. */
export const TRUSTEDSITE_ENABLED = new URL(SITE_URL).hostname.replace(/^www\./, '') === 'lovethyneighborhhc.com';
