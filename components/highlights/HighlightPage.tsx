import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';
import HighlightTimeline from './HighlightTimeline';
import { careHighlights } from '@/content/home';
import type { Highlight } from '@/content/types';

/** Detail page for one of the home "Better Skills - Better Care - Better Results" cards. */
export default function HighlightPage({ highlight }: { highlight: Highlight }) {
  const href = `/${highlight.slug}`;
  const card = careHighlights.cards.find((c) => c.href === href);
  const others = careHighlights.cards.filter((c) => c.href !== href);
  return (
    <PageTransition>
      <PageHero
        title={highlight.title}
        eyebrow={careHighlights.title}
        description={card?.description}
        crumbs={[{ label: highlight.title }]}
        image={card?.image}
        imageTransitionName={`highlight-${highlight.slug}`}
      />

      <section className="bg-gradient-to-b from-white via-brand-50/50 to-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <HighlightTimeline sections={highlight.sections} />
        </div>
      </section>

      <section aria-labelledby="related-highlights" className="bg-white pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="related-highlights" className="font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">{careHighlights.title}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {others.map((c, i) => (
              <Reveal key={c.href} delay={i * 0.1}>
                <GlowCard className="h-full">
                  <Link href={c.href} className="group grid h-full sm:grid-cols-[42%_1fr]">
                    <div className="relative h-56 overflow-hidden sm:h-full">
                      <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 768px) 260px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col p-7">
                      <h3 className="font-display text-2xl font-bold text-brand-950">{c.title}</h3>
                      <p className="mt-3 line-clamp-4 text-[15px] leading-relaxed text-slate-600">{c.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-bold text-brand-600">
                        Learn more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
