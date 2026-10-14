import type { Metadata } from 'next';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageTransition from '@/components/ui/PageTransition';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { faqs } from '@/content/faqs';
import { home } from '@/content/home';
import { site } from '@/content/site';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/faqs'];

export default function FaqsPage() {
  return (
    <PageTransition>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.items.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer.replace(/<[^>]+>/g, '').trim() },
          })),
        }}
      />
      <PageHero background={{ desktop: '/faqs-banner-desktop.jpg', mobile: '/faqs-banner-mobile.jpg', focus: { desktop: 'center 25%', mobile: 'center 48%' } }} title={faqs.title} crumbs={[{ label: 'FAQs' }]} />
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:grid-cols-[22rem_1fr] lg:px-8">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-brand-950 p-8 text-white">
              <div aria-hidden className="absolute -top-20 -right-20 -z-10 size-56 rounded-full bg-brand-500/40 blur-3xl" />
              <p className="font-display text-2xl font-bold">{home.contact.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-100/80">{home.contact.intro}</p>
              <ul className="mt-6 space-y-3 text-[15px]">
                <li><a href={site.phone.href} className="flex items-center gap-3 font-semibold hover:text-accent-300"><Phone className="size-5 text-accent-400" aria-hidden />{site.phone.display}</a></li>
                <li><a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all font-semibold hover:text-accent-300"><Mail className="size-5 shrink-0 text-accent-400" aria-hidden />{site.email}</a></li>
              </ul>
              <Button href="/how-to-get-started" variant="accent" iconRight={<ArrowRight className="size-4" aria-hidden />} className="mt-8">How to Get Started</Button>
            </Reveal>
          </aside>
          <Reveal delay={0.1}><FaqAccordion items={faqs.items} /></Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
