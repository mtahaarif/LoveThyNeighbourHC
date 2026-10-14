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
      <PageHero background={{ desktop: '/about-banner-desktop.jpg', mobile: '/about-banner-mobile.jpg', focus: { desktop: 'center 60%', mobile: 'center 65%' } }} title={about.title} eyebrow={site.name} description={about.headline} crumbs={[{ label: 'About' }]} />

      {/* Sticky collage beside the scrolling story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* The mission/vision photos are described on their cards below, so here they are decorative. */}
            <StoryCollage images={[home.split.image, ...about.cards.map((c) => ({ ...c.image, alt: '' }))]} />
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
        {/* Phones: block layout so the cards can be sticky and stack vertically as you scroll (a sticky grid item
            can't leave its own row). From md up it is the original two-column grid. */}
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:grid md:grid-cols-2 md:gap-6 lg:px-8">
          {about.cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.12}
              y={40}
              className="sticky mb-[14vh] md:static md:mb-0"
              style={{ top: `${88 + i * 18}px`, zIndex: i + 1 }}
            >
              <RevealCard title={c.title} body={c.body} image={c.image} index={i} />
            </Reveal>
          ))}
          {/* Holds the fully stacked state on screen for a moment before the section scrolls away. */}
          <div aria-hidden className="h-[45vh] md:hidden" />
        </div>
      </section>

      <CtaBand />
    </PageTransition>
  );
}
