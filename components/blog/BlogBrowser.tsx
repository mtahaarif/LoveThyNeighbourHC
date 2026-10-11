'use client';

import { useState, type ReactNode } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import type { BlogPost } from '@/content/types';

type Props = {
  categories: string[];
  posts: BlogPost[];
  /** Pre-rendered cards keyed by slug (server components, so the shared-element names stay server-rendered). */
  cards: Record<string, ReactNode>;
  featured: ReactNode;
  featuredSlug: string;
};

/** Category tabs with a sliding pill and a grid that re-flows with layout animation when filtering. */
export default function BlogBrowser({ categories, posts, cards, featured, featuredSlug }: Props) {
  const [active, setActive] = useState(categories[0]);
  const all = active === categories[0];
  const visible = all ? posts.filter((p) => p.slug !== featuredSlug) : posts.filter((p) => p.categories.includes(active));

  return (
    <div>
      <LayoutGroup>
        <div role="tablist" aria-label="Categories" className="inline-flex rounded-full bg-brand-50 p-1.5 ring-1 ring-brand-100">
          {categories.map((c) => {
            const selected = c === active;
            return (
              <button
                key={c}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setActive(c)}
                className={`relative cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-bold transition-colors ${selected ? 'text-white' : 'text-brand-800 hover:text-brand-600'}`}
              >
                {selected && <motion.span layoutId="blog-tab" className="absolute inset-0 -z-0 rounded-full bg-brand-600 shadow-soft" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                <span className="relative">{c}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <AnimatePresence initial={false}>
        {all && (
          <motion.div key="featured" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="pt-10">{featured}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.ul layout className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              {cards[p.slug]}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
