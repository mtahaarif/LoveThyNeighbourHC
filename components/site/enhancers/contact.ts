import { UI } from '../ui-classes';
import { closestFrom, combine, listen, swapClasses, type Cleanup } from './dom';

// structuredHours from the original contact widget (index 0 = Sunday, as in Date#getDay).
const HOURS: ({ open: string; close: string } | null)[] = [
  null,
  { open: '09:00', close: '17:00' },
  { open: '09:00', close: '17:00' },
  { open: '09:00', close: '17:00' },
  { open: '09:00', close: '17:00' },
  { open: '09:00', close: '17:00' },
  null,
];

const fmt = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return `${String(h % 12 || 12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`;
};

function setHoursExpanded(table: HTMLElement, expanded: boolean) {
  table.querySelectorAll<HTMLElement>('tr[data-hours="collapsed"]').forEach((r) => (r.hidden = expanded));
  table.querySelectorAll<HTMLElement>('tr[data-hours="expanded"]').forEach((r) => (r.hidden = !expanded));
}

function revealForm(button: HTMLElement, open: boolean) {
  // Mobile: the button is swapped for the form that sits next to it.
  const mobile = button.closest('[data-aid="CONTACT_FORM_CONTAINER_MOBILE"]');
  if (mobile) {
    button.hidden = open;
    const form = mobile.querySelector<HTMLElement>('[data-aid="CONTACT_FORM_CONTAINER_MOBILE_REND"]');
    if (form) form.hidden = !open;
    return;
  }
  // Desktop: the form panel slides over the contact details.
  const widget = button.closest('[data-ux="WidgetSplit"]') ?? document;
  const panel = widget.querySelector<HTMLElement>('[id^="desktop-form-expanded"]');
  const column = widget.querySelector<HTMLElement>('[id^="form-container"]');
  if (!panel || !column) return;
  if (open) {
    const height = `${column.offsetHeight}px`;
    Object.assign(column.style, { flexBasis: 'auto', height });
    panel.style.maxHeight = height;
    swapClasses(panel, UI.reveal.closed, UI.reveal.open);
  } else {
    Object.assign(column.style, { flexBasis: 'auto', height: 'inherit' });
    panel.style.maxHeight = 'inherit';
    swapClasses(panel, UI.reveal.open, UI.reveal.closed);
  }
}

/** Contact widget: business-hours toggle and the "Drop us a line!" form reveal. */
export function enhanceContact(): Cleanup {
  // Today's hours in the collapsed row.
  const today = HOURS[new Date().getDay()];
  document.querySelectorAll<HTMLElement>('[data-aid="CONTACT_HOURS_COLLAPSED_HR_LABEL"]').forEach((el) => {
    el.textContent = today ? `${fmt(today.open)} – ${fmt(today.close)}` : 'Closed';
  });

  return combine(
    listen(document, 'click', (e) => {
      const row = closestFrom(e.target, 'tr[data-hours]');
      if (row) {
        const table = row.closest<HTMLElement>('table');
        const expandedRows = table?.querySelectorAll('tr[data-hours="expanded"]');
        // Collapsed row expands; the first (clickable) expanded row collapses again.
        if (table && (row.dataset.hours === 'collapsed' || row === expandedRows?.[0])) {
          setHoursExpanded(table, row.dataset.hours === 'collapsed');
        }
        return;
      }
      const reveal = closestFrom(e.target, '[data-aid="CONTACT_FORM_REVEAL_BUTTON_REND"]');
      if (reveal) { e.preventDefault(); revealForm(reveal, true); return; }
      const cancel = closestFrom(e.target, '[data-aid="CONTACT_CANCEL_BUTTON_REND"]');
      if (cancel) {
        e.preventDefault();
        const widget = cancel.closest('[data-ux="WidgetSplit"]');
        const mobileForm = cancel.closest('[data-aid="CONTACT_FORM_CONTAINER_MOBILE_REND"]');
        const button = mobileForm
          ? mobileForm.parentElement?.querySelector<HTMLElement>('[data-aid="CONTACT_FORM_REVEAL_BUTTON_REND"]')
          : widget?.querySelector<HTMLElement>('[data-aid="CONTACT_FORM_REVEAL_BUTTON_REND"]:not([data-aid="CONTACT_FORM_CONTAINER_MOBILE"] *)');
        if (button) revealForm(button, false);
      }
    }),
  );
}
