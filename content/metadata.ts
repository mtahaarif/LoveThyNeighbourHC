// Per-route <head> metadata. Titles and descriptions started from the original site's tags and were
// tightened for search: titles stay under 60 characters, descriptions between ~70 and 160.
import type { Metadata } from 'next';
import { posts } from './blog';

export const SITE_NAME = 'Love Thy Neighbor Home Health Care';
const DEFAULT_IMAGE = { url: '/assets/images/______-5-dcd9cfb.jpg', width: 2560, height: 1280, alt: `${SITE_NAME}, Inc.` };

type Entry = {
  title: string;
  description?: string;
  image?: { url: string; alt: string };
  type?: 'website' | 'article';
  publishedTime?: string;
  noindex?: boolean;
};

const pages: Record<string, Entry> = {
  '/': {
    title: 'Home Health Care Services by Love Thy Neighbor',
    description: 'Home health care services tailored to your needs. Experience personalized care plans, skilled nursing care, and compassionate support at home.',
  },
  '/about': {
    title: 'About Love Thy Neighbor Home Health Care Services',
    description: 'Home health care services tailored to your needs by licensed healthcare professionals. Experience compassionate, patient-centered care today.',
  },
  '/skilled-nursing-care': {
    title: 'Skilled Nursing Care at Home | Love Thy Neighbor HHC',
    description: 'Licensed nurses bring physician-supervised skilled nursing care home to support recovery, manage chronic conditions and prevent hospital stays.',
  },
  '/non-skilled-care': {
    title: 'Non-Skilled Home Care | Love Thy Neighbor HHC',
    description: 'Compassionate support with everyday living that helps your loved one stay comfortable, safe and independent in the familiar surroundings of home.',
  },
  '/private-duty-nursing': {
    title: 'Private Duty Nursing Services for Personalized Care',
    description: 'Personalized Private Duty Nursing services offering clinical supervision and home health care tailored to your unique needs.',
  },
  '/pediatric-private-nurse': {
    title: 'Pediatric Private Duty Nursing | Love Thy Neighbor HHC',
    description: 'Continuous, one-on-one pediatric nursing at home with focused attention, safety monitoring and skilled support for complex health needs.',
  },
  '/concierge-services': {
    title: 'Concierge Home Health Services | Love Thy Neighbor HHC',
    description: 'Premium, personalized home health care designed for comfort, privacy and convenience, with flexible and highly attentive support for your family.',
  },
  '/insurance-information': {
    title: 'Insurance Information | Love Thy Neighbor Home Health Care',
    description: 'Explore comprehensive insurance information for home health care and partnered insurances with various options available to meet your needs.',
  },
  '/faqs': {
    title: 'Home Health Care FAQs | Love Thy Neighbor HHC',
    description: 'Answers to common questions about our home health care services, the Florida counties we serve, accepted insurance, office hours and getting started.',
  },
  '/how-to-get-started': {
    title: 'Getting Started with Home Health Care Services',
    description: 'Discover how to get started with home health care services. Request care and support tailored to your needs today! Visit us at lovethyneighborhhc.com.',
  },
  '/blogs': {
    title: 'Home Health Care Blogs | Love Thy Neighbor HHC',
    description: 'Discover insightful home health care blogs that provide valuable information on skilled nursing care and private duty nursing.',
  },
  '/individualized-care-plans': {
    title: 'Individualized Care Plans | Love Thy Neighbor HHC',
    description: "Every home health care plan is built around the patient's medical needs, physician's recommendations and personal goals for recovery and well-being.",
  },
  '/patient-experience-and': {
    title: 'Patient Experience and Communication | Love Thy Neighbor',
    description: 'Clear, compassionate communication and partnership with patients, families and physicians at every stage of home health care, from day one to recovery.',
  },
  '/reduced-hospital-re-ad': {
    title: 'Reduced Hospital Re-Admissions | Love Thy Neighbor HHC',
    description: 'Explore our Reduced Hospital Re-Admissions services to enhance health and reduce hospital visits with quality home health care.',
  },
  '/m/login': { title: 'Login', noindex: true },
  '/m/reset': { title: 'Reset your password', noindex: true },
  '/m/create': { title: 'Set your password', noindex: true },
  '/m/create-account': { title: 'Create Account', noindex: true },
  '/m/account': { title: 'My Account', noindex: true },
  '/404': { title: 'Page Not Found', noindex: true },
};

