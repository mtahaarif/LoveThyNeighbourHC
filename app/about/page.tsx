import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import RichText from '@/components/ui/RichText';
import Reveal from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/SectionHeading';
import StoryCollage from '@/components/about/StoryCollage';
import RevealCard from '@/components/about/RevealCard';
import CtaBand from '@/components/home/CtaBand';
import { about } from '@/content/about';
import { home } from '@/content/home';
import { site } from '@/content/site';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/about'];

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero background={{ desktop: '/about-banner-desktop.png', mobile: '/about-banner-mobile.png', focus: { desktop: 'center 60%', mobile: 'center 65%' } }} title={about.title} eyebrow={site.name} description={about.headline} crumbs={[{ label: 'About' }]} />

      {/* Sticky collage beside the scrolling story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <StoryCollage images={[home.split.image, ...about.cards.map((c) => c.image)]} />
          </div>
          <div>
            <Reveal><Eyebrow>{site.name}</Eyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 font-display text-4xl leading-[1.08] font-bold tracking-tight text-brand-950 sm:text-5xl">{about.headline}</h2>
            </Reveal>
            <Reveal delay={0.12} className="mt-8">
              <RichText html={about.body} size="lg" className="prose-p:mb-7 [&>p:first-child]:text-xl [&>p:first-child]:font-medium [&>p:first-child]:text-brand-900" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section aria-label="Mission and vision" className="bg-gradient-to-b from-brand-50/70 to-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {about.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12} y={40}>
              <RevealCard title={c.title} body={c.body} image={c.image} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageTransition>
  );
}
