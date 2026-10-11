'use client';

import { motion, useScroll, useSpring } from 'motion/react';

/** Thin brand-gradient bar along the top edge showing how far the page has been read. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-brand-500 via-teal-brand to-accent-400"
    />
  );
}
