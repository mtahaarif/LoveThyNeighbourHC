import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/ui/PageTransition';
import Reveal from '@/components/ui/Reveal';
import AccountForm from './AccountForm';
import { site } from '@/content/site';
import type { AccountPage as AccountContent } from '@/content/types';

/** Centered glass card over drifting brand light, used by the /m/* account pages. */
export default function AccountPage({ content }: { content: AccountContent }) {
  return (
    <PageTransition>
      <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-brand-950 px-4 py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-[8%] size-[32rem] animate-[float_14s_ease-in-out_infinite] rounded-full bg-brand-500/45 blur-3xl" />
          <div className="absolute right-[6%] -bottom-48 size-[34rem] animate-[float_18s_ease-in-out_infinite_reverse] rounded-full bg-teal-brand/30 blur-3xl" />
          <div className="absolute top-1/3 right-1/3 size-64 rounded-full bg-accent-500/20 blur-3xl" />
        </div>
        <Reveal y={40} className="mx-auto w-full max-w-lg rounded-[2.25rem] bg-white/95 p-8 shadow-card ring-1 ring-white/40 backdrop-blur-xl sm:p-11">
          <Link href="/" aria-label={`${site.name} — Home`} className="inline-block">
            <Image src="/assets/images/Love-Thy-Neighbor-Home-Health-Care-Inc.png" alt={site.name} width={991} height={328} className="h-12 w-auto" />
          </Link>
          <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-brand-950">{content.title}</h1>
          {content.message && <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{content.message}</p>}
          <div className="mt-8">
            <AccountForm fields={content.fields} submit={content.submit} phone={site.phone} />
          </div>
          {(content.links.length > 0 || content.note) && (
            <div className="mt-6 flex flex-col items-center gap-2 text-[14px] text-slate-600">
              {content.links.map((l) => (
                <Link key={l.href + l.label} href={l.href} className="font-semibold text-brand-600 hover:text-brand-800">{l.label}</Link>
              ))}
              {content.note && (
                <p>
                  {content.note.text}{' '}
                  <Link href={content.note.link.href} className="font-bold text-brand-600 hover:text-brand-800">{content.note.link.label}</Link>
                </p>
              )}
            </div>
          )}
        </Reveal>
      </section>
    </PageTransition>
  );
}
