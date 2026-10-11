'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import RichText from '@/components/ui/RichText';
import type { Section } from '@/content/types';

function Step({ section, index }: { section: Section; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'start 35%'] });
  const active = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotScale = useTransform(active, [0, 1], [0.85, 1]);
  const dotBg = useTransform(active, [0, 1], ['#d8eaf7', '#115793']);
  const dotColor = useTransform(active, [0, 1], ['#115793', '#ffffff']);
  const cardOpacity = useTransform(active, [0, 1], [0.45, 1]);
  const cardX = useTransform(active, [0, 1], [24, 0]);

  return (
    <li ref={ref} className="relative grid grid-cols-[3.5rem_1fr] gap-6 pb-16 last:pb-0 sm:grid-cols-[4.5rem_1fr] sm:gap-10">
      <motion.span
        style={{ scale: dotScale, backgroundColor: dotBg, color: dotColor }}
        className="relative z-10 grid size-14 place-items-center rounded-2xl font-display text-xl font-bold shadow-soft sm:size-[4.5rem] sm:text-2xl"
      >
        {String(index + 1).padStart(2, '0')}
      </motion.span>
      <motion.div style={{ opacity: cardOpacity, x: cardX }} className="rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-slate-900/5 sm:p-10">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950">{section.heading}</h2>
        <RichText html={section.body} className="mt-4" />
      </motion.div>
    </li>
  );
}

/** Sections on a vertical timeline whose line fills as the reader scrolls. */
export default function HighlightTimeline({ sections }: { sections: Section[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className="absolute top-2 bottom-2 left-7 w-1 -translate-x-1/2 rounded-full bg-brand-100 sm:left-9" />
      <motion.span
        aria-hidden
        style={{ scaleY: fill }}
        className="absolute top-2 bottom-2 left-7 w-1 origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-500 via-teal-brand to-accent-400 sm:left-9"
      />
      {sections.map((s, i) => <Step key={s.heading} section={s} index={i} />)}
    </ol>
  );
}
