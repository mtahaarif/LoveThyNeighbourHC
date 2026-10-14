'use client';

import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import RichText from '@/components/ui/RichText';
import type { Rich } from '@/content/types';

/**
 * Accordion: one item open at a time, smooth height animation, rotating plus icon. Every answer stays in
 * the HTML (collapsed with a grid-rows transition and made inert) so search engines read all of them.
 */
export default function FaqAccordion({ items }: { items: { question: string; answer: Rich }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <li
            key={item.question}
            className={`overflow-hidden rounded-[1.5rem] ring-1 transition-all duration-300 ${isOpen ? 'bg-white shadow-card ring-brand-200' : 'bg-white/70 ring-slate-900/5 hover:ring-brand-200'}`}
          >
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
              >
                <span className="flex items-center gap-4">
                  <span className={`font-display text-sm font-bold transition-colors ${isOpen ? 'text-accent-500' : 'text-brand-300'}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-xl font-bold text-brand-950 sm:text-2xl">{item.question}</span>
                </span>
                <span className={`grid size-10 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'}`}>
                  <Plus className="size-5" aria-hidden />
                </span>
              </button>
            </h2>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <RichText html={item.answer} className="px-6 pb-7 sm:px-8 sm:pl-[4.5rem]" />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
