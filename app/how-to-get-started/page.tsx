import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Building2, CheckCircle2, Clock3, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/forms/ContactForm';
import HoursList from '@/components/contact/HoursList';
import MapEmbed from '@/components/contact/MapEmbed';
import SectionHeading from '@/components/ui/SectionHeading';
import { getStarted, qualifies, startSteps } from '@/content/get-started';
import { site } from '@/content/site';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/how-to-get-started'];

export default function GetStartedPage() {
  return (
    <PageTransition>
      <PageHero background={{ desktop: '/get-started-banner-desktop.jpg', mobile: '/get-started-banner-mobile.jpg', focus: { desktop: 'center 25%', mobile: 'center 40%' } }} title={getStarted.title} description={getStarted.intro} crumbs={[{ label: 'How to Get Started' }]} />
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-50/70 to-white py-20 lg:py-28">
        <div aria-hidden className="absolute top-20 -right-40 -z-10 size-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <Reveal y={40} className="rounded-[2rem] p-7 shadow-card glass sm:p-10 lg:sticky lg:top-28 lg:self-start">
            <ContactForm title={getStarted.formTitle} submit={getStarted.submit} headingLevel="h2" />
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.08} className="rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-slate-900/5">
              <ul className="space-y-5 text-[15px]">
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Building2 className="size-5" aria-hidden /></span>
                  <span className="self-center font-display text-xl font-bold text-brand-950">{getStarted.businessName}</span>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600"><MapPin className="size-5" aria-hidden /></span>
                  <span className="self-center font-semibold text-slate-700">{site.address}</span>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Phone className="size-5" aria-hidden /></span>
                  <a href={site.phone.href} className="self-center font-bold text-brand-600 hover:text-brand-800">{site.phone.display}</a>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.14} className="rounded-[1.75rem] bg-white p-5 shadow-soft ring-1 ring-slate-900/5">
              <p className="flex items-center gap-2 px-3 font-display text-lg font-bold text-brand-950"><Clock3 className="size-5 text-brand-500" aria-hidden /> {site.hoursLabels.title}</p>
              <div className="mt-3"><HoursList /></div>
            </Reveal>
            <Reveal delay={0.2}><MapEmbed className="aspect-[16/10]" /></Reveal>
          </div>
        </div>
      </section>

      {/* Steps: from first call to care at home */}
      <section aria-labelledby="steps-title" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading id="steps-title" eyebrow={startSteps.eyebrow} title={startSteps.title} description={startSteps.intro} align="center" />
          <div className="relative mt-14">
            <span aria-hidden className="absolute top-14 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-brand-200 via-accent-300 to-brand-200 lg:block" />
            <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {startSteps.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 0.08} className="relative rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-slate-900/5 transition-shadow duration-500 hover:shadow-glow">
                  <span className="relative grid size-14 place-items-center rounded-2xl bg-brand-600 font-display text-xl font-bold text-white shadow-card">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-brand-950">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Who qualifies + further reading */}
      <section aria-labelledby="qualify-title" className="bg-gradient-to-b from-brand-50/70 to-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
          <Reveal>
            <h2 id="qualify-title" className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-brand-950 sm:text-5xl">{qualifies.title}</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-slate-600">{qualifies.intro}</p>
            <ul className="mt-7 space-y-3.5">
              {qualifies.items.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl bg-brand-50 p-5 text-[15px] leading-relaxed text-brand-900 ring-1 ring-brand-100"><strong>{qualifies.note}</strong></p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] p-7 shadow-card glass sm:p-9 lg:sticky lg:top-28">
            <h3 className="font-display text-2xl font-bold text-brand-950">Helpful reading</h3>
            <ul className="mt-5 divide-y divide-brand-100">
              {qualifies.reading.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="group flex items-start justify-between gap-4 py-4 text-[15px] font-bold text-brand-800 transition-colors hover:text-brand-600">
                    {r.label}
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
