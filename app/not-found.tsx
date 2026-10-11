import type { Metadata } from 'next';
import { Home } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { notFoundContent } from '@/content/not-found';
import { pageMetadata } from '@/content/metadata';

export const metadata: Metadata = pageMetadata['/404'];

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 py-24 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 size-80 animate-[float_12s_ease-in-out_infinite] rounded-full bg-brand-200/60 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 size-72 animate-[float_15s_ease-in-out_infinite_reverse] rounded-full bg-accent-300/40 blur-3xl" />
      </div>
      <div>
        <Reveal>
          <p aria-hidden className="font-display text-[9rem] leading-none font-bold tracking-tighter text-gradient sm:text-[13rem]">404</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">{notFoundContent.title}</h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-4 max-w-md text-[17px] text-slate-600">{notFoundContent.message}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <Button href={notFoundContent.button.href} icon={<Home className="size-4" aria-hidden />} size="lg">{notFoundContent.button.label}</Button>
        </Reveal>
      </div>
    </section>
  );
}
