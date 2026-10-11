// Site navigation and contact details (labels and links from the original site).
export type NavLink = { label: string; href: string };

export const phone = { display: '+1 352-787-0499', href: 'tel:+13527870499' };
export const hours = { days: 'Mon – Fri', time: '09:00 am – 05:00 pm' };
export const location = 'Leesburg, FL';

export const services: NavLink[] = [
  { label: 'Skilled Nursing Care', href: '/skilled-nursing-care' },
  { label: 'Non-Skilled Care', href: '/non-skilled-care' },
  { label: 'Private Duty Nursing', href: '/private-duty-nursing' },
  { label: 'Pediatric Private Nurse', href: '/pediatric-private-nurse' },
  { label: 'Concierge Services', href: '/concierge-services' },
];

/** Top-level items; the former "Menu" dropdown items are promoted to the bar. */
export const primaryNav: (NavLink | { label: string; children: NavLink[] })[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', children: services },
  { label: 'Insurance Information', href: '/insurance-information' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'How to Get Started', href: '/how-to-get-started' },
  { label: 'Blogs', href: '/blogs' },
];

export const accountLinks: NavLink[] = [
  { label: 'Sign In', href: '/m/login' },
  { label: 'Create Account', href: '/m/create-account' },
];

export const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
