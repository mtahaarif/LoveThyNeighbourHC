import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { ViewTransition, type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import type { Img } from '@/content/types';
import { absoluteUrl } from '@/lib/site-url';
import { Eyebrow } from './SectionHeading';
import JsonLd from '@/components/seo/JsonLd';

type Crumb = { label: string; href?: string };

/** Art-directed banner background: a wide image for tablets/desktops and a portrait one for phones. */
/** `focus` is the object-position (x y) that keeps the subject visible when the banner crops the photo. */
export type HeroBackground = { desktop: string; mobile: string; focus?: { desktop?: string; mobile?: string } };

type Props = {
  title: string;
  background?: HeroBackground;
  eyebrow?: string;
  description?: ReactNode;
  crumbs?: Crumb[];
  image?: Img;
  /** Shared-element name so a card image elsewhere morphs into this hero image. */
  imageTransitionName?: string;
  children?: ReactNode;
};

/** Deep-navy page header with drifting aurora light, breadcrumbs and an optional framed image. */
export default function PageHero({ title, background, eyebrow, description, crumbs = [], image, imageTransitionName, children }: Props) {
  // <picture> with two sources: each size loads only its own file (next/image still optimizes both).
  const bg = background && {
    d: getImageProps({ alt: '', fill: true, quality: 80, src: background.desktop, sizes: '100vw' }).props,
    m: getImageProps({ alt: '', fill: true, quality: 80, src: background.mobile, sizes: '100vw', loading: 'eager', fetchPriority: 'high' }).props,
  };

  return (
    <section className={`relative isolate flex items-center overflow-hidden bg-brand-950 text-white ${background ? 'min-h-[17rem] sm:min-h-[20rem] lg:min-h-[26rem] xl:min-h-[30rem]' : ''}`}>
      {bg && (
        <div aria-hidden className="absolute inset-0 -z-10">
          <picture>
            <source media="(min-width: 640px)" srcSet={bg.d.srcSet} sizes="100vw" />
            <img {...bg.m} alt="" style={{ ['--fm' as string]: background.focus?.mobile ?? 'center', ['--fd' as string]: background.focus?.desktop ?? 'center' }} className="absolute inset-0 size-full object-cover [object-position:var(--fm)] sm:[object-position:var(--fd)]" />
          </picture>
          {/* Navy wash: keeps white text readable on any photo and any crop. */}
          <div className="absolute inset-0 bg-brand-950/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/55 via-brand-950/5 to-brand-950/65" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(10_33_57/0.5),transparent_65%)]" />
        </div>
      )}
      <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${bg ? 'opacity-25' : ''}`}>
        <div className="absolute -top-40 -left-32 size-[34rem] animate-[float_14s_ease-in-out_infinite] rounded-full bg-brand-500/40 blur-3xl" />
        <div className="absolute -right-24 -bottom-48 size-[30rem] animate-[float_18s_ease-in-out_infinite_reverse] rounded-full bg-teal-brand/25 blur-3xl" />
        <div className="absolute top-10 right-1/3 size-72 rounded-full bg-accent-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className={`mx-auto grid w-full max-w-[1320px] items-center gap-12 px-4 py-16 sm:px-6 lg:px-8 ${image ? 'lg:grid-cols-[1.15fr_1fr] lg:py-20' : 'lg:py-24'}`}>
        <div className={image ? '' : 'mx-auto max-w-3xl text-center'}>
          {crumbs.length > 0 && (
            <JsonLd
              data={{
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [{ label: 'Home', href: '/' }, ...crumbs].map((c, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: c.label,
                  ...(c.href ? { item: absoluteUrl(c.href) } : {}),
                })),
              }}
            />
          )}
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="animate-rise">
              <ol className={`flex flex-wrap items-center gap-1.5 text-[13px] font-semibold text-brand-200 ${image ? '' : 'justify-center'}`}>
                {[{ label: 'Home', href: '/' }, ...crumbs].map((c, i, all) => (
                  <li key={c.label} className="flex items-center gap-1.5">
                    {c.href && i < all.length - 1 ? (
                      <Link href={c.href} className="transition-colors hover:text-white">{c.label}</Link>
                    ) : (
                      <span aria-current="page" className="text-white">{c.label}</span>
                    )}
                    {i < all.length - 1 && <ChevronRight className="size-3.5 text-brand-300/60" aria-hidden />}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && <div className={`mt-6 animate-rise [animation-delay:50ms] ${image ? '' : 'flex justify-center'}`}><Eyebrow tone="dark">{eyebrow}</Eyebrow></div>}
          <h1 className="mt-5 animate-rise font-display [animation-delay:100ms] text-4xl leading-[1.04] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <div className={`mt-6 animate-rise text-[17px] [animation-delay:180ms] leading-relaxed text-brand-100/85 ${image ? 'max-w-xl' : 'mx-auto max-w-2xl'}`}>{description}</div>
          )}
          {children && <div className="mt-8 animate-rise [animation-delay:240ms]">{children}</div>}
        </div>

        {image && (
          <div className="relative animate-settle">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-400/30 via-transparent to-teal-brand/30 blur-2xl" />
            <div className="rotate-[1.5deg] rounded-[2rem] p-2 glass-dark transition-transform duration-700 hover:rotate-0">
              <ViewTransition name={imageTransitionName} share={imageTransitionName ? 'morph' : undefined} default="none">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                  <Image src={image.src} alt={image.alt} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
                </div>
              </ViewTransition>
            </div>
          </div>
        )}
      </div>
      <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </section>
  );
}
