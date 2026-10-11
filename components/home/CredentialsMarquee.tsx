import { BadgeCheck, HeartPulse } from 'lucide-react';
import Marquee from '@/components/ui/Marquee';
import { services } from '@/content/services';

const credentials = ['Medicare-certified', 'Medicaid-licensed', 'AHCA-licensed'];

/** Infinite band of services and credentials directly under the hero. */
export default function CredentialsMarquee() {
  const items = [
    ...services.map((s) => ({ label: s.navLabel, credential: false })),
    ...credentials.map((c) => ({ label: c, credential: true })),
  ];
  return (
    <section aria-label="Services and credentials" className="border-y border-brand-100 bg-white py-5">
      <Marquee duration={38} gap={20}>
        {items.map((it) => (
          <span
            key={it.label}
            className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[14px] font-bold whitespace-nowrap ${
              it.credential ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-800 ring-1 ring-brand-100'
            }`}
          >
            {it.credential ? <BadgeCheck className="size-4 text-accent-300" aria-hidden /> : <HeartPulse className="size-4 text-brand-500" aria-hidden />}
            {it.label}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
