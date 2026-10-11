'use client';

import { useRef, type ReactNode, type PointerEvent } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Glow color (any CSS color). */
  color?: string;
  as?: 'div' | 'article' | 'li';
};

/** Card whose border and surface light up around the pointer. */
export default function GlowCard({ children, className = '', color = 'rgb(42 120 187 / 0.35)', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };
  return (
    <Tag
      ref={ref as never}
      onPointerMove={onMove}
      style={{ ['--glow' as string]: color }}
      className={`group/glow relative isolate overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-slate-900/5 transition-shadow duration-500 hover:shadow-glow ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100"
        style={{ background: 'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), var(--glow), transparent 60%)' }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100"
        style={{
          padding: 1,
          background: 'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), var(--glow), transparent 70%)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {children}
    </Tag>
  );
}
