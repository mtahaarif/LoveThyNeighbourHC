import { ShieldCheck } from 'lucide-react';
import RichText from '@/components/ui/RichText';
import Reveal from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { home } from '@/content/home';
import CoverImage from '@/components/ui/CoverImage';

/**
 * "Your health is our priority": parallax photo, spinning dashed ring and a floating glass badge. The parallax
 * is a CSS scroll-driven animation on the section's view timeline (`.parallax` in globals.css).
 */
export default function PrioritySplit() {
  const { eyebrow, title, body, image } = home.split;

  return (
    <section className="relative overflow-hidden bg-white py-24 [view-timeline-name:--split] lg:py-32" aria-labelledby="priority-title">
      <div className="mx-auto grid max-w-[1320px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div aria-hidden className="absolute -top-10 -left-10 size-48 animate-spin-slow rounded-full border-2 border-dashed border-brand-200" />
          <div aria-hidden className="absolute -right-6 -bottom-8 size-40 rounded-[2rem] bg-accent-300/30 blur-2xl" />
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2.25rem] shadow-card">
            <div className="parallax absolute -inset-y-[10%] inset-x-0 [--parallax-from:-8%] [--parallax-timeline:--split] [--parallax-to:8%]">
              <CoverImage image={image} sizes="(min-width: 1024px) 620px, 100vw" />
            </div>
          </div>
          <div className="parallax absolute -right-3 bottom-10 [--parallax-from:60px] [--parallax-timeline:--split] [--parallax-to:-60px] rounded-3xl p-5 shadow-card glass sm:-right-8">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-teal-brand text-white">
                <ShieldCheck className="size-6" aria-hidden />
              </span>
              <div>
                <p className="text-[12px] font-bold tracking-wide text-slate-500 uppercase">AHCA-licensed</p>
                <p className="font-display text-lg font-bold text-brand-950">Medicare-certified</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <h2 id="priority-title" className="mt-5 font-display text-4xl leading-[1.05] font-bold tracking-tight text-brand-950 sm:text-6xl">
              {title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{title.split(' ').at(-1)}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="mt-7">
            <RichText html={body} size="lg" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
