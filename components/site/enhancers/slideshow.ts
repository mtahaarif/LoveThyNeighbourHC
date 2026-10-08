import { UI } from '../ui-classes';
import { closestFrom, combine, listen, swapClasses, type Cleanup } from './dom';

const AUTOPLAY_MS = 7000; // slideshow.autoplayDelay from the original widget config

/** Home page hero: fading background slideshow with dots and autoplay. */
export function enhanceSlideshow(): Cleanup {
  const root = document.querySelector<HTMLElement>('[data-aid="HEADER_SLIDESHOW"]');
  if (!root) return () => {};
  const slides = [...root.querySelectorAll<HTMLElement>('li.carousel-slide')];
  const dots = [...document.querySelectorAll<HTMLElement>('[data-aid^="SLIDE_SELECTION_DOT_"]')];
  if (slides.length < 2) return () => {};

  let current = Math.max(0, slides.findIndex((s) => s.classList.contains('carousel-slide-selected')));
  const show = (i: number) => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('carousel-slide-selected', k === current));
    dots.forEach((d, k) => {
      const active = k === current;
      d.dataset.ux = active ? 'DotActive' : 'Dot';
      if (active) swapClasses(d, UI.dot.inactive, UI.dot.active);
      else swapClasses(d, UI.dot.active, UI.dot.inactive);
    });
  };
  let timer = setInterval(() => show(current + 1), AUTOPLAY_MS);
  const restart = () => { clearInterval(timer); timer = setInterval(() => show(current + 1), AUTOPLAY_MS); };

  return combine(
    listen(document, 'click', (e) => {
      const dot = closestFrom(e.target, '[data-aid^="SLIDE_SELECTION_DOT_"]');
      if (!dot) return;
      show(Number(dot.dataset.aid?.split('_').pop()));
      restart();
    }),
    () => clearInterval(timer),
  );
}
