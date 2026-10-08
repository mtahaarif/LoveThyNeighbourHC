import { UI } from '../ui-classes';
import { closestFrom, combine, listen, swapClasses, type Cleanup } from './dom';

const subIcon = UI.drawerSub.find((c) => c.tag === 'svg');
const subList = UI.drawerSub.find((c) => c.tag === 'ul');

function setDrawer(hamburger: HTMLElement, open: boolean) {
  const drawer = document.getElementById(hamburger.dataset.toggleid ?? '');
  if (!drawer) return;
  hamburger.setAttribute('aria-expanded', String(open));
  if (open) {
    drawer.style.visibility = 'visible';
    drawer.style.transform = 'translateX(0px)';
  } else {
    drawer.style.removeProperty('visibility');
    drawer.style.removeProperty('transform');
  }
}

function setSubmenu(link: HTMLElement, open: boolean) {
  const list = link.nextElementSibling;
  if (!list || list.tagName !== 'UL') return;
  link.setAttribute('aria-expanded', String(open));
  const icon = link.querySelector('svg');
  if (subIcon) {
    if (open) swapClasses(icon, subIcon.rm, subIcon.add);
    else swapClasses(icon, subIcon.add, subIcon.rm);
  }
  if (subList) {
    if (open) swapClasses(list, subList.rm, subList.add);
    else swapClasses(list, subList.add, subList.rm);
  }
}

/** Mobile navigation drawer: hamburger, close icon and expandable sub-menus. */
export function enhanceDrawer(): Cleanup {
  const hamburgers = () => [...document.querySelectorAll<HTMLElement>('[data-aid="HAMBURGER_MENU_LINK"]')];
  return combine(
    listen(document, 'click', (e) => {
      const hamburger = closestFrom(e.target, '[data-aid="HAMBURGER_MENU_LINK"]');
      if (hamburger) {
        e.preventDefault();
        setDrawer(hamburger, hamburger.getAttribute('aria-expanded') !== 'true');
        return;
      }
      const drawer = closestFrom(e.target, '[data-ux="NavigationDrawer"]');
      if (!drawer) return;
      if (closestFrom(e.target, '[data-ux="CloseIcon"]')) {
        hamburgers().forEach((h) => setDrawer(h, false));
        return;
      }
      const sub = closestFrom(e.target, 'a[aria-haspopup="menu"][data-ux^="NavigationDrawerLink"]');
      if (sub && sub.nextElementSibling?.tagName === 'UL') {
        e.preventDefault();
        setSubmenu(sub, sub.getAttribute('aria-expanded') !== 'true');
        return;
      }
      // Following a link closes the drawer (client-side navigation keeps the DOM otherwise).
      if (closestFrom(e.target, 'a[href]:not([href="#"])')) hamburgers().forEach((h) => setDrawer(h, false));
    }),
    () => hamburgers().forEach((h) => setDrawer(h, false)),
  );
}
