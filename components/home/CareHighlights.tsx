'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, ViewTransition } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion';
import { ArrowUpRight, ClipboardList, HeartPulse, MessagesSquare } from 'lucide-react';
import { careHighlights, type CareHighlight } from '@/content/home';

const icons = [ClipboardList, HeartPulse, MessagesSquare];

type CardProps = {
  card: CareHighlight;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function StackCard({ card, index, total, progress }: CardProps) {
  const reduce = usePrefersReducedMotion();
  const Icon = icons[index % icons.length];
  // While later cards slide over this one it recedes slightly, so the stack reads with depth.
  const start = index / total;
  const targetScale = 1 - (total - 1 - index) * 0.045;
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : targetScale]);
  const dim = useTransform(progress, [start, 1], [0, reduce ? 0 : (total - 1 - index) * 0.07]);
  const number = String(index + 1).padStart(2, '0');

  return (
    <li
      className="sticky mb-[12vh] list-none lg:mb-[16vh]"
      style={{ top: `calc(var(--stack-top) + ${index} * var(--stack-step))`, zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, transformOrigin: 'top center' }}
        className="group relative flex h-[34rem] flex-col overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-slate-900/5 sm:h-[30rem] lg:h-[24.5rem] lg:flex-row"
      >
        {/* Photo */}
        <div className="relative h-52 shrink-0 overflow-hidden sm:h-56 lg:h-auto lg:w-[44%]">
          <ViewTransition name={`highlight-${card.href.slice(1)}`} share="morph" default="none">
            <div className="absolute inset-0">
            <Image
              src={card.image.src}
              alt={card.image.alt}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            </div>
          </ViewTransition>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 font-display text-sm font-bold text-brand-700 shadow-sm backdrop-blur">
            {number}
          </span>
        </div>

        {/* Copy */}
        <div className="relative flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
          <span aria-hidden className="pointer-events-none absolute -top-4 right-4 font-display text-[7rem] leading-none font-bold text-brand-50 select-none lg:text-[9rem]">
            {number}
          </span>
          <span className="relative grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
            <Icon className="size-6" aria-hidden />
          </span>
          <h3 className="relative mt-5 mb-0 font-display text-2xl leading-tight font-bold text-brand-950 sm:text-[1.75rem]">{card.title}</h3>
          <p className="relative mt-3 mb-0 text-[15px] leading-relaxed text-slate-600 sm:text-base">{card.description}</p>
          <div className="relative mt-auto pt-6">
            <Link
              href={card.href}
              className="inline-flex items-center gap-2 rounded-full bg-brand-50 py-2.5 pr-5 pl-4 text-[14px] font-bold text-brand-700 no-underline transition-all hover:bg-brand-600 hover:text-white"
            >
              Learn more<span className="sr-only"> about {card.title}</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Receding overlay */}
        <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-brand-950" />
      </motion.article>
    </li>
  );
}

export default function CareHighlights() {
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start start', 'end end'] });
  const { title, cards } = careHighlights;

  return (
    <section
      className="relative bg-gradient-to-b from-white via-brand-50/60 to-white py-20 font-sans sm:py-24 lg:py-28 [--stack-step:18px] [--stack-top:88px] lg:[--stack-step:24px] lg:[--stack-top:112px]"
      aria-labelledby="care-highlights-title"
    >
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="m-0 flex items-center gap-3 text-[12px] font-bold tracking-[0.2em] text-brand-600 uppercase">
            <span aria-hidden className="h-px w-8 bg-brand-400" /> Love Thy Neighbor
          </p>
          <h2 id="care-highlights-title" className="mt-4 mb-0 font-display text-4xl leading-[1.05] font-bold tracking-tight text-brand-950 sm:text-5xl">
            {title.split(' - ').map((part, i, all) => (
              <span key={part} className="block">
                {i === all.length - 1 ? <span className="text-brand-600">{part}</span> : part}
              </span>
            ))}
          </h2>
          <div aria-hidden className="mt-8 hidden gap-2 lg:flex">
            {cards.map((c, i) => (
              <span key={c.href} className="h-1.5 rounded-full bg-brand-200" style={{ width: i === 0 ? 48 : 24 }} />
            ))}
          </div>
        </div>

        <ul ref={listRef} className="m-0 p-0 pb-[8vh]">
          {cards.map((card, i) => (
            <StackCard key={card.href} card={card} index={i} total={cards.length} progress={scrollYProgress} />
          ))}
          {/* Sticky items keep their margin box inside the list, so this spacer is what holds the
              fully stacked state on screen for a moment before the section scrolls away. */}
          <li aria-hidden className="h-[28vh] list-none lg:h-[32vh]" />
        </ul>
      </div>
    </section>
  );
}
