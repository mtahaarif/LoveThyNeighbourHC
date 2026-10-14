import RichText from '@/components/ui/RichText';
import type { Img, Rich } from '@/content/types';
import CoverImage from '@/components/ui/CoverImage';

/** Tall photo card: the title rests on the photo; on hover (or focus) the text rises in a glass panel. */
export default function RevealCard({ title, body, image, index }: { title: string; body: Rich; image: Img; index: number }) {
  return (
    <article
      tabIndex={0}
      className="group relative isolate h-[34rem] overflow-hidden rounded-[2.25rem] bg-brand-900 shadow-card outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
    >
      <CoverImage image={image} sizes="(min-width: 768px) 50vw, 100vw" className="-z-10 transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-transparent" />
      <span className="absolute top-6 left-6 rounded-full px-4 py-1.5 font-display text-sm font-bold text-white glass-dark">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="absolute inset-x-4 bottom-4 rounded-[1.75rem] p-6 text-white transition-all duration-500 ease-out glass-dark sm:inset-x-6 sm:bottom-6 sm:p-8">
        <h3 className="font-display text-4xl font-bold">{title}</h3>
        <div className="grid transition-all duration-500 ease-out md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100">
          <div className="overflow-hidden">
            <RichText html={body} tone="dark" className="pt-4" />
          </div>
        </div>
      </div>
    </article>
  );
}