/** Search titles and snippets for posts whose on-page title or excerpt doesn't fit a result listing. */
const postSeo: Record<string, { title?: string; description: string }> = {
  'healthcare-professionals-at-home': {
    description: 'How home health care brings skilled nursing, therapy and professional support into the comfort of home, and who may benefit from care at home.',
  },
  'embracing-compassionate-home-healthcare': {
    description: 'Recovering from surgery or managing a chronic condition at home: why compassionate home healthcare puts comfort, dignity and individual attention first.',
  },
  'the-5-essentials-every-family-should-consider-for-aging-at-home': {
    title: '5 Essentials for Aging at Home: A Family Guide',
    description: 'Aging at home takes more than staying put. The five essentials families should plan for so seniors stay safe, independent and comfortable at home.',
  },
  'love-thy-neighbor-home-health-care-incs-committment-to-achc': {
    title: 'Our Commitment to ACHC Accreditation | Love Thy Neighbor',
    description: 'What ACHC Accreditation means for families, and how Love Thy Neighbor Home Health Care upholds its standards of safety, quality and compassionate care.',
  },
  'inclusive-home-health-care-for-florida-families': {
    description: 'Medicare-certified, Medicaid-licensed home health care for Florida families, delivered with compassion, dignity and respect for every patient.',
  },
  '7-signs-my-parent-needs-home-care': {
    description: 'The early signs are often subtle. Seven signs that an aging parent may need home care, and how recognizing them early helps them stay safe at home.',
  },
  'is-home-health-care-covered-by-insurance': {
    description: 'Will insurance cover home health care? Often yes. How coverage depends on your plan, medical necessity and the specific services your loved one needs.',
  },
  'signs-your-loved-one-may-need-home-health-care': {
    description: "Small changes are easy to dismiss as normal aging. The signs that a loved one may benefit from skilled home health care, and when it's time to act.",
  },
  'patient-education-understanding-hospice-vs-home-health-care': {
    title: 'Hospice vs. Home Health Care: What Is the Difference?',
    description: 'Hospice and home health care both happen at home but serve very different purposes. A clear guide to their goals, time frames, treatment and costs.',
  },
  'building-trust-in-home-health-care-a-guide-for-families': {
    description: 'Inviting a caregiver into your home takes confidence. What families should know about choosing a home health provider they can trust with their care.',
  },
  'what-does-a-skilled-nurse-do-in-home-health-care': {
    description: 'After an illness, surgery or hospital stay, skilled nurses help patients heal, manage chronic conditions and stay healthy in the comfort of home.',
  },
  'what-is-home-health-care-and-who-qualifies-for-it': {
    description: 'What home health care includes, from skilled nursing to rehabilitation, and who qualifies for professional medical care in the comfort of home.',
  },
};

for (const p of posts) {
  const seo = postSeo[p.slug];
  pages[`/blogs/f/${p.slug}`] = {
    title: seo?.title ?? p.title,
    description: seo?.description ?? p.excerpt,
    image: { url: p.image.src, alt: p.image.alt },
    type: 'article',
    publishedTime: p.date,
  };
}

function build(path: string, e: Entry): Metadata {
  const image = e.image ?? DEFAULT_IMAGE;
  return {
    title: e.title,
    description: e.description,
    alternates: e.noindex ? undefined : { canonical: path },
    robots: e.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      url: e.noindex ? undefined : path,
      siteName: SITE_NAME,
      title: e.title,
      description: e.description,
      type: e.type ?? 'website',
      locale: 'en_US',
      images: [image],
      ...(e.publishedTime ? { publishedTime: e.publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: e.title,
      description: e.description,
      images: [image],
    },
  };
}

/** Metadata for every route, keyed by pathname. */
export const pageMetadata: Record<string, Metadata> = Object.fromEntries(
  Object.entries(pages).map(([path, e]) => [path, build(path, e)]),
);

/** Indexable routes with their search titles and descriptions (sitemap, llms.txt). */
export const indexablePages = Object.entries(pages)
  .filter(([, e]) => !e.noindex)
  .map(([path, e]) => ({ path, title: e.title, description: e.description, lastModified: e.publishedTime }));
