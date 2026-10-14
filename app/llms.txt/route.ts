import { indexablePages } from '@/content/metadata';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { absoluteUrl } from '@/lib/site-url';

/** /llms.txt (llmstxt.org): a short map of the site for AI answer engines. Prerendered at build time. */
export function GET() {
  const byPath = new Map(indexablePages.map((p) => [p.path, p]));
  const line = (path: string) => {
    const p = byPath.get(path);
    return p ? `- [${p.title}](${absoluteUrl(path)})${p.description ? `: ${p.description}` : ''}` : '';
  };
  const posts = indexablePages.filter((p) => p.path.startsWith('/blogs/f/')).map((p) => line(p.path));

  const body = [
    '# Love Thy Neighbor Home Health Care, Inc.',
    '',
    '> Medicare-certified, Medicaid-licensed and AHCA-licensed home health agency serving Lake, Marion, Citrus and Sumter counties in Florida with skilled nursing, private duty nursing and personal care at home.',
    '',
    `Phone: ${site.phone.display}. Email: ${site.email}. Address: ${site.address}.`,
    '',
    '## Services',
    ...services.map((s) => line(`/${s.slug}`)),
    '',
    '## About and getting care',
    ...['/', '/about', '/how-to-get-started', '/insurance-information', '/faqs'].map(line),
    '',
    '## Why families choose us',
    ...['/individualized-care-plans', '/reduced-hospital-re-ad', '/patient-experience-and'].map(line),
    '',
    '## Articles',
    line('/blogs'),
    ...posts,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
