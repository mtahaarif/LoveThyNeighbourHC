import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import Marquee from '@/components/ui/Marquee';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';
import RichText from '@/components/ui/RichText';
import Button from '@/components/ui/Button';
import SectionHeading, { Eyebrow } from '@/components/ui/SectionHeading';
import { coverage, insurance } from '@/content/insurance';
import { pageMetadata } from '@/content/metadata';
import type { Img } from '@/content/types';
import CoverImage from '@/components/ui/CoverImage';

export const metadata: Metadata = pageMetadata['/insurance-information'];

// Decorative: the same logos are listed (with names and alt text) in the grid below.
function LogoTile({ logo }: { logo: Img }) {
  return (
    <span className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-soft ring-1 ring-slate-900/5">
      <Image src={logo.src} alt="" width={logo.width} height={logo.height} className="max-h-14 w-auto object-contain" />
    </span>
  );
}

export default function InsurancePage() {
  const { logos, cta } = insurance;
  const half = Math.ceil(logos.length / 2);
  return (
    <PageTransition>
      <PageHero background={{ desktop: '/insurance-banner-desktop.jpg', mobile: '/insurance-banner-mobile.jpg', focus: { desktop: 'center 50%', mobile: 'center 70%' } }} title={insurance.title} crumbs={[{ label: insurance.title }]} />

      {/* Two marquee rows in opposite directions */}
      <section aria-hidden className="space-y-5 overflow-hidden bg-gradient-to-b from-brand-50/80 to-white py-14">
        <Marquee duration={32} gap={20}>{logos.slice(0, half).concat(logos.slice(0, half)).map((l, i) => <LogoTile key={l.src + i} logo={l} />)}</Marquee>
        <Marquee duration={36} gap={20} reverse>{logos.slice(half).concat(logos.slice(half)).map((l, i) => <LogoTile key={l.src + i} logo={l} />)}</Marquee>
      </section>

      {/* Glow grid */}
      <section aria-labelledby="partners-title" className="bg-white py-16 lg:py-24">
        <h2 id="partners-title" className="mx-auto mb-10 max-w-[1320px] px-4 text-center font-display text-3xl font-bold tracking-tight text-brand-950 sm:px-6 sm:text-4xl lg:px-8">Our Partnered Insurances</h2>
        <ul className="mx-auto grid max-w-[1320px] grid-cols-2 gap-5 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {logos.map((l, i) => (
            <Reveal as="li" key={l.src} delay={(i % 4) * 0.07}>
              <GlowCard className="flex h-44 flex-col items-center justify-center gap-4 p-6">
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={l.width}
                  height={l.height}
                  className="max-h-16 w-auto object-contain opacity-70 grayscale transition-all duration-500 group-hover/glow:scale-105 group-hover/glow:opacity-100 group-hover/glow:grayscale-0"
                />
                <span className="text-center text-[14px] font-bold text-brand-900">{l.name}</span>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* How coverage works */}
      <section aria-labelledby="coverage-title" className="bg-gradient-to-b from-white to-brand-50/60 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading id="coverage-title" eyebrow={coverage.eyebrow} title={coverage.title} description={coverage.intro} align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-brand-950 p-8 text-white sm:p-10">
              <div aria-hidden className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-brand-500/40 blur-3xl" />
              <h3 className="font-display text-3xl font-bold">{coverage.coveredTitle}</h3>
              <ul className="mt-6 space-y-3.5">
                {coverage.covered.map((c) => (
                  <li key={c} className="flex gap-3 text-[16px] leading-relaxed text-brand-50">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-400" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-white/10 pt-5 text-[14px] leading-relaxed text-brand-100/75">{coverage.coveredNote}</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-900/5 sm:p-10">
              <h3 className="font-display text-3xl font-bold text-brand-950">{coverage.factorsTitle}</h3>
              <ol className="mt-6 space-y-5">
                {coverage.factors.map((f, i) => (
                  <li key={f.title} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 font-display text-lg font-bold text-brand-600 ring-1 ring-brand-100">{i + 1}</span>
                    <p className="text-[16px] leading-relaxed text-slate-600"><strong className="text-brand-950">{f.title}.</strong> {f.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] p-7 shadow-card glass sm:p-8 md:flex-row md:items-center">
            <p className="max-w-3xl text-[16px] leading-relaxed text-slate-700">{coverage.help}</p>
            <Link href={coverage.article.href} className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-bold text-brand-600 hover:text-brand-800">
              {coverage.article.label}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* "We're here for you" */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal y={40} className="relative">
            <div className="relative aspect-[4/3] -rotate-2 overflow-hidden rounded-[2.25rem] shadow-card transition-transform duration-700 hover:rotate-0">
              <CoverImage image={cta.image} sizes="(min-width: 1024px) 620px, 100vw" />
            </div>
            <div aria-hidden className="absolute -bottom-8 -left-8 -z-10 size-48 rounded-full bg-teal-brand/30 blur-3xl" />
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] p-8 shadow-card glass sm:p-12 lg:-ml-24">
            <Eyebrow>{cta.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">{cta.title}</h2>
            <RichText html={cta.body} className="mt-5" />
            <Button href={cta.button.href} iconRight={<ArrowRight className="size-4" aria-hidden />} className="mt-8">{cta.button.label}</Button>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
