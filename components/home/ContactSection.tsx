import { Clock3, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import HoursList from '@/components/contact/HoursList';
import MapEmbed from '@/components/contact/MapEmbed';
import Reveal from '@/components/ui/Reveal';
import RichText from '@/components/ui/RichText';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { home } from '@/content/home';
import { site } from '@/content/site';

/** Contact details on a soft gradient with a sticky glass form card. */
export default function ContactSection() {
  const c = home.contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-24 lg:py-32">
      <div aria-hidden className="absolute top-1/3 -left-40 -z-10 size-[30rem] rounded-full bg-brand-200/40 blur-3xl" />
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div>
          <Reveal><Eyebrow>{site.name}</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 id="contact-title" className="mt-4 font-display text-5xl leading-none font-bold tracking-tight text-brand-950 sm:text-6xl">{c.title}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 font-display text-2xl leading-snug font-semibold text-brand-800">{c.intro}</p>
          </Reveal>
          <Reveal delay={0.18} className="mt-6"><RichText html={c.body} /></Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.1} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-900/5">
              <MapPin className="size-6 text-brand-500" aria-hidden />
              <p className="mt-3 text-[15px] font-semibold text-brand-950">{c.address}</p>
              <a href={site.phone.href} className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-brand-600 hover:text-brand-800">
                <Phone className="size-4" aria-hidden /> {site.phone.display}
              </a>
            </Reveal>
            <Reveal delay={0.18} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-900/5 sm:row-span-2">
              <p className="flex items-center gap-2 px-3 font-display text-lg font-bold text-brand-950">
                <Clock3 className="size-5 text-brand-500" aria-hidden /> {site.hoursLabels.title}
              </p>
              <div className="mt-3"><HoursList /></div>
            </Reveal>
            <Reveal delay={0.24}><MapEmbed className="aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-48" /></Reveal>
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal delay={0.1} y={40} className="rounded-[2rem] p-7 shadow-card glass sm:p-10">
            <ContactForm title={c.formTitle} submit={c.submit} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
