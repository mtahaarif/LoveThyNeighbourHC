import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

const variants = {
  primary: 'bg-brand-600 text-white shadow-card hover:bg-brand-700',
  accent: 'bg-accent-500 text-brand-950 shadow-card hover:bg-accent-400',
  secondary: 'bg-white text-brand-800 ring-1 ring-slate-200 shadow-sm hover:ring-brand-300',
  light: 'bg-white text-brand-900 shadow-card hover:bg-brand-50',
  ghost: 'bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20',
} as const;

type Props = {
  href: string;
  variant?: keyof typeof variants;
  icon?: ReactNode;
  iconRight?: ReactNode;
  size?: 'md' | 'lg';
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'>;

/** Pill button rendered as a link (next/link for internal routes, <a> for tel:, mailto:, http). */
export default function Button({ href, variant = 'primary', icon, iconRight, size = 'md', children, className = '', ...rest }: Props) {
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-0.5 ${
    size === 'lg' ? 'py-3.5 text-[15px]' : 'py-3 text-[14px]'
  } ${icon ? 'pr-6 pl-3' : 'px-6'} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {icon && (
        <span className={`grid size-8 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-12 ${variant === 'primary' || variant === 'ghost' ? 'bg-white/15' : 'bg-brand-50 text-brand-600'}`}>
          {icon}
        </span>
      )}
      {children}
      {iconRight && <span className="transition-transform duration-300 group-hover:translate-x-1">{iconRight}</span>}
    </>
  );
  if (href.startsWith('/') && !href.startsWith('//')) {
    return <Link href={href} className={cls} {...rest}>{inner}</Link>;
  }
  return <a href={href} className={cls} {...rest}>{inner}</a>;
}
