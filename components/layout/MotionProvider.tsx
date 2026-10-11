'use client';

import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';

/** Motion skips transform/layout animations for visitors who prefer reduced motion (opacity still fades). */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
