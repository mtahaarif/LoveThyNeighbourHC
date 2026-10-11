import type { DayHours } from '@/content/types';

/** "17:00" -> "05:00 pm" (the original site's format). */
export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(':').map(Number);
  return `${String(h % 12 || 12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`;
}

export const formatRange = (d: DayHours, closedLabel = 'Closed') =>
  d.open && d.close ? `${formatTime(d.open)} – ${formatTime(d.close)}` : closedLabel;

/** Day index as in Date#getDay (0 = Sunday) -> entry. */
export function hoursFor(hours: DayHours[], date = new Date()) {
  const name = date.toLocaleDateString('en-US', { weekday: 'long' });
  return hours.find((h) => h.day === name);
}

/** Group consecutive days with identical hours: "Mon – Fri", "Sat – Sun". */
export function groupHours(hours: DayHours[]) {
  const groups: { from: DayHours; to: DayHours }[] = [];
  for (const d of hours) {
    const last = groups.at(-1);
    if (last && last.to.open === d.open && last.to.close === d.close) last.to = d;
    else groups.push({ from: d, to: d });
  }
  return groups.map((g) => ({ label: g.from === g.to ? g.from.short : `${g.from.short} – ${g.to.short}`, hours: g.from }));
}
