import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Seconds per loop. */
  duration?: number;
  reverse?: boolean;
  gap?: number;
  className?: string;
  /** Fade the edges into the background. */
  fade?: boolean;
};

/** Infinite horizontal loop (pure CSS). Content is duplicated once; hover pauses it. */
export default function Marquee({ children, duration = 40, reverse = false, gap = 48, className = '', fade = true }: Props) {
  const style = { '--marquee-duration': `${duration}s`, '--marquee-gap': `${gap}px`, gap: `${gap}px` } as CSSProperties;
  return (
    <div
      className={`group relative flex overflow-hidden ${fade ? '[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]' : ''} ${className}`}
    >
      <div
        className={`flex w-max shrink-0 items-center group-hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={style}
      >
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>{children}</div>
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }} aria-hidden>{children}</div>
      </div>
    </div>
  );
}
