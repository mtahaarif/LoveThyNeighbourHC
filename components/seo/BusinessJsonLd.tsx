import JsonLd from './JsonLd';
import { SITE_NAME } from '@/content/metadata';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { absoluteUrl } from '@/lib/site-url';

const dayNames = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' } as const;

/** The agency as a local medical business: address, phone, hours, service area and services (home page). */
export default function BusinessJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        '@id': absoluteUrl('/#business'),
        name: `${SITE_NAME}, Inc.`,
        url: absoluteUrl('/'),
        logo: absoluteUrl('/assets/images/Love-Thy-Neighbor-Home-Health-Care-Inc-1-f16b93ab.png'),
        image: absoluteUrl('/home-banner-1.jpg'),
        telephone: site.phone.href.replace('tel:', ''),
        email: site.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2620 Industrial St Ste 110',
          addressLocality: 'Leesburg',
          addressRegion: 'FL',
          postalCode: '34748',
          addressCountry: 'US',
        },
        geo: { '@type': 'GeoCoordinates', latitude: site.map.lat, longitude: site.map.lng },
        areaServed: ['Lake County', 'Marion County', 'Citrus County', 'Sumter County'].map((name) => ({
          '@type': 'AdministrativeArea',
          name: `${name}, Florida`,
        })),
        openingHoursSpecification: site.hours
          .filter((d) => d.open && d.close)
          .map((d) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: dayNames[d.short as keyof typeof dayNames], opens: d.open, closes: d.close })),
        sameAs: site.social.map((s) => s.href).filter((h) => !h.endsWith('/page')),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Home health care services',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, url: absoluteUrl(`/${s.slug}`), description: s.summary },
          })),
        },
      }}
    />
  );
}
