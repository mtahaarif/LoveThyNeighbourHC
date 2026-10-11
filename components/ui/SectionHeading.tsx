import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2';
  id?: string;
  className?: string;
};

export function Eyebrow({ children, tone = 'light', center = false }: { children: ReactNode; tone?: 'light' | 'dark'; center?: boolean }) {
  return (
    <p className={`m-0 flex items-center gap-3 text-[12px] font-bold tracking-[0.22em] uppercase ${center ? 'justify-center' : ''} ${tone === 'dark' ? 'text-accent-300' : 'text-brand-600'}`}>
      <span aria-hidden className={`h-px w-8 ${tone === 'dark' ? 'bg-accent-300/70' : 'bg-brand-400'}`} />
      {children}
      {center && <span aria-hidden className={`h-px w-8 ${tone === 'dark' ? 'bg-accent-300/70' : 'bg-brand-400'}`} />}
    </p>
  );
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light', as: Tag = 'h2', id, className = '' }: Props) {
  const center = align === 'center';
  return (
    <Reveal className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <Eyebrow tone={tone} center={center}>{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className={`mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl ${tone === 'dark' ? 'text-white' : 'text-brand-950'}`}
      >
        {title}
      </Tag>
      {description && (
        <div className={`mt-5 text-[17px] leading-relaxed ${tone === 'dark' ? 'text-brand-100/80' : 'text-slate-600'}`}>{description}</div>
      )}
    </Reveal>
  );
}
