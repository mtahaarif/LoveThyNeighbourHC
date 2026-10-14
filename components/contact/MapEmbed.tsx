'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { site } from '@/content/site';

/**
 * Google Maps embed at the original widget's location and zoom (no API key required).
 *
 * The embed pulls in ~15 Google scripts, so the iframe is only mounted once the map is about to scroll into
 * view; until then a light placeholder with the address holds its exact space (no layout shift).
 */
export default function MapEmbed({ className = '' }: { className?: string }) {
  const { lat, lng, zoom } = site.map;
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-[1.75rem] bg-brand-100 shadow-card ring-1 ring-slate-900/5 ${className}`}>
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(rgb(17_87_147/0.12)_1px,transparent_1px)] [background-size:18px_18px] p-6 text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-[14px] font-semibold text-brand-800 hover:text-brand-600"
        >
          <span className="grid size-12 place-items-center rounded-full bg-white text-accent-500 shadow-soft"><MapPin className="size-6" aria-hidden /></span>
          {site.address}
        </a>
      </div>
      {show && (
        <iframe
          title={`Map of ${site.address}`}
          src={`https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0 grayscale-[35%] transition-[filter] duration-500 hover:grayscale-0"
        />
      )}
    </div>
  );
}
