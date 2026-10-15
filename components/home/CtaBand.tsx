import { Phone } from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';
import Reveal from '@/components/ui/Reveal';
import { home } from '@/content/home';
import { site } from '@/content/site';

/** Glowing gradient band with the original call-to-action and a magnetic call button. */
export default function CtaBand() {
  const [first, ...rest] = home.cta.lines;
  return (
    <section className="defer-render relative px-4 py-20 [contain-intrinsic-size:auto_560px] sm:px-6 lg:px-8" aria-label="Call us">
      <div className="relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-16 text-center shadow-card sm:px-12 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 size-80 animate-[float_12s_ease-in-out_infinite] rounded-full bg-teal-brand/40 blur-3xl" />
          <div className="absolute -right-10 -bottom-28 size-96 animate-[float_15s_ease-in-out_infinite_reverse] rounded-full bg-accent-500/35 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.14)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance text-white sm:text-6xl">
            {first}
            {rest.length > 0 && <span className="mt-3 block text-2xl font-semibold text-brand-100 sm:text-3xl">{rest.join(' ')}</span>}
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <Magnetic>
            <a
              href={site.phone.href}
              className="group relative inline-flex items-center gap-3 rounded-full bg-white py-3 pr-8 pl-3 text-[16px] font-bold tracking-wide text-brand-800 shadow-card transition-colors hover:bg-accent-400 hover:text-brand-950"
            >
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/40 [animation-duration:2.4s]" aria-hidden />
              <span className="grid size-11 place-items-center rounded-full bg-brand-600 text-white transition-transform group-hover:rotate-12">
                <Phone className="size-5" aria-hidden />
              </span>
              {home.cta.button} · {site.phone.display}
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
