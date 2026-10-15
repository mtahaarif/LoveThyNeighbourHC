import { MoveRight } from 'lucide-react';
import ServiceCard from '@/components/services/ServiceCard';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { services } from '@/content/services';
import { home } from '@/content/home';

/**
 * "The Services We Offer". On desktop the section pins and vertical scrolling drives the cards sideways; on
 * touch screens it is a native swipe carousel with snap points. The pinned mode is pure CSS (`.svc-*` in
 * globals.css, a scroll-driven animation on the section's view timeline); browsers without scroll timelines,
 * and visitors who prefer reduced motion, get the swipe carousel at every width.
 */
export default function ServicesShowcase() {
  return (
    <section id="services" aria-labelledby="services-title" className="svc-section relative bg-gradient-to-b from-brand-50/70 to-white">
      <div className="svc-pin py-20">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Love Thy Neighbor</Eyebrow>
              <h2 id="services-title" className="mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tight text-brand-950 sm:text-6xl">
                {home.servicesTitle}
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[14px] font-bold text-brand-700">
              <span className="svc-hint-swipe">Swipe to explore</span>
              <span className="svc-hint-scroll">Scroll to explore</span>
              <MoveRight className="size-5 animate-[float_2.4s_ease-in-out_infinite]" aria-hidden />
            </div>
          </div>
          <div aria-hidden className="svc-bar mt-8 h-1 overflow-hidden rounded-full bg-brand-100">
            <span className="block h-full rounded-full bg-gradient-to-r from-brand-500 to-teal-brand" />
          </div>
        </div>

        <div className="svc-viewport mt-10 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="svc-track flex w-max gap-6 px-4 pb-4 sm:px-6 lg:px-[max(2rem,calc((100vw-1320px)/2+2rem))]">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} className="w-[82vw] snap-start sm:w-[24rem] lg:w-[26rem]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
