'use client';

import { useId, useState, type InputHTMLAttributes } from 'react';

type Props = {
  label: string;
  multiline?: boolean;
  error?: string;
  tone?: 'light' | 'dark';
} & InputHTMLAttributes<HTMLInputElement> & { rows?: number };

/** Input whose label floats above once focused or filled. */
export default function FloatingField({ label, multiline, error, tone = 'light', className = '', rows = 5, ...rest }: Props) {
  const id = useId();
  const [filled, setFilled] = useState(Boolean(rest.defaultValue));
  const base = `peer block w-full rounded-2xl border px-4 pt-6 pb-2.5 text-[15px] outline-none transition-all ${
    tone === 'dark'
      ? 'border-white/15 bg-white/[0.06] text-white focus:border-accent-300 focus:bg-white/10'
      : 'border-slate-200 bg-white/80 text-brand-950 focus:border-brand-500 focus:bg-white focus:shadow-[0_0_0_4px_rgb(42_120_187/0.12)]'
  } ${error ? '!border-red-400' : ''}`;
  const labelCls = `pointer-events-none absolute left-4 origin-left font-semibold transition-all duration-200 ${
    filled ? 'top-2 text-[11px] tracking-wide' : 'top-4 text-[15px]'
  } peer-focus:top-2 peer-focus:text-[11px] peer-focus:tracking-wide ${tone === 'dark' ? 'text-brand-200 peer-focus:text-accent-300' : 'text-slate-500 peer-focus:text-brand-600'}`;
  const onChange = (e: { target: { value: string } }) => setFilled(e.target.value.length > 0);

  return (
    <div className={className}>
      <div className="relative">
        {multiline ? (
          <textarea
            id={id}
            name={rest.name}
            rows={rows}
            required={rest.required}
            aria-invalid={Boolean(error)}
            onChange={onChange}
            className={`${base} resize-none`}
          />
        ) : (
          <input id={id} aria-invalid={Boolean(error)} {...rest} onChange={(e) => { onChange(e); rest.onChange?.(e); }} className={base} />
        )}
        <label htmlFor={id} className={labelCls}>{label}</label>
      </div>
      {error && <p role="alert" className="mt-1.5 pl-1 text-[13px] font-semibold text-red-500">{error}</p>}
    </div>
  );
}
