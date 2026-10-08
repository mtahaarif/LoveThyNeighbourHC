'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { enhanceDropdowns } from './enhancers/dropdowns';
import { enhanceDrawer } from './enhancers/drawer';
import { enhanceSticky } from './enhancers/sticky';
import { enhanceSlideshow } from './enhancers/slideshow';
import { enhanceCookieBanner } from './enhancers/cookie-banner';
import { enhanceContact } from './enhancers/contact';
import { enhanceForms } from './enhancers/forms';
import { enhanceBlog } from './enhancers/blog';

/**
 * Re-creates the original GoDaddy runtime behaviour (menus, sticky header, slideshow, forms, ...)
 * on top of the server-rendered markup. Runs again after every client-side navigation.
 */
export default function Enhancers() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = [
      enhanceDropdowns(),
      enhanceDrawer(),
      enhanceSticky(),
      enhanceSlideshow(),
      enhanceCookieBanner(),
      enhanceContact(),
      enhanceForms(),
      enhanceBlog(),
    ];
    return () => cleanups.forEach((c) => c());
  }, [pathname]);

  return null;
}
