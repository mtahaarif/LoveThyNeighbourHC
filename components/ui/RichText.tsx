import { getImageProps } from 'next/image';
import type { Rich } from '@/content/types';

type Props = { html: Rich; className?: string; tone?: 'light' | 'dark'; size?: 'base' | 'lg' };

const attr = (tag: string, name: string) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const escape = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/**
 * Routes the article's own <img> tags through the Next.js image optimizer (AVIF/WebP, responsive srcset)
 * exactly as <Image> would, keeping their intrinsic width/height so the layout never shifts.
 */
function optimizeImages(html: string) {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = attr(tag, 'src');
    const width = Number(attr(tag, 'width'));
    const height = Number(attr(tag, 'height'));
    if (!src?.startsWith('/') || !width || !height) return tag;
    const alt = attr(tag, 'alt') ?? '';
    const { props } = getImageProps({ src, width, height, alt, sizes: '(min-width: 768px) 768px, 100vw' });
    return `<img alt="${alt}" src="${escape(props.src)}" srcset="${escape(props.srcSet ?? '')}" sizes="${props.sizes}" width="${props.width}" height="${props.height}" loading="lazy" decoding="async" data-nimg="1">`;
  });
}

/**
 * Renders sanitized HTML from the original site (tags limited to p/strong/em/a/br/lists/headings/
 * figure/img/hr at extraction time) with the brand's typography (`.rich` in globals.css).
 */
export default function RichText({ html, className = '', tone = 'light', size = 'base' }: Props) {
  return (
    <div
      className={`rich ${size === 'lg' ? 'rich-lg' : ''} ${tone === 'dark' ? 'rich-dark' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: optimizeImages(html) }}
    />
  );
}
