'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion';
import type { Img } from '@/content/types';

/** Three layered photos that drift apart and rotate slightly as the story scrolls by. */
export default function StoryCollage({ images }: { images: Img[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const range = (a: number, b: number) => (reduce ? [0, 0] : [a, b]);
  const y0 = useTransform(scrollYProgress, [0, 1], range(30, -30));
  const y1 = useTransform(scrollYProgress, [0, 1], range(80, -60));
  const y2 = useTransform(scrollYProgress, [0, 1], range(140, -90));
  const r0 = useTransform(scrollYProgress, [0, 1], range(-4, -1));
  const r1 = useTransform(scrollYProgress, [0, 1], range(5, 2));
  const r2 = useTransform(scrollYProgress, [0, 1], range(-2, 3));
  const t = [{ y: y0, rotate: r0 }, { y: y1, rotate: r1 }, { y: y2, rotate: r2 }];
  const slots = ['top-0 left-0 w-[72%] aspect-[4/5]', 'top-[18%] right-0 w-[52%] aspect-square', 'bottom-0 left-[14%] w-[48%] aspect-[4/3]'];

  return (
    <div ref={ref} className="relative mx-auto aspect-[4/4.6] w-full max-w-xl">
      {images.slice(0, 3).map((img, i) => (
        <motion.div
          key={img.src}
          style={{ y: t[i].y, rotate: t[i].rotate, zIndex: i + 1 }}
          className={`absolute overflow-hidden rounded-[2rem] border-[6px] border-white bg-brand-100 shadow-card ${slots[i]}`}
        >
          <Image src={img.src} alt={img.alt} fill loading={i === 0 ? 'eager' : 'lazy'} sizes="(min-width: 1024px) 420px, 70vw" className="object-cover" />
        </motion.div>
      ))}
      <div aria-hidden className="absolute -right-6 bottom-1/4 -z-10 size-40 rounded-full bg-accent-300/40 blur-2xl" />
      <div aria-hidden className="absolute top-1/3 -left-8 -z-10 size-48 animate-spin-slow rounded-full border-2 border-dashed border-brand-200" />
    </div>
  );
}
