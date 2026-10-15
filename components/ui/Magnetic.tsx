'use client';

import { useRef, type ReactNode } from 'react';

/** Children drift toward the pointer while it is nearby, then ease back (a CSS transition on `translate`). */
export default function Magnetic({ children, strength = 0.35, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (x: number, y: number) => {
    if (ref.current) ref.current.style.translate = `${x}px ${y}px`;
  };
  return (
    <div
      ref={ref}
      className={`inline-block transition-[translate] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse' || !ref.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const r = ref.current.getBoundingClientRect();
        move((e.clientX - (r.left + r.width / 2)) * strength, (e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => move(0, 0)}
    >
      {children}
    </div>
  );
}
