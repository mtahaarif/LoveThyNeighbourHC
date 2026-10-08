import { closestFrom, listen, type Cleanup } from './dom';

const ONE_YEAR = 60 * 60 * 24 * 365;

/** "This website uses cookies" banner: hide on Accept and remember the choice. */
export function enhanceCookieBanner(): Cleanup {
  return listen(document, 'click', (e) => {
    const accept = closestFrom(e.target, '[data-aid="FOOTER_COOKIE_CLOSE_RENDERED"]');
    if (!accept) return;
    e.preventDefault();
    document.cookie = `cookie_terms=accepted; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
    document.documentElement.classList.add('cookies-accepted');
    accept.closest<HTMLElement>('[data-aid="FOOTER_COOKIE_BANNER_RENDERED"]')?.style.setProperty('display', 'none');
  });
}
