'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion';
import { ArrowRight, BadgeCheck, Clock3, MapPin, Phone } from 'lucide-react';
import { hours, location, phone } from '@/content/navigation';

const AUTOPLAY_MS = 7000; // the original slideshow's autoplay delay

// The original hero photos. Their left third carries baked-in text, so they are shown cropped to the right.
const slides = [
  { src: '/assets/images/______-5-dcd9cfb.jpg', alt: 'A nurse gently listening to a young girl’s heartbeat with a stethoscope' },
  { src: '/assets/images/______-3-78858ae-35ab50cb.jpg', alt: 'A smiling caregiver with an elderly woman outdoors' },
  { src: '/assets/images/______-4-01576d2-279b0d60.jpg', alt: 'A nurse in blue scrubs in a bright clinic room' },
  { src: '/assets/images/______-2-a51d902-d8a3366f.jpg', alt: 'A therapist supporting a patient during in-home care' },
];

const credentials = ['Medicare-certified', 'Medicaid-licensed', 'AHCA-licensed'];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, reduce]);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white font-sans">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 size-[28rem] rounded-full bg-brand-200/50 blur-3xl" />
        <div className="absolute top-24 right-[-8rem] size-[26rem] rounded-full bg-accent-300/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgb(17_87_147/0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:px-8 lg:pt-14 lg:pb-20">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.p {...fadeUp(0)} className="m-0 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[12px] font-bold tracking-wide text-brand-700 shadow-sm ring-1 ring-brand-100">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-500/70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
            </span>
            Love Thy Neighbor Home Health Care, Inc
          </motion.p>

          <motion.h1 {...fadeUp(0.08)} className="mt-5 mb-0 font-display text-[2.6rem] leading-[1.02] font-bold tracking-tight text-brand-950 sm:text-6xl lg:text-[4.1rem]">
            Better Skills, Better Care,{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-teal-brand bg-clip-text text-transparent">Better Results</span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-5 mb-0 max-w-lg text-[17px] leading-relaxed text-slate-600">
            Your health and comfort matter—contact us now to get started with personalized home care services.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href={phone.href} className="group inline-flex items-center gap-2.5 rounded-full bg-brand-600 py-3 pr-6 pl-3 text-[15px] font-bold text-white no-underline shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-700">
              <span className="grid size-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:rotate-12"><Phone className="size-4" aria-hidden /></span>
              Call Us
            </a>
            <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-brand-800 no-underline shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:ring-brand-300">
              The Services We Offer
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </motion.div>

          <motion.ul {...fadeUp(0.32)} className="mt-9 mb-0 flex list-none flex-wrap gap-x-6 gap-y-3 p-0">
            {credentials.map((c) => (
              <li key={c} className="flex items-center gap-2 text-[14px] font-semibold text-slate-700">
                <BadgeCheck className="size-5 text-brand-500" aria-hidden />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:pl-4"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[2rem] bg-brand-100 shadow-card ring-1 ring-black/5">
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                <motion.div
                  className="absolute inset-0 origin-right"
                  initial={{ scale: reduce ? 1.12 : 1.2 }}
                  animate={{ scale: 1.12 }}
                  transition={{ duration: AUTOPLAY_MS / 1000 + 1, ease: 'linear' }}
                >
                  <Image
                    src={slides[index].src}
                    alt={slides[index].alt}
                    fill
                    loading="eager"
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    sizes="(min-width: 1024px) 1100px, 200vw"
                    className="object-cover object-right"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent" />

            {/* Slide progress */}
            <div className="absolute right-5 bottom-5 flex gap-1.5" role="tablist" aria-label="Choose slide">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="relative h-1.5 w-9 cursor-pointer overflow-hidden rounded-full border-0 bg-white/40 p-0"
                >
                  {i === index && (
                    <span
                      key={index}
                      className={`absolute inset-0 origin-left rounded-full bg-white ${reduce ? '' : 'animate-progress'}`}
                      style={{ ['--progress-duration' as string]: `${AUTOPLAY_MS}ms` }}
                    />
                  )}
                  {i < index && <span className="absolute inset-0 rounded-full bg-white/80" />}
                </button>
              ))}
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{ opacity: { delay: 0.6, duration: 0.6 }, y: { delay: 1.2, duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute -bottom-6 left-3 flex items-center gap-3 rounded-2xl bg-white/90 p-3.5 pr-5 shadow-card ring-1 ring-slate-900/5 backdrop-blur-md sm:left-6 lg:-left-6"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-brand-600 text-white"><Clock3 className="size-5" aria-hidden /></span>
            <span className="flex flex-col">
              <span className="text-[12px] font-bold tracking-wide text-slate-500 uppercase">Hours · {hours.days}</span>
              <span className="text-[15px] font-bold text-brand-950">{hours.time}</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-2 text-[13px] font-bold text-brand-800 shadow-soft backdrop-blur-md"
          >
            <MapPin className="size-4 text-accent-500" aria-hidden /> {location}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
