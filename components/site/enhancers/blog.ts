import { UI } from '../ui-classes';
import { closestFrom, combine, listen, type Cleanup } from './dom';

type Tab = { ux: string; cls: string; li?: string };
const SLOT = 270; // width of one card slot in GoDaddy's blog carousel
const FIRST_REAL = 2; // two cloned slides precede the first post

const ui = UI as unknown as { blogTabs?: { initial: Tab[]; category1: Tab[] }; blogSwap?: { index: number; a: string; b: string }[] };

function selectCategory(index: number) {
  const tabs = [...document.querySelectorAll<HTMLElement>('[data-aid^="RSS_FEED_CATEGORY_RENDERED_"]')];
  const states = index === 0 ? ui.blogTabs?.initial : ui.blogTabs?.category1;
  tabs.forEach((tab, i) => {
    const s = states?.[i];
    if (!s) return;
    tab.dataset.ux = s.ux;
    tab.className = s.cls;
    if (s.li && tab.parentElement) tab.parentElement.className = s.li;
  });
  for (const swap of ui.blogSwap ?? []) {
    const el = document.querySelector<HTMLElement>(`[data-blog-swap="${swap.index}"]`);
    if (el) el.className = index === 0 ? swap.a : swap.b;
  }
  document.querySelectorAll<HTMLElement>('[data-blog-category]').forEach((feed) => {
    feed.hidden = feed.dataset.blogCategory !== String(index);
  });
  if (index === 0) layoutCarousel();
}

let position = FIRST_REAL;
function layoutCarousel(animate = false) {
  const track = document.querySelector<HTMLElement>('[data-carousel-track]');
  const viewport = track?.parentElement;
  const container = viewport?.parentElement;
  if (!track || !viewport || !container) return;
  const slides = track.querySelectorAll('li.carousel-slide').length;
  const available = container.clientWidth;
  const perView = Math.max(1, Math.min(4, Math.floor(available / SLOT)));
  const realCount = slides - FIRST_REAL * 2;
  position = Math.min(Math.max(position, FIRST_REAL), FIRST_REAL + Math.max(0, realCount - perView));
  if (perView === 1) {
    viewport.style.width = '245px';
    track.style.left = '0px';
    track.style.transform = `translateX(${-position * SLOT + (245 - SLOT) / 2}px)`;
  } else {
    viewport.style.width = `${perView * SLOT}px`;
    track.style.left = '0px';
    track.style.transform = `translateX(${-position * SLOT}px)`;
  }
  track.style.transition = animate ? 'transform 0.4s ease' : 'none';
}

function step(dir: 1 | -1) {
  const track = document.querySelector<HTMLElement>('[data-carousel-track]');
  const container = track?.parentElement?.parentElement;
  if (!track || !container) return;
  const realCount = track.querySelectorAll('li.carousel-slide').length - FIRST_REAL * 2;
  const perView = Math.max(1, Math.min(4, Math.floor(container.clientWidth / SLOT)));
  const last = FIRST_REAL + Math.max(0, realCount - perView);
  position += dir;
  if (position > last) position = FIRST_REAL;
  if (position < FIRST_REAL) position = last;
  layoutCarousel(true);
}

/** Blog index: category tabs and the post carousel. */
export function enhanceBlog(): Cleanup {
  if (!document.querySelector('[data-carousel-track], [data-blog-category]')) return () => {};
  position = FIRST_REAL;
  layoutCarousel();
  return combine(
    listen(document, 'click', (e) => {
      const tab = closestFrom(e.target, '[data-aid^="RSS_FEED_CATEGORY_RENDERED_"]');
      if (tab) {
        e.preventDefault();
        selectCategory(Number(tab.dataset.aid?.split('_').pop()));
        return;
      }
      if (closestFrom(e.target, '[data-aid="RSS_SCROLL_RIGHT_ARROW"]')) step(1);
      else if (closestFrom(e.target, '[data-aid="RSS_SCROLL_LEFT_ARROW"]')) step(-1);
    }),
    listen(window, 'resize', () => layoutCarousel()),
  );
}
