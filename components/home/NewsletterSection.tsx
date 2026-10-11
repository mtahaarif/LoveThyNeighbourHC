import { Mail } from 'lucide-react';
import NewsletterForm from '@/components/forms/NewsletterForm';
import Reveal from '@/components/ui/Reveal';
import { home } from '@/content/home';

/** Newsletter signup over an animated gradient mesh. */
export default function NewsletterSection() {
  const n = home.newsletter;
  return (
    <section aria-labelledby="newsletter-title" className="relative isolate overflow-hidden bg-brand-900 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-[10%] size-[28rem] animate-[float_16s_ease-in-out_infinite] rounded-full bg-brand-500/50 blur-3xl" />
        <div className="absolute right-[5%] -bottom-40 size-[30rem] animate-[float_20s_ease-in-out_infinite_reverse] rounded-full bg-teal-brand/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 size-72 -translate-1/2 rounded-full bg-accent-500/20 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal>
          <span className="grid size-16 animate-float place-items-center rounded-2xl text-accent-300 glass-dark">
            <Mail className="size-7" aria-hidden />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="newsletter-title" className="mt-7 font-display text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-5xl">{n.title}</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 text-[17px] leading-relaxed text-brand-100/85">{n.description}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex w-full justify-center">
          <NewsletterForm label={n.label} button={n.button} />
        </Reveal>
      </div>
    </section>
  );
}
