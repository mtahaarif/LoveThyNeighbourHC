import RichText from '@/components/ui/RichText';
import type { Section } from '@/content/types';

/**
 * Sections on a vertical timeline whose line fills, and whose steps light up, as the reader scrolls. Both are
 * CSS scroll-driven animations (`.timeline-*` in globals.css); without support the timeline shows fully lit.
 */
export default function HighlightTimeline({ sections }: { sections: Section[] }) {
  return (
    <ol className="relative [view-timeline-name:--timeline]">
      <span aria-hidden className="absolute top-2 bottom-2 left-7 w-1 -translate-x-1/2 rounded-full bg-brand-100 sm:left-9" />
      <span
        aria-hidden
        className="timeline-fill absolute top-2 bottom-2 left-7 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-500 via-teal-brand to-accent-400 sm:left-9"
      />
      {sections.map((section, index) => (
        <li key={section.heading} className="relative grid grid-cols-[3.5rem_1fr] gap-6 pb-16 [view-timeline-name:--step] last:pb-0 sm:grid-cols-[4.5rem_1fr] sm:gap-10">
          <span className="timeline-dot relative z-10 grid size-14 place-items-center rounded-2xl bg-brand-600 font-display text-xl font-bold text-white shadow-soft sm:size-[4.5rem] sm:text-2xl">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="timeline-card rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-slate-900/5 sm:p-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950">{section.heading}</h2>
            <RichText html={section.body} className="mt-4" />
          </div>
        </li>
      ))}
    </ol>
  );
}
