import { ViewTransition, type ReactNode } from 'react';

/**
 * Wraps a page so route changes crossfade with a soft rise (CSS in globals.css, class "page").
 * It lives in each page, not the layout: layouts persist across navigations, so enter/exit never fire there.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
