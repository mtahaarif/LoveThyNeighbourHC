import { combine, listen, type Cleanup } from './dom';

const STUCK_CLASSES = ['sticky-animate', 'x-c-bg'];

/** Header that pins to the top once the page scrolls past it (GoDaddy "sticky nav"). */
export function enhanceSticky(): Cleanup {
  const bar = document.querySelector<HTMLElement>('[data-stickynav]');
  const spacer = bar?.closest<HTMLElement>('[data-header-spacer]') ?? null;
  if (!bar) return () => {};

  let stuck = false;
  const stick = (on: boolean) => {
    if (on === stuck) return;
    stuck = on;
    if (on) {
      bar.classList.add(...STUCK_CLASSES);
      Object.assign(bar.style, { position: 'fixed', zIndex: '10000', left: '0px', right: '0px', top: '0px' });
    } else {
      bar.classList.remove(...STUCK_CLASSES);
      for (const p of ['position', 'z-index', 'left', 'right', 'top']) bar.style.removeProperty(p);
    }
  };
  // The spacer reserves the bar's natural height so the page doesn't jump when the bar is pinned.
  const measure = () => {
    if (!spacer) return;
    const wasStuck = stuck;
    stick(false);
    spacer.style.height = `${bar.offsetHeight}px`;
    stick(wasStuck);
  };
  const update = () => {
    const ref = spacer ?? bar;
    const top = ref.getBoundingClientRect().top + window.scrollY;
    stick(window.scrollY > top + ref.offsetHeight);
  };
  measure();
  update();
  return combine(
    listen(window, 'scroll', update, { passive: true }),
    listen(window, 'resize', () => { measure(); update(); }),
    () => stick(false),
  );
}
