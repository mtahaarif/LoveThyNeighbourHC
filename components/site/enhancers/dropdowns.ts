import { UI } from '../ui-classes';
import { closestFrom, combine, listen, swapClasses, type Cleanup } from './dom';

const TOGGLE = '[data-aid="NAV_DROPDOWN"], [data-aid="NAV_MORE"], [data-aid="MEMBERSHIP_ICON_DESKTOP_RENDERED"]';
const MEMBERSHIP = '[data-aid="MEMBERSHIP_ICON_DESKTOP_RENDERED"]';

function menuFor(toggle: HTMLElement): HTMLElement | null {
  if (toggle.matches(MEMBERSHIP)) {
    return toggle.closest('[data-ux="UtilitiesMenu"]')?.querySelector<HTMLElement>('ul[id$="-loggedout"]') ?? null;
  }
  return toggle.closest('li')?.querySelector<HTMLElement>('ul[data-ux="Dropdown"]') ?? null;
}

function setOpen(toggle: HTMLElement, open: boolean) {
  const menu = menuFor(toggle);
  if (!menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.style.display = open ? 'block' : 'none';
  const icon = toggle.querySelector('svg');
  if (open) swapClasses(icon, UI.dropdownIcon.closed, UI.dropdownIcon.open);
  else swapClasses(icon, UI.dropdownIcon.open, UI.dropdownIcon.closed);
}

const openToggles = () => [...document.querySelectorAll<HTMLElement>(TOGGLE)].filter((t) => t.getAttribute('aria-expanded') === 'true');

/** Desktop navigation dropdowns ("SERVICES", "MENU", "More") and the account menu. */
export function enhanceDropdowns(): Cleanup {
  const closeAll = (except?: HTMLElement) => openToggles().forEach((t) => t !== except && setOpen(t, false));
  let hoverTimer: ReturnType<typeof setTimeout> | undefined;

  return combine(
    listen(document, 'click', (e) => {
      const toggle = closestFrom(e.target, TOGGLE);
      if (toggle) {
        e.preventDefault();
        const open = toggle.getAttribute('aria-expanded') !== 'true';
        closeAll(toggle);
        setOpen(toggle, open);
        return;
      }
      if (!closestFrom(e.target, 'ul[data-ux="Dropdown"]')) closeAll();
    }),
    listen(document, 'keydown', (e) => {
      if (e.key === 'Escape') closeAll();
    }),
    // The account menu also opens on hover, like the original.
    listen(document, 'mouseover', (e) => {
      const host = closestFrom(e.target, '[data-ux="UtilitiesMenu"]');
      const toggle = host?.querySelector<HTMLElement>(MEMBERSHIP);
      if (!toggle) return;
      clearTimeout(hoverTimer);
      if (toggle.getAttribute('aria-expanded') !== 'true') { closeAll(toggle); setOpen(toggle, true); }
    }),
    listen(document, 'mouseout', (e) => {
      const host = closestFrom(e.target, '[data-ux="UtilitiesMenu"]');
      if (!host || (e.relatedTarget instanceof Node && host.contains(e.relatedTarget))) return;
      const toggle = host.querySelector<HTMLElement>(MEMBERSHIP);
      if (!toggle) return;
      hoverTimer = setTimeout(() => setOpen(toggle, false), 200);
    }),
    () => clearTimeout(hoverTimer),
  );
}
