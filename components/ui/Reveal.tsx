import type { CSSProperties, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement> & {
  /** Stagger, in seconds; shifts where in the scroll the element starts appearing. */
  delay?: number;
  /** Distance travelled while fading in (px). */
  y?: number;
  x?: number;
  as?: 'div' | 'li' | 'section' | 'article' | 'span';
};

/**
 * Fades and slides its children in as they scroll into view, using a CSS scroll-driven animation (`.reveal` in
 * globals.css). No JavaScript, so nothing waits on hydration and the content is fully visible in the HTML.
 * Browsers without `animation-timeline` support, and visitors who prefer reduced motion, see the content as is.
 */
export default function Reveal({ delay = 0, y = 28, x = 0, as: Tag = 'div', className = '', style, children, ...rest }: Props) {
  // Stagger via one of eight predefined classes (no inline style); only a non-default distance needs a variable.
  const step = Math.min(8, Math.round(delay / 0.05));
  const vars = {
    ...(y !== 28 ? { '--reveal-y': `${y}px` } : {}),
    ...(x !== 0 ? { '--reveal-x': `${x}px` } : {}),
    ...style,
  } as CSSProperties;
  return (
    <Tag className={`reveal ${step ? `reveal-s${step}` : ''} ${className}`} style={Object.keys(vars).length ? vars : undefined} {...rest}>
      {children}
    </Tag>
  );
}
