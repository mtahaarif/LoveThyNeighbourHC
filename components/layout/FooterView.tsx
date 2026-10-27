'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import Marquee from '@/components/ui/Marquee';
import { socialIcon } from '@/components/ui/BrandIcons';

type LinkItem = { href: string; label: string };
export type FooterData = {
  services: { slug: string; title: string; navLabel: string }[];
  quickLinks: LinkItem[];
  highlights: { href: string; title: string }[];
  intro: string;
  socialTitle: string;
  social: LinkItem[];
  contactTitle: string;
  address: string;
  phone: { href: string; display: string };
  email: string;
  licenseNumber: string;
  hours: { label: string; range: string }[];
  copyright: string;
  domain: string;
};

/**
 * The footer's markup. It is a client component only so that the payload carries this small data object rather
 * than the whole footer tree on every page (the HTML is server-rendered either way); it has no state or effects.
 */
export default function FooterView({ services, quickLinks, highlights, intro, socialTitle, social, contactTitle, address, phone, email, licenseNumber, hours, copyright, domain }: FooterData) {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-950 text-brand-100" style={{ viewTransitionName: 'site-footer' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 size-[30rem] rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-[26rem] rounded-full bg-teal-brand/15 blur-3xl" />
      </div>

      {/* Services marquee */}
      <div className="border-b border-white/10 py-7">
        <Marquee duration={45} gap={56}>
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="group flex items-center gap-14 font-display text-3xl font-bold whitespace-nowrap text-white/90 transition-colors hover:text-accent-300 sm:text-5xl">
              {s.title}
              <span aria-hidden className="text-accent-400 transition-transform duration-500 group-hover:rotate-90">✦</span>
            </Link>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:px-8">
        <div>
          {/* The image alt is the link text (worded differently from the navbar logo's alt). */}
          <Link href="/" className="inline-block">
            <Image src="/assets/images/Love-Thy-Neighbor-Home-Health-Care-Inc-1-f16b93ab.png" alt="Love Thy Neighbor home health care home page" width={172} height={56} className="h-14 w-auto" />
          </Link>
          <p className="mt-3 text-[13px] font-semibold tracking-wide text-brand-100/80">License no.: {licenseNumber}</p>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-brand-100/75">{intro}</p>
          <div className="mt-7">
            <p className="text-[12px] font-bold tracking-[0.2em] text-accent-300 uppercase">{socialTitle}</p>
            <ul className="mt-4 flex gap-3">
              {social.map((s) => {
                const Icon = socialIcon(s.label);
                return (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full bg-white/[0.07] ring-1 ring-white/15 transition-all hover:-translate-y-1 hover:bg-accent-500 hover:text-brand-950">
                      <Icon className="size-5" />
                      <span className="sr-only">{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="font-display text-lg font-bold text-white">Quick Links</p>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group inline-flex items-center gap-1.5 text-[15px] transition-colors hover:text-white">
                  {l.label}
                  <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <p className="font-display text-lg font-bold text-white">Services</p>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="group inline-flex items-center gap-1.5 text-[15px] transition-colors hover:text-white">
                  {s.navLabel}
                  <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-9 font-display text-lg font-bold text-white">Why Choose Us</p>
          <ul className="mt-5 space-y-3">
            {highlights.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="group inline-flex items-center gap-1.5 text-[15px] transition-colors hover:text-white">
                  {c.title}
                  <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-lg font-bold text-white">{contactTitle}</p>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-accent-400" aria-hidden />{address}</li>
            <li><a href={phone.href} className="flex gap-3 transition-colors hover:text-white"><Phone className="mt-0.5 size-5 shrink-0 text-accent-400" aria-hidden />{phone.display}</a></li>
            <li><a href={`mailto:${email}`} className="flex gap-3 break-all transition-colors hover:text-white"><Mail className="mt-0.5 size-5 shrink-0 text-accent-400" aria-hidden />{email}</a></li>
            <li className="flex gap-3">
              <Clock3 className="mt-0.5 size-5 shrink-0 text-accent-400" aria-hidden />
              <span className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                {hours.map((g) => (
                  <span key={g.label} className="contents">
                    <span className="font-semibold text-white">{g.label}</span>
                    <span>{g.range}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-4 py-6 text-[13px] text-brand-200/70 sm:flex-row sm:px-6 lg:px-8">
          <p>{copyright}</p>
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-teal-brand" aria-hidden /> {domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
