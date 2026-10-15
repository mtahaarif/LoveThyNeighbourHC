import type { CSSProperties } from 'react';
import CoverImage from '@/components/ui/CoverImage';
import type { Img } from '@/content/types';

// Where each photo sits, and how far it drifts (px) and turns (deg) while the collage scrolls through view.
const slots = [
  { className: 'top-0 left-0 w-[72%] aspect-[4/5]', from: 30, to: -30, turnFrom: -4, turnTo: -1 },
  { className: 'top-[18%] right-0 w-[52%] aspect-square', from: 80, to: -60, turnFrom: 5, turnTo: 2 },
  { className: 'bottom-0 left-[14%] w-[48%] aspect-[4/3]', from: 140, to: -90, turnFrom: -2, turnTo: 3 },
];

/**
 * Three layered photos that drift apart and rotate slightly as the story scrolls by, a CSS scroll-driven
 * animation (`.parallax` in globals.css) on the collage's view timeline. Without support they rest mid-turn.
 */
export default function StoryCollage({ images }: { images: Img[] }) {
  return (
    <div className="relative mx-auto aspect-[4/4.6] w-full max-w-xl [view-timeline-name:--collage]">
      {images.slice(0, 3).map((img, i) => {
        const slot = slots[i];
        const style = {
          zIndex: i + 1,
          rotate: `${(slot.turnFrom + slot.turnTo) / 2}deg`,
          '--parallax-timeline': '--collage',
          '--parallax-from': `${slot.from}px`,
          '--parallax-to': `${slot.to}px`,
          '--rotate-from': `${slot.turnFrom}deg`,
          '--rotate-to': `${slot.turnTo}deg`,
        } as CSSProperties;
        return (
          <div key={img.src} style={style} className={`parallax absolute overflow-hidden rounded-[2rem] border-[6px] border-white bg-brand-100 shadow-card ${slot.className}`}>
            <CoverImage image={img} loading={i === 0 ? 'eager' : 'lazy'} sizes="(min-width: 1024px) 420px, 70vw" />
          </div>
        );
      })}
      <div aria-hidden className="absolute -right-6 bottom-1/4 -z-10 size-40 rounded-full bg-accent-300/40 blur-2xl" />
      <div aria-hidden className="absolute top-1/3 -left-8 -z-10 size-48 animate-spin-slow rounded-full border-2 border-dashed border-brand-200" />
    </div>
  );
}
