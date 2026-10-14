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
 * figure/img/hr at extraction time) with the brand's typography.
 */
export default function RichText({ html, className = '', tone = 'light', size = 'base' }: Props) {
  return (
    <div
      className={`prose max-w-none ${size === 'lg' ? 'prose-lg' : ''} ${
        tone === 'dark' ? 'prose-invert prose-p:text-brand-100/85' : 'prose-slate prose-p:text-slate-600'
      } prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-brand-950
        prose-a:font-semibold prose-a:text-brand-600 prose-a:decoration-brand-300 prose-a:underline-offset-4 hover:prose-a:text-brand-800
        prose-strong:text-brand-900 prose-li:my-1.5 prose-hr:border-brand-100
        prose-figure:my-10 prose-img:rounded-3xl prose-img:shadow-card
        [&_ul]:list-none [&_ul]:pl-0 [&_ul>li]:relative [&_ul>li]:pl-8
        [&_ul>li]:before:absolute [&_ul>li]:before:top-[0.55em] [&_ul>li]:before:left-0 [&_ul>li]:before:grid [&_ul>li]:before:size-[1.15rem]
        [&_ul>li]:before:place-items-center [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-brand-100 [&_ul>li]:before:text-[0.65rem]
        [&_ul>li]:before:font-bold [&_ul>li]:before:leading-none [&_ul>li]:before:text-brand-600 [&_ul>li]:before:content-['✓']
        ${className}`}
      dangerouslySetInnerHTML={{ __html: optimizeImages(html) }}
    />
  );
}
