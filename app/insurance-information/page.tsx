import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import Marquee from '@/components/ui/Marquee';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';
import RichText from '@/components/ui/RichText';
import Button from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { insurance } from '@/content/insurance';
import { pageMetadata } from '@/content/metadata';
import type { Img } from '@/content/types';

export const metadata: Metadata = pageMetadata['/insurance-information'];

function LogoTile({ logo }: { logo: Img }) {
  return (
    <span className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-soft ring-1 ring-slate-900/5">
      <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="max-h-14 w-auto object-contain" />
    </span>
  );
}

export default function InsurancePage() {
  const { logos, cta } = insurance;
  const half = Math.ceil(logos.length / 2);
  return (
    <PageTransition>
      <PageHero background={{ desktop: '/insurance-banner-desktop.png', mobile: '/insurance-banner-mobile.png', focus: { desktop: 'center 50%', mobile: 'center 70%' } }} title={insurance.title} crumbs={[{ label: insurance.title }]} />

      {/* Two marquee rows in opposite directions */}
      <section aria-label="Insurance partners" className="space-y-5 overflow-hidden bg-gradient-to-b from-brand-50/80 to-white py-14">
        <Marquee duration={32} gap={20}>{logos.slice(0, half).concat(logos.slice(0, half)).map((l, i) => <LogoTile key={l.src + i} logo={l} />)}</Marquee>
        <Marquee duration={36} gap={20} reverse>{logos.slice(half).concat(logos.slice(half)).map((l, i) => <LogoTile key={l.src + i} logo={l} />)}</Marquee>
      </section>

      {/* Glow grid */}
      <section className="bg-white py-16 lg:py-24">
        <ul className="mx-auto grid max-w-[1320px] grid-cols-2 gap-5 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {logos.map((l, i) => (
            <Reveal as="li" key={l.src} delay={(i % 4) * 0.07}>
              <GlowCard className="flex h-40 items-center justify-center p-8">
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={l.width}
                  height={l.height}
                  className="max-h-16 w-auto object-contain opacity-70 grayscale transition-all duration-500 group-hover/glow:scale-105 group-hover/glow:opacity-100 group-hover/glow:grayscale-0"
                />
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* "We're here for you" */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal y={40} className="relative">
            <div className="relative aspect-[4/3] -rotate-2 overflow-hidden rounded-[2.25rem] shadow-card transition-transform duration-700 hover:rotate-0">
              <Image src={cta.image.src} alt={cta.image.alt} fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
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
