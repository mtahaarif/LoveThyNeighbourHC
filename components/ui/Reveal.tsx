'use client';

import { motion, type HTMLMotionProps } from 'motion/react';

type Props = HTMLMotionProps<'div'> & {
  delay?: number;
  /** Distance travelled while fading in (px). */
  y?: number;
  x?: number;
  as?: 'div' | 'li' | 'section' | 'article' | 'span';
};

/**
 * Fades and slides its children in the first time they scroll into view. Renders identically on server
 * and client; for reduced-motion visitors MotionConfig (see MotionProvider) drops the slide, keeping the fade.
 */
export default function Reveal({ delay = 0, y = 28, x = 0, as = 'div', children, ...rest }: Props) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
