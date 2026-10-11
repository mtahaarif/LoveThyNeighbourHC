'use client';

import { useSyncExternalStore } from 'react';
import { site } from '@/content/site';
import { formatRange } from '@/lib/hours';

const noopSubscribe = () => () => {};
const weekday = () => new Date().toLocaleDateString('en-US', { weekday: 'long' });

/**
 * Weekly hours with today's row highlighted. "Today" comes from the visitor's clock: the server snapshot
 * (no highlight) is used while hydrating, then the client value applies.
 */
export default function HoursList({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const today = useSyncExternalStore(noopSubscribe, weekday, () => undefined);
  const dark = tone === 'dark';
  return (
    <ul className="space-y-1">
      {site.hours.map((d) => {
        const isToday = d.day === today;
        return (
          <li
            key={d.day}
            className={`flex items-center justify-between gap-4 rounded-xl px-3 py-2 text-[14px] transition-colors ${
              isToday ? (dark ? 'bg-white/10 text-white' : 'bg-brand-50 text-brand-900') : dark ? 'text-brand-100/80' : 'text-slate-600'
            }`}
          >
            <span className="flex items-center gap-2 font-semibold">
              {isToday && <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgb(16_185_129/0.2)]" aria-hidden />}
              {d.day}
              {isToday && <span className="sr-only">(today)</span>}
            </span>
            <span className={d.open ? '' : 'opacity-60'}>{formatRange(d, site.hoursLabels.closed)}</span>
          </li>
        );
      })}
    </ul>
  );
}
