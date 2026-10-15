import FooterView from './FooterView';
import { site } from '@/content/site';
import { careHighlights, home } from '@/content/home';
import { services } from '@/content/services';
import { formatRange, groupHours } from '@/lib/hours';
import { primaryNav } from '@/content/navigation';

// Footer links use the navigation's labels (the original footer listed them in upper case).
const navLabel = new Map(primaryNav.flatMap((i) => ('children' in i ? i.children : [i])).map((l) => [l.href, l.label]));

const serviceHrefs = new Set(services.map((s) => `/${s.slug}`));

// Descriptive footer wording, so links to the same page don't all repeat the navbar's one-word labels.
const footerLabel: Record<string, string> = {
  '/': 'Home Page',
  '/about': 'About Our Agency',
  '/insurance-information': 'Insurance & Coverage',
  '/faqs': 'Frequently Asked Questions',
  '/how-to-get-started': 'Start Home Health Care',
  '/blogs': 'Home Health Care Blog',
};

/** Builds the footer's plain data on the server; `FooterView` renders it. */
export default function SiteFooter() {
  return (
    <FooterView
      services={services.map(({ slug, title, navLabel: label }) => ({ slug, title, navLabel: label }))}
      quickLinks={site.footerLinks
        .filter((l) => !serviceHrefs.has(l.href))
        .map((l) => ({ href: l.href, label: footerLabel[l.href] ?? navLabel.get(l.href) ?? l.label }))}
      highlights={careHighlights.cards.map(({ href, title }) => ({ href, title }))}
      intro={home.contact.intro}
      socialTitle={site.socialTitle}
      social={site.social.map(({ href, label }) => ({ href, label }))}
      contactTitle={home.contact.title}
      address={site.address}
      phone={site.phone}
      email={site.email}
      hours={groupHours(site.hours).map((g) => ({ label: g.label, range: formatRange(g.hours, site.hoursLabels.closed) }))}
      copyright={site.copyright}
      domain={site.domain}
    />
  );
}
