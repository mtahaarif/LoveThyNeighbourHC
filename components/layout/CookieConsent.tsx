'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Cookie } from 'lucide-react';
import { site } from '@/content/site';

const COOKIE = 'cookie_terms';
const ONE_YEAR = 60 * 60 * 24 * 365;

/** Glass toast with the original cookie notice; hidden for good once accepted. */
export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (document.cookie.split(/;\s*/).some((c) => c === `${COOKIE}=accepted`)) return;
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const accept = () => {
    document.cookie = `${COOKIE}=accepted; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label={site.cookie.title}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="fixed right-4 bottom-4 left-4 z-[75] max-w-md rounded-3xl p-5 shadow-card glass sm:left-auto"
        >
          <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
              <Cookie className="size-5" aria-hidden />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-brand-950">{site.cookie.title}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">{site.cookie.message}</p>
              <button
                type="button"
                onClick={accept}
                className="mt-4 cursor-pointer rounded-full bg-brand-600 px-6 py-2.5 text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-700"
              >
                {site.cookie.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
