import { site } from '@/content/site';

/** Google Maps embed at the original widget's location and zoom (no API key required). */
export default function MapEmbed({ className = '' }: { className?: string }) {
  const { lat, lng, zoom } = site.map;
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] bg-brand-100 shadow-card ring-1 ring-slate-900/5 ${className}`}>
      <iframe
        title={`Map of ${site.address}`}
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0 grayscale-[35%] transition-[filter] duration-500 hover:grayscale-0"
      />
    </div>
  );
}
