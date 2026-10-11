import Image from 'next/image';
import Link from 'next/link';
import { ViewTransition } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/content/types';

type Props = { service: Service; index: number; className?: string };

/**
 * Photo card for a service. The summary slides up on hover (always visible on touch screens) and the
 * photo is a shared element that morphs into the service page's hero image.
 */
export default function ServiceCard({ service, index, className = '' }: Props) {
  return (
    <Link
      href={`/${service.slug}`}
      className={`group relative isolate block h-[30rem] shrink-0 overflow-hidden rounded-[2rem] bg-brand-900 shadow-card ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-glow ${className}`}
    >
      <ViewTransition name={`service-${service.slug}`} share="morph" default="none">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 1024px) 420px, 85vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
        </div>
      </ViewTransition>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-brand-950/55 to-brand-950/5 transition-colors duration-500 group-hover:via-brand-950/75" />

      <div className="flex h-full flex-col p-7">
        <div className="flex items-start justify-between">
          <span className="rounded-full px-3 py-1 font-display text-sm font-bold text-white glass-dark">{String(index + 1).padStart(2, '0')}</span>
          <span className="grid size-12 place-items-center rounded-full bg-white text-brand-700 transition-all duration-500 group-hover:rotate-45 group-hover:bg-accent-500 group-hover:text-brand-950">
            <ArrowUpRight className="size-5" aria-hidden />
          </span>
        </div>
        <div className="mt-auto">
          <h3 className="font-display text-[1.9rem] leading-tight font-bold text-white">{service.title}</h3>
          <div className="grid transition-all duration-500 ease-out lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-focus-visible:grid-rows-[1fr] lg:group-focus-visible:opacity-100">
            <p className="line-clamp-4 overflow-hidden pt-3 text-[15px] leading-relaxed text-brand-100/90">{service.summary}</p>
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-accent-300">
            Learn more <span aria-hidden className="h-px w-8 bg-accent-300 transition-all duration-500 group-hover:w-14" />
          </span>
        </div>
      </div>
    </Link>
  );
}
