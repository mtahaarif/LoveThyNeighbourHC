import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import RichText from '@/components/ui/RichText';
import Reveal from '@/components/ui/Reveal';
import GlowCard from '@/components/ui/GlowCard';
import Button from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/SectionHeading';
import HoursList from '@/components/contact/HoursList';
import ServiceCard from './ServiceCard';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { home } from '@/content/home';
import type { Service } from '@/content/types';

/** Detail page shared by the five services: sticky sidebar, rich content, glow CTA, related carousel. */
export default function ServicePage({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);
  const index = services.findIndex((s) => s.slug === service.slug);
  return (
    <PageTransition>
      <PageHero
        title={service.title}
        eyebrow={`Service ${String(index + 1).padStart(2, '0')} / ${String(services.length).padStart(2, '0')}`}
        description={service.summary}
        crumbs={[{ label: service.navLabel }]}
        image={service.image}
        imageTransitionName={`service-${service.slug}`}
      >
        <Button href={site.phone.href} variant="accent" icon={<Phone className="size-4" aria-hidden />}>{service.cta.button.label}</Button>
      </PageHero>

      <section className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:grid-cols-[19rem_1fr] lg:gap-16 lg:px-8">
          {/* Sticky sidebar */}
          <aside className="order-2 lg:order-1">
            <div className="space-y-6 lg:sticky lg:top-28">
              <nav aria-label="Services" className="rounded-[1.75rem] bg-brand-50/70 p-3 ring-1 ring-brand-100">
                <p className="px-3 pt-2 pb-3 text-[12px] font-bold tracking-[0.2em] text-brand-600 uppercase">Services</p>
                <ul>
                  {services.map((s) => {
                    const current = s.slug === service.slug;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          aria-current={current ? 'page' : undefined}
                          className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold transition-all ${
                            current ? 'bg-brand-600 text-white shadow-soft' : 'text-brand-900 hover:bg-white hover:shadow-soft'
                          }`}
                        >
                          {s.navLabel}
                          <ArrowUpRight className={`size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${current ? 'text-accent-300' : 'text-brand-400'}`} aria-hidden />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-brand-950 p-6 text-white">
                <div aria-hidden className="absolute -top-16 -right-16 -z-10 size-48 rounded-full bg-teal-brand/30 blur-3xl" />
                <p className="font-display text-xl font-bold">{service.cta.heading}</p>
                <a href={site.phone.href} className="mt-4 inline-flex items-center gap-2 text-[17px] font-bold text-accent-300 hover:text-accent-400">
                  <Phone className="size-5" aria-hidden /> {site.phone.display}
                </a>
                <div className="mt-5 border-t border-white/10 pt-4"><HoursList tone="dark" /></div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="order-1 min-w-0 lg:order-2">
            {service.sections.map((sec, i) => (
              <Reveal key={sec.heading + i} className={i ? 'mt-16' : ''}>
                <Eyebrow>{service.title}</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">{sec.heading}</h2>
                <RichText html={sec.body} size="lg" className="mt-8" />
              </Reveal>
            ))}

            <Reveal className="mt-16">
              <GlowCard className="p-8 sm:p-12" color="rgb(92 200 194 / 0.35)">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-xl">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950">{service.cta.heading}</h2>
                    {service.cta.body && <RichText html={service.cta.body} className="mt-3" />}
                  </div>
                  <Button href={service.cta.button.href} icon={<Phone className="size-4" aria-hidden />} size="lg" className="shrink-0">
                    {service.cta.button.label}
                  </Button>
                </div>
              </GlowCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section aria-labelledby="more-services" className="overflow-hidden bg-gradient-to-b from-brand-50/70 to-white py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="more-services" className="font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">{home.servicesTitle}</h2>
          </Reveal>
        </div>
        <div className="mt-10 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max snap-x snap-mandatory gap-6 px-4 pb-4 sm:px-6 lg:px-[max(2rem,calc((100vw-1320px)/2+2rem))]">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} index={services.indexOf(s)} className="w-[80vw] snap-start sm:w-[22rem]" />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
