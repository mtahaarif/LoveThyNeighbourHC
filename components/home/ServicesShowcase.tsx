'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion';
import { MoveRight } from 'lucide-react';
import ServiceCard from '@/components/services/ServiceCard';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { services } from '@/content/services';
import { home } from '@/content/home';
import { useMediaQuery } from '@/lib/use-media-query';

/**
 * "The Services We Offer". On desktop the section pins and vertical scrolling drives the cards
 * sideways; on touch screens it is a native swipe carousel with snap points.
 */
export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const pinned = useMediaQuery('(min-width: 1024px)') && !reduce;
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-title"
      className="relative bg-gradient-to-b from-brand-50/70 to-white"
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={pinned ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden' : 'py-20'}>
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Love Thy Neighbor</Eyebrow>
              <h2 id="services-title" className="mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tight text-brand-950 sm:text-6xl">
                {home.servicesTitle}
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[14px] font-bold text-brand-700">
              {pinned ? 'Scroll to explore' : 'Swipe to explore'}
              <MoveRight className="size-5 animate-[float_2.4s_ease-in-out_infinite] rotate-0" aria-hidden />
            </div>
          </div>
          {pinned && (
            <div aria-hidden className="mt-8 h-1 overflow-hidden rounded-full bg-brand-100">
              <motion.div style={{ width: progress }} className="h-full rounded-full bg-gradient-to-r from-brand-500 to-teal-brand" />
            </div>
          )}
        </div>

        <div ref={viewportRef} className={`mt-10 ${pinned ? 'overflow-visible' : 'overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'}`}>
          <motion.div
            ref={trackRef}
            style={pinned ? { x } : undefined}
            className={`flex w-max gap-6 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-1320px)/2+2rem))] ${pinned ? '' : 'snap-x snap-mandatory pb-4'}`}
          >
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} className="w-[82vw] snap-start sm:w-[24rem] lg:w-[26rem]" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
