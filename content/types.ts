// Shapes for the site content. The data files in this folder are generated from the original site
// (scripts/extract-content.mjs) so wording and images stay identical to the original.

export type Img = { src: string; width: number; height: number; alt: string };

/** Sanitized HTML (p, strong, em, a, br, ul, ol, li, h2–h4, figure/img, hr) from the original site. */
export type Rich = string;

export type Link = { label: string; href: string };

export type Section = { heading: string; body: Rich };

export type DayHours = { day: string; short: string; open: string | null; close: string | null };

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  image: Img;
  /** First paragraph of the service description, for cards. */
  summary: string;
  sections: Section[];
  cta: { heading: string; body: Rich; button: Link };
};

export type Highlight = { slug: string; title: string; sections: Section[] };

export type FieldType = 'text' | 'email' | 'password' | 'tel' | 'textarea';
export type Field = { name: string; label: string; type: FieldType; required?: boolean; autoComplete?: string };

export type AccountPage = {
  title: string;
  message?: string;
  fields: Field[];
  submit: string;
  links: Link[];
  note?: { text: string; link: Link };
};

export type BlogPost = {
  slug: string;
  title: string;
  /** ISO publish date. */
  date: string;
  image: Img;
  categories: string[];
  excerpt: string;
  html: Rich;
  readingMinutes: number;
};
