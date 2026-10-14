import type { Metadata } from 'next';
import { Building2, Clock3, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/forms/ContactForm';
import HoursList from '@/components/contact/HoursList';
import MapEmbed from '@/components/contact/MapEmbed';
import { getStarted } from '@/content/get-started';
import { site } from '@/content/site';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/how-to-get-started'];

export default function GetStartedPage() {
  return (
    <PageTransition>
      <PageHero background={{ desktop: '/get-started-banner-desktop.png', mobile: '/get-started-banner-mobile.png', focus: { desktop: 'center 25%', mobile: 'center 40%' } }} title={getStarted.title} description={getStarted.intro} crumbs={[{ label: 'How to Get Started' }]} />
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-50/70 to-white py-20 lg:py-28">
        <div aria-hidden className="absolute top-20 -right-40 -z-10 size-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <Reveal y={40} className="rounded-[2rem] p-7 shadow-card glass sm:p-10 lg:sticky lg:top-28 lg:self-start">
            <ContactForm title={getStarted.formTitle} submit={getStarted.submit} />
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
    </PageTransition>
  );
}
